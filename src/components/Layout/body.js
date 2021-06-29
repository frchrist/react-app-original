import classes from "./body.module.css"
import Card from "../utils/card"
import CardItem from "../utils/carditem";

const items = [

   {
      title : "python pour les nulls",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
      username:"hack2",
      date:"12/02/02",
      prog:'90'
   },

   {
      title : "big bang theory",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
      username:"gildas",
      date:"12/02/02",
      prog:'90'
   },

   {
      title : "user interface",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
      username:"coredas",
      date:"12/02/02",
      prog:'20'
   },

   {
      title : "core for programming",
      content:"la programmation python est très cool",
      username:"D@RiCh",
      date:"12/02/02",
      prog:'10'
   },
   {
      title : "nodejs pour les nulls",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
      username:"christian",
      date:"12/02/02",
      prog:'40'
   },

   {
      title : "Java pour les nulls",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
      username:"coding12",
      date:"12/02/02",
      prog:'15'
   },

   {
      title : "c++ pour les nulls",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
      username:"coding12",
      date:"12/02/10",
      prog:'30'
   },
]
function Body(){
   document.title = "Bienvenue sur Mon application react"
  
   
      let id = 1;
      // console.log(posts)
      return <section className={classes.content}>
       
         {items.map(article=>{
            let url = "detail/"+id
            id++
            return <Card key={article.title}>
            <CardItem title={article.title} 
            content={article.body}
            username={article.userId}
            date={article.id}
            prog={article.prog}
            read={url}
            />
         </Card>
         })}
         
         
         
      </section> 
   
  
}

export default Body;