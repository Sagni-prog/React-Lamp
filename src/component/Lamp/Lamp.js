import React, {useState,useReducer,useContext} from 'react'
import './lamp.css'
// import lamp from '../../asset/images/lamp.png'
import lamp2 from '../../asset/images/lamp2.png'
import light from '../../asset/images/light.png'
import LampReducer from '../../redusers/LampReducer'
import LampContext from '../../context/LampContext'


 const Lamp = () => {
 

    const {lamp, dispatch} = useContext(LampContext)
    let classIntensity = ''
    let classLight = ''

   const increaseLight = () => {
       dispatch({type: 'INC',lamp})
     
    }

    const myClass2 = () => {
   
      if(lamp.isOn === true){
         return 'true'
      }
      else{
         return 'false'
      }   
  }
  
    const reduceLight = () => {
      dispatch({type: 'DEC',lamp})
      
    }

    const myClass = () => {
            return classIntensity = 
                  lamp.intensity === 5 ? 'intensity__100' :
                  lamp.intensity === 4 ? 'intensity__80' :
                  lamp.intensity === 3 ? 'intensity__60' :
                  lamp.intensity === 2 ? 'intensity__40' :
                  lamp.intensity === 1 ? 'intensity__20' :
                                     'intensity__0'                                             
                             }

return (
   
   <>
    <div className='lamp__container'>
      <div className='the__lamp'>
        <img src= {lamp2} className='lamp' alt='the image of lamp hangigng on ceiling'/>
        </div>
        <div className={myClass() + ' the__light'}>
        <img src= {light} className= {lamp.isOn ? 'light' : 'light__off'} alt='the light'/>
        </div>
      </div>
    </>
    
    )
}

export default Lamp
