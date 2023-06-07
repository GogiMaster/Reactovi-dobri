import { useState } from "react"

const Kalkulator = () => {

    const [value,setValue]=useState<number>()

   
    
    const addToArray=(val:number)=>{
        setValue(val)
    }
    
    console.log(value)

  return (
    <>
    <div className="container--sm">
        <hr />
        <div className="calc">
            <div className="calc__display">
                <div className="calc__display__top">{value}</div>
                <div className="calc__display__bot">2</div>
            </div>
            <div className="calc__buttons">
                <button className="calc__buttons__btn">C</button>
                <button className="calc__buttons__btn">DEL</button>
                <button className="calc__buttons__btn">%</button>
                <button className="calc__buttons__btn">/</button>
                <button onClick={()=> addToArray(7)} className="calc__buttons__btn">7</button>
                <button onClick={()=> addToArray(8)} className="calc__buttons__btn">8</button>
                <button className="calc__buttons__btn">9</button>
                <button className="calc__buttons__btn">X</button>
                <button className="calc__buttons__btn">4</button>
                <button className="calc__buttons__btn">5</button>
                <button className="calc__buttons__btn">6</button>
                <button className="calc__buttons__btn">-</button>
                <button className="calc__buttons__btn">1</button>
                <button className="calc__buttons__btn">2</button>
                <button className="calc__buttons__btn">3</button>
                <button className="calc__buttons__btn">+</button>
                <button className="calc__buttons__btn">0</button>
                <button className="calc__buttons__btn">00</button>
                <button className="calc__buttons__btn">,</button>
                <button className="calc__buttons__btn">=</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Kalkulator