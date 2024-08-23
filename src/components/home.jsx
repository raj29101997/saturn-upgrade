import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PropertyModal from "../Modal/Modal"
import useMobile from "../hooks/useMobile"
import { Button } from "react-bootstrap"
import "../App.css"

let Home = ()=>{
    let navigate = useNavigate()
    let checkMobile = useMobile()
    const [open, setOpen] = useState(false)

    function handleOpen() {
      if(checkMobile){
        console.log(useMobile, 'use mobile')
        navigate('/mobileview')
      }
      setOpen(true)
    }
    
    function handleClose() {
      setOpen(false)
    }
    console.log('open', open)
    return (
        <>
          <div className='App'>
            <Button onClick={handleOpen} variant="primary">
              Button
            </Button>
          </div>
          {
            open && <PropertyModal open={open} onClose={handleClose} />
          }
        
        </>
      )
}

export default Home