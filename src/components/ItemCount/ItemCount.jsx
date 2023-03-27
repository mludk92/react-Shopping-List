import { useState } from 'react'
import swal from 'sweetalert';


function ItemCount ({itemquantity}) {
  const [counter,setCounter] = useState(itemquantity)
//funtion to increase click counter
let increaseItemCounter = () => {
  //counter += 1 do not modify state directly
  //increase counter
    setCounter(count => parseFloat((parseFloat(count) + 0.5).toFixed(2)));
    console.log(counter)
  };

  //decrease counter
  const decreaseItemCounter = () => {
    console.log( counter)
    if(counter <= 0) {
    setCounter(counter)}
    else{
      setCounter(count => parseFloat((parseFloat(count) - 0.5).toFixed(2)));
    }    
}

  //reset counter 
  const resetItemCounter = () =>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
  })
  .then((willDelete) => {
      if (willDelete) {
          setCounter(0)
              .then((response) =>  {
                  swal("Deleted successfully!", {
                          icon: "success",
                      });
              })
              .catch(() => {
                  swal("Error!", "Failed to delete!", "error");
              })
      }
  })
  }

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