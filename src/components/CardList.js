import React from 'react';
import Card from './Card';
//import Tramp from './Tramp';


let CardList = ({robots})=>{
    let test = 'thisis a test';
   
    let cardComponent = robots.map((user,i) => {
        
        return    (
           <Card  key = {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
                  
                 
        
                  )
    })
    
    return (
    
    <div > 
         {cardComponent}
                
 </div>
    
    
    );
}
export default CardList;