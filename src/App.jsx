import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button.jsx"
import AppRoutes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button> Click Button 1</Button> */}

      <AppRoutes/>

      
    </>
  )
}

export default App
