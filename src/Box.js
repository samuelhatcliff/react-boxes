import React, { useState } from "react";
import './box.css';

const Box = ({id, color, height, width, removeBox}) => {
    return (
        <div>
        <div 
        style = {{
        border: `solid ${color}`,
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor: `${color}`}}
        >
        </div>
        
        <button onclick= {removeBox(id)}>X</button>
        </div>
      
    )

}





export default Box;
