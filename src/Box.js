import React, { useState } from "react";
import './box.css';

const Box = ({id, color, height, width, removeBox}) => {
    function remove () {
        removeBox(id)
    }
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
        
        <button onClick= {remove}>X</button>
        </div>
      
    )

}





export default Box;
