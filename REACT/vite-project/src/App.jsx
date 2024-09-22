import UserCard from "./components/UserCard"
import user from './assets/user.jpg'
import flowers from './assets/flowers.jpeg'
import pahad from './assets/pahad.jpeg'
function App() {
  return (
    <div className="container">
      <UserCard name='vinita' image={user} style={{borderRadius:"15px"}}/>
      <UserCard  name='diya' image={flowers}  style={{borderRadius:"15px"}}/>
      <UserCard name='shikha' image={pahad}  style={{borderRadius:"15px"}}/>   
    </div>

  )
}

export default App
