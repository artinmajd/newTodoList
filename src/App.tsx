import React, { useState } from 'react';
import logo from './logo.svg';
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
  return (
    <div className="App">
      <ul> 
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
             {item.name} {item.done? '    Done': '    Undone'}
           </li>
           )
         })
       }
      </ul>
    </div>
  );
}

export default App;
