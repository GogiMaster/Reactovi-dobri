import { useEffect, useState } from "react"
import fireworks from '../assets/Video/fireworks.mp4'

const Timer = () => {
    const [partyTime,setPartyTime]= useState(false)
    const [days,setDays]= useState(0)
    const [hours,setHours]= useState(0)
    const [minutes,setMinutes]= useState(0)
    const [seconds,setSeconds]= useState(0)

useEffect(() => {
 const target = new Date('07/12/2023 17:30:00')
//  const target = new Date('05/23/2023 13:45:00')

 const interval = setInterval(()=>{
    const now= new Date()
    const diffrence = target.getTime() - now.getTime()

    const d = Math.floor(diffrence / (1000 * 60* 60* 24))
    setDays(d)

    const h = Math.floor(
        (diffrence % (1000 *60*60*24)) / (1000*60*60)
    )
    setHours(h)

    const m = Math.floor(
        (diffrence %(1000*60*60))/ (1000*60)
    )
    setMinutes(m)

    const s = Math.floor((diffrence % (1000*60 )) / 1000)

    setSeconds(s)

    if(d <= 0 && h <=0 && m <= 0 && s <= 0 ){
        setPartyTime(true)
    }
 }, 1000)

 return () => clearInterval(interval)
}, [])


  return (
    
<>


        {partyTime ? ( 
           <div className="gotovo">
            <h1 className="gotovo__text">GOTOVOOOOOO</h1>
           <img className="firework" src="https://reactiongifs.me/cdn-cgi/imagedelivery/S36QsAbHn6yI9seDZ7V8aA/f25f4cf6-87a4-49a3-9625-b68e32c26700/w=500" alt="" />
           </div>
         ):(
             
             <div className="container">
        <div className="timer">
            <div className="timer__section">
                <span className="timer__counter">{days}</span>
                <h1 className="timer__label">Days</h1>
            </div>
            <span className="timer__divider">:</span>
            
            <div className="timer__section">
                <span className="timer__counter">{hours}</span>
                <h1 className="timer__label">Hours</h1>
            </div>
            <span className="timer__divider">:</span>
            <div className="timer__section">
                <span className="timer__counter">{minutes}</span>
                <h1 className="timer__label">Minutes</h1>
            </div>
            <span className="timer__divider">:</span>
            <div className="timer__section">
                <span className="timer__counter">{seconds}</span>
                <h1 className="timer__label">Seconds</h1>
            </div>
            
        </div>
    </div>
         )}
</>

  )
}

export default Timer