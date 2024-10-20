import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './Layout.css' ;


const Layout = (props) => {

return (

     <div className="layout"> 
        <Header > </Header>
        <main className="main">
        {props.children}
        </main>
        <Footer> </Footer>
     </div>

);

}


export default Layout ;