import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"


const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color: "blue", height: "6", width: "5"}, 
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, 
        {...newBox, id: uuid()}])
    }
    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id))
    }
    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, color, height, width}) =>
                    <Box removeBox= {removeBox} id= {id} color={color} height={height} width= {width} />)}
            </div>
        </div>
      );
}



export default BoxList;
