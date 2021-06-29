import {Component} from "react"
import classes from "./css/about.module.css"
import Chart from "react-apexcharts";

class About extends Component {
  constructor(props) {
    super(props);
    this.data =  [30, 40, 45, 50, 100,90,95,99,70, 45, 60, 49, 60, 70, 91, 10]
    this.state = {
      options: {
        chart: {
          type: 'area',
          height: 300,
          sparkline: {
            enabled: true
          },},
          stroke: {
            curve: 'straight',
            colors:["purple",],
            width:2,
          },
          fill: {
            opacity: 0.1,
            colors:["#1ce",]
          },
          colors: ['#1ce', "red"],
          title: {
            text: this.max(this.data),
            offsetX: 0,
            style: {
              fontSize: '24px',
            }
          },
          subtitle: {
            text: 'Expenses',
            offsetX: 0,
            style: {
              fontSize: '14px',
            }
          
          },
          yaxis: {
            min: 0
          },
          xaxis: {
            dates: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006]
          },
        },
      
      series: [
        {
          name: "BTC (USD)",
          data: this.data
        }
      ],
      
      
     
     
      
      
     
      
    };
  }
  max(arr){
    let m= 0;
    for(let i of arr){
      if(m < i){
        m = i
      }
    }
    return m
  }

  
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className={classes.mixed}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="200"
            />

          <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="200"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;