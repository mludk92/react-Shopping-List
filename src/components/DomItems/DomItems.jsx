import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
import axios from 'axios'
import ItemCount from '../ItemCount/ItemCount.jsx';
//grid
//import { Col, Row } from 'antd';
import './DomItems.css'


function DomItems({listOfItems , fetchItemList}) {


const deleteItem = (id) => {
    console.log(`deleteItem ${id}`)
    axios.delete(`/cart/${id}`).then((response)=>{
        fetchItemList()
    }).catch((error)=>{
        console.log(`error in delete ${error}`)
        alert('something went wrong')
    })
}

return (
    <div id="container">
    {listOfItems.map((item)=>(
        <div class="listItem" key={item.id}>
            <div class="items"> {item.name}<br/>
            {item.quantity} {item.unit}<br/>
            <button onClick={() => deleteItem(item.id)}>Delete Item</button>
                <div  id="counter"><ItemCount/> </div> 
            </div>      
        </div>
      
    ))}
    </div>
)
}




// All components must export 
export default DomItems
