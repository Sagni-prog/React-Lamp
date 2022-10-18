import { useReducer } from "react"

const LampReducer = (state,action) => {
    switch(action.type){
      case 'INC' : 
      if(state.intensity < 5){
        return {
            ...state,intensity: state.intensity + 1
          }    
      }
      else{
          return {
        ...state,intensity: state.intensity
        }
      }
      
    case 'DEC' :
        if(state.intensity > 0){
            return  {
                ...state,intensity: state.intensity - 1
             }
        }
        else{
            return{
                ...state,intensity: state.intensity
            }
        }
     
     case 'RESET' :
       return {
         ...state,intensity: 0
       }
       case 'TOGGLE' :
           return{
            ...state,isOn: !state.isOn
           }
       }
  }

export default LampReducer