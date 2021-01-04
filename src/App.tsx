import React, { useState } from 'react';
import './App.css';



function App() {

  const [listItems, setListItems]=useState(
  [
  {name: 'task1', done: true},
  {name: 'task2', done: true},
  {name: 'task3', done: false},
  {name: 'task4', done: false},
  {name: 'task5', done: true},
  ])
  const [inputValue, setInputeValue] = useState('');
  return (
    <div className="App">
      <ul > 
       {
         listItems.map((item,index)=>{
           return(
           <li> 
             <input type='checkbox' checked={item.done} 
             onClick={()=>{
               setListItems(
                 listItems.map((innerItem,innerIndex)=>innerIndex!==index? innerItem : {name: innerItem.name, done: !innerItem.done}),
                 )
             }}/>
              {`${index+1} - `} {item.name} {item.done? '    Done': '    Undone'}
              <button onClick={()=>setListItems(listItems.filter((x)=>item.name!==x.name))}> remove </button>
           </li>
           )
         })
       }
      </ul>
      <input value={inputValue} onChange={(event)=>setInputeValue(event.target.value)}/>
      <button onClick={()=>{
        setListItems([...listItems,{name: inputValue, done: false}])
        setInputeValue('');
      } }> Add Task</button>
    </div>
  );
}

export default App;
