import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
import axios from 'axios'
import ItemCount from '../ItemCount/ItemCount.jsx';

function DomItems() {

    const [listOfItems, setListOfItems] = useState(['No Items'])
//GET
const fetchItemList = () => {
    axios.get('/cart').then((response)=>{
        setListOfItems(response.data)
    }).catch((error)=>{
        console.log(`Error in GET ${error}`)
        alert('Something Went Wrong')
    })
}
useEffect(()=> {
    // At this point, React is Ready!
    fetchItemList()
},[]) //!Remember the empty array

return (
  
    listOfItems.map((item)=>(
        //what we wanter to render
        <li id="listItem" key={item.id}>
            <ul id="items">{item.name} <br/> 
            {item.quantity} <span> {item.unit} </span>
            <ItemCount />
            </ul>      
        </li>
        
    )) 
) 
}




// All components must export 
export default DomItems
