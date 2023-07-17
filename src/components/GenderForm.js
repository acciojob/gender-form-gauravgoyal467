import React, { useState } from 'react'

const GenderForm = () => {
    const[selectedGender,setSelectedGender]=useState("");
  return (
    <div>
        <form>
            <h2>Select your gender:</h2>
            <input type="radio" id="male" value="male" name="gender" onChange={(e)=>setSelectedGender(e.target.value)}/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="female" name="gender" onChange={(e)=>setSelectedGender(e.target.value)}/>
            <label htmlFor="female">Female</label>

            {selectedGender=="male" && 
            <div>
                <h2>Select your shirt size:</h2>
                <select name="size" id="sizes">
                    <option value="">Select Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            }
            
            {selectedGender=="female" &&
            <div>
                <h2>Select your dress size:</h2>
                <select name="size" id="sizes">
                    <option value="">Select Size</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                </select>
            </div>
            }
        </form>
    </div>
  )
}

export default GenderForm