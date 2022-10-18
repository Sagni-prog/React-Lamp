import React,{useReducer,useContext} from 'react'
import './text.css'
import LampReducer from '../../redusers/LampReducer'
import LampContext from '../../context/LampContext'

export const Text = () => {
  
  let className = ''

   const {lamp,dispatch} = useContext(LampContext)
  
  const increaseLight = () => {
      dispatch({type: 'INC',lamp})
   }
 
   const reduceLight = () => {
     dispatch({type: 'DEC',lamp})
   }


  return (
    <div className='text__container'>
      <div className='text'>
        <h1><span>Latest</span><br/>in Lighting</h1>
        <p>This is the first lamp from our company. we're making a huge collection of modern Lamps in all catagories from home use to office use.</p>
        <a href = "#" className='btn'>Check All Cellections</a>
           <div className='progress__bar'>
             <p onClick={reduceLight}>-</p>
              <div className='progress'>
                <div className= {
                  lamp.intensity === 0 ? 'p__inside__0' : lamp.intensity === 1 ? 'p__inside__20' : lamp.intensity === 2 ? 'p__inside__40' : lamp.intensity === 3 ? 'p__inside__60': lamp.intensity === 4 ? 'p__inside__80' :'p__inside__100'
                }
              >

                </div>
                </div>
               <p onClick={increaseLight}>+</p>
            </div>
        </div>
    </div>
  )

}
