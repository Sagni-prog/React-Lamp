import React,{useReducer,useContext} from 'react'
import logo from '../../asset/images/logo.png'
import Menu from '../../asset/images/menu.png'
import './header.css'
import LampReducer from '../../redusers/LampReducer'
import LampContext from '../../context/LampContext'


export const Header = () => {
    const {lamp,dispatch} = useContext(LampContext)
   
    const handleToggle = () => {
        dispatch({type: 'TOGGLE',lamp})    
    }
    return (
      <div className='nav'>
          <div className ='logo'>
              <img src= {Menu} className = 'menu__img' alt = 'menu'/>
              <img src={logo} className='logo__img' alt='logo' />
          </div>
          <div className='links'>
              <a href='#'>Latest</a>
              <a href='#'>Modern</a>
              <a href='#'>Contemporary</a>
              <a href='#'>Affordable</a>
                
          <a href='#' onClick={handleToggle} 
                    className = {lamp.isOn ? 'toggle__on' : 
                                             'toggle__off'
                } 
                       
                >
           <i className = {
                    lamp.isOn ? 'inside__left' : 
                    'inside__right'
                    }>
             </i>      
        </a>
          </div>
  
      </div>
   )
  }
  
