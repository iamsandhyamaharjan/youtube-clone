import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {LeftNavMenuItem} from "./LeftNavMenuItem"
import {categories} from "../utils/constants"
import {Context} from "../context/contextApi"
 const LeftNav = () => {
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all'>

      <div className="flex px-5 flex-col" >
        {
          categories.map((item)=>{
            return(

             <>
             <LeftNavMenuItem
             text={item.type === "home" ? "Home" : item.name}
             icon={item.icon}
             />
             </> 
            )
          })
        }
      </div>
    </div>
  )
}
export default LeftNav