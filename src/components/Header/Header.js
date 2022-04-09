import React from "react";
import top_left from "../../img/top_left.png"
import top_right from "../../img/top_right.png"
import "./header.css"


export default function Header() {
    return(
       
       <div className="nav">
            <img  src= {top_left} alt = "img"/>
            <img  src= {top_right} alt = "img"/>

       </div>
    )
}