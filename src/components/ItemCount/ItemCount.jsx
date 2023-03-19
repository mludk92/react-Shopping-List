import { useState } from 'react'


function ItemCount () {
  const [counter,setCounter] = useState(0)
//funtion to increase click counter
let increaseItemCounter = () =>{
  //counter += 1 do not modify state directly
  //increase counter
    setCounter(count => count + 1);
    console.log(counter)
  };

  //decrease counter
  const decreaseItemCounter = () => {
    console.log( counter)
    if(counter <= 0) {
    setCounter(counter)}
    else{
         setCounter(counter - 1)
    }    
}

  //reset counter 
  const resetItemCounter = () =>{
    setCounter(0)
  }

    return (
        <div>
          <button onClick={increaseItemCounter}>+</button>
          <button onClick={decreaseItemCounter}>-</button>
          <button onClick={resetItemCounter}>Reset</button>
          <div>Item Count {counter}</div>
        </div>
    ) 
    }
    
    // All components must export 
    export default ItemCount