import UserCard from "./components/UserCard"
import user from './assets/user.jpg'
import flowers from './assets/flowers.jpeg'
import pahad from './assets/pahad.jpeg'
import Counter from "./components/Counter"
import './App.css'
import Props from "./components/Props"
import { useState } from "react"
import Button from "./components/Button"
import StateLifting from "./components/StateLifting"

function App() {

  const [count,setCount]=useState(0);

  function handleClick(){
    setCount(count+1);
  }

// State lifting 
const [name,setName]=useState('');

  return (
    <div className="container">
      {/* <UserCard name='vinita' image={user} style={{borderRadius:"15px"}}/>
      <UserCard  name='diya' image={flowers}  style={{borderRadius:"15px"}}/>
      <UserCard name='shikha' image={pahad}  style={{borderRadius:"15px"}}/>    */}

     {/* <Counter/> */}
{/* 
     <Props>
      <h1>Hello</h1>
      <p>This is a web dev course</p>
     </Props>
     <Props>vinita this side</Props> */}
{/* 
  <Button incrementCount={handleClick} text="Click me">
    <h1>{count}</h1>
  </Button> */}

<StateLifting name={name} setName={setName} />
    </div>

  )
}

export default App
