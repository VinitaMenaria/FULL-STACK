import React from 'react'    //rafce
import user from"../assets/user.jpg"
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>  
        {/* props  */}
        <img id ="user-img"src={props.image}  alt='vinita'></img>
         <p id='user-desc'>Hello I am vinita</p> 
    </div>
  )
}
export default UserCard
