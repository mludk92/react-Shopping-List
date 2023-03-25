import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
import axios from 'axios'
import DomItems from '../DomItems/DomItems'
import './ItemForm.css'


function ItemForm() {
    const [itemName, setItemName] = useState('')
    const [itemQuantity, setItemQuantity] = useState()
    const [itemUnit, setItemUnit]= useState('')
    const [listOfItems, setListOfItems] = useState(['No Items'])
    // All Components return what you want them to display
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

const submitForm = (event) => {
    event.preventDefault();
    axios.post('/cart', {
        //Using values from our var in state
        name: itemName,
        quantity: itemQuantity,
        unit: itemUnit
    }).then((response)=>{

        //clear out input fields
        setItemName('')
        setItemQuantity(0)
        setItemUnit('')
        // react version of get() after function
        fetchItemList() 
        
    }).catch((error)=>{
        console.log(`Error in POST ${error}`)
        alert('Something Went Wrong')
    })
    fetchItemList()
}
    return (
        <div>
            <h2>Add an Item </h2>
            {/* //use for testing {
                //this turn our Array into a string
                JSON.stringify(listOfCreatures)
            } */}
            <form id="formInput"onSubmit={submitForm}>
                Name: 
                <input type="text" required value={itemName}
                onChange={(event)=> setItemName(event.target.value)}> 
                </input>
                <br />
                Quantity: 
                <input type="number" required value={itemQuantity}
                onChange={(event)=>setItemQuantity(event.target.value)}>     
                </input>
                Unit: 
                <input type="text" value={itemUnit}
                onChange={(event)=>setItemUnit (event.target.value)}>     
                </input>
                <button type="submit">Add Item</button>
                <DomItems listOfItems={listOfItems}
                 fetchItemList={fetchItemList()}/>
            </form>
        </div>

    ) 
}

// All components must export 
export default ItemForm