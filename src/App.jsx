import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'  // ✅ don't forget to import the CSS
import Index from "./routes/index.jsx"


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
         
    })
    AOS.refresh()
  }) 

  return (
    <>
      <Index/>
    </>
  )
}

export default App

