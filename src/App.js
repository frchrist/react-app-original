import react from "react"
import Footer from "./components/Layout/footer";
import Header from "./components/Layout/header";
import Body from "./components/Layout/body";

//this is entry point for react application
function App() {
  return (
    <react.Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </react.Fragment>
  );
}

export default App;
