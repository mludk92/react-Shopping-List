import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
import axios from 'axios'


function DomItems) {

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

}

return (
    <div>
        {
            listOfItems.map((item)=>(
                //what we wanter to render
                <li key={item.id}>
                    {item.name} <br/> 
                    {item.quantity} <span> {item.unit} </span>
                </li>
            ))
        }
    </div>
) 


// All components must export 
export default DomItems
