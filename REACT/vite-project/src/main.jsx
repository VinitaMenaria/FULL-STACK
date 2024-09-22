import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import UserCard from './components/UserCard.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
         {/* <Navbar/> */}
        <App/>

  
</StrictMode>

);
