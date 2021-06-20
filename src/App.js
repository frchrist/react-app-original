import react from "react"
import Footer from "./components/Layout/footer";
import Header from "./components/Layout/header";
import Body from "./components/Layout/body";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Error404 from "./components/pages/404";
//this is entry point for react application
function App() {
  // const [openModal, setOpenModal] = useState(false)…
  return (
    <react.Fragment>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' component={Body} exact/>
        <Route path='/home' component={Body} exact/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
        <Route path="/" component={Error404} />
      </Switch>
      <Footer/>
      </BrowserRouter>
    </react.Fragment>
  );
}

export default App;
