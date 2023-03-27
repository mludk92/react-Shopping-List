import { useState } from 'react'
import swal from 'sweetalert';
import axios from 'axios'

function ItemCount ({itemquantity,itemId, fetchItemList}) {
  const [counter,setCounter] = useState(itemquantity)
//funtion to increase click counter
let increaseItemCounter = () => {
  //counter += 1 do not modify state directly
  //increase counter
  //not sure why it is always .5 behind my count i call setCounter before the put request, so i found figure counter would = the correct value, fixed here by adding .5
    setCounter(count => parseFloat((parseFloat(count) + 0.5).toFixed(2)));
    console.log(counter +.5)
    axios.put(`/cart/${itemId}`, {ItemQuant: counter + 0.5 }).then((response)=>{
      fetchItemList()

    }).catch((error)=>{
      console.log(`Error in PUT ${error}`)
      alert('something went wrong')
    })
  };

  //decrease counter
  const decreaseItemCounter = () => {
    console.log( counter -.5)
    if(counter <= 0) {
    setCounter(counter -.5)}
    else{
      setCounter(count => parseFloat((parseFloat(count) - 0.5).toFixed(2)));
    }
    axios.put(`/cart/${itemId}`, {ItemQuant: counter - .5 }).then((response)=>{
      fetchItemList()

    }).catch((error)=>{
      console.log(`Error in PUT ${error}`)
      alert('something went wrong')
    })    
}

  //reset counter 
  const resetItemCounter = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCounter(0);
        swal("Deleted successfully!", {
          icon: "success",
        });
      } else {
        swal("Your item count has not changed!");
      }
    });
  };

    return (

        <div id="counter">
          <button id="plus" onClick={increaseItemCounter}>+</button>
          <button id="min"onClick={decreaseItemCounter}>-</button>
          <button id="reset" onClick={resetItemCounter}>Reset</button>
          <div>Item Count {counter}</div>
        </div>
    ) 
    }
    
    // All components must export 
    export default ItemCount