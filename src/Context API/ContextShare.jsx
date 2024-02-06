import React, { createContext, useState } from 'react'
export const addProjectResponseContext= createContext()

const ContextShare = ({children}) => {
    const [addProjectResponse,setAddProjectResponse]=useState("")
  return (
    <>
    <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
    {children}
    </addProjectResponseContext.Provider>
    </>
  )
}

export default ContextShare