
import { useState } from 'react'
import './App.css'


function App() {

  const [height,setheight]=useState("")
  const [weight,setweight] = useState("")
  const [bmi,setbmi]= useState("")
  const [statuss,setstatuss] = useState("")

  const calculateBmi = ()=>{
    if(height && weight){
      const heightInMeters = height/100;
      const bmiValue = (weight/(heightInMeters ** 2)).toFixed(2);
      setbmi(bmiValue)
      stateStatus(bmiValue)
    }
    else{
      alert('Please enter valid height and weight')
    }
  }
  const stateStatus = (bmiValue)=>{
    if(bmiValue < 18.5){
      setstatuss("UnderWeight")
    }
    else if(bmiValue >=18.5 && bmiValue <24.9){
      setstatuss("Normal Weight")
    }
    else if(bmiValue >=25 && bmiValue < 29.9){
      setstatuss("Over Weight")
    }
    else{
      setstatuss("obesity")
    }
  }

  const handlecancel=()=>{
    setheight("")
    setweight("")
    setbmi("")
    setstatuss("")
  }

  return (
    <>
    <div className='bg-info' style={{height:'100vh',width:'100%'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form className='shadow p-4 my-5 bg-light'>
              <h3 className='text-center mb-4 text-success'>BMI CALCULATOR</h3>

              <div className="mb-3">
                <label>Height (cm)</label>
                <input type="text" value={height} placeholder='Enter your height' className='form-control mt-2' onChange={(e)=>setheight(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label>Weight (kg)</label>
                <input type="text" value={weight} placeholder='Enter your weight' className='form-control mt-2' onChange={(e)=>setweight(e.target.value)}/>
              </div>

              <div className='mb-3 d-flex justify-content-evenly'>
                <button className='btn btn-success' onClick={calculateBmi}>Submit</button>
                
                <button className='btn btn-warning' onClick={handlecancel}>Reload</button>
              </div>
            </form>

            {bmi && (
              <div style={{marginTop:"25px"}}>
              <h4 className='text-center'>Your BMI : {bmi}</h4>
              <h5 className='text-center'>{statuss}</h5>
            </div>
          )}

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
