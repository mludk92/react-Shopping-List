import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
import axios from 'axios'
import ItemCount from '../ItemCount/ItemCount.jsx';
//grid
import { Col, Row } from 'antd';
import './DomItems.css'
function DomItems(props) {

const listOfItems = props.listOfItems

// return (
  
//     listOfItems.map((item)=>(
//         //what we wanter to render
//         <ul id="listItem" key={item.id}>
//             <li id="items">{item.name} <br/> 
//             {item.quantity} 
//              {item.unit} 
//             <ItemCount />
//             </li>      
//         </ul>
      
//     )) 
// ) 
//     }

return (
    <div id="container">
    {listOfItems.map((item)=>(
        <div class="listItem" key={item.id}>
            <div class="items">{item.name}
            {item.quantity} 
            {item.unit} 
            <ItemCount />
            </div>      
        </div>
      
    ))}
    </div>
)
}




// All components must export 
export default DomItems
