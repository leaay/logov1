
import React,{useContext,useEffect} from "react";
import Header from "./componets/Header";
import RoutesComponent from "./componets/RoutesComponent";
import ProductPage from "./componets/ProductPage";
import { Context } from "./context/ContextProvider";
import Slidermenu from "./componets/SliderMenu";
import './css/style.css'
function App() {

  const {productPage,slider } = useContext(Context)



  return (
    <div className="App">
      <Header />
     <RoutesComponent />
      {slider ? <Slidermenu /> : null}
     {productPage ? <ProductPage/> : null }
      
    </div>
  );
}

export default App;
