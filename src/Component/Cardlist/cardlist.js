import React from 'react'
import './cardlist.css';
import Card from '../Card/card.js';


export const Cardlist=({users})=>{
	/*console.log(props)*/
	return(
		     <div className="list">
		    { users.map(users=><Card key={users.id} name={users.name} email={users.email} id={users.id}/>)
		    }
            </div>
            );
}
