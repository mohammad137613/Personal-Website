import React from "react"
import Facebook from "./Facebook"
import './Icons.css'
import Twitter from "./Twitter"

const itemsList ={
  Facebook:Facebook,
  Twitter:Twitter
}

const Icons = ({name})=>{
  const Icon = itemsList[name]

  return(
      <span className="icon-item">
        <Icon />
      </span>
  )
}

export default Icons