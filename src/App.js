import react, {useState,useReducer} from 'react';
import './App.css';
import { Text } from './component/Text/Text';
import { Header } from './component/header/Header';
 import Lamp from './component/Lamp/Lamp';
 import LampContext from './context/LampContext';
 import LampReducer from './redusers/LampReducer';

function App() {

  const [lamp,dispatch] = useReducer(LampReducer,{intensity: 5,isOn: true})

  return (
    
    <LampContext.Provider value={{lamp,dispatch}}>
    <div className='container'>
       <Header />
    <div className="grid__container">

    <div className='lamp__container'>
         <Lamp />
    </div>
        <Text />
           </div>
       </div>
       </LampContext.Provider>
  );
}
export default App;
