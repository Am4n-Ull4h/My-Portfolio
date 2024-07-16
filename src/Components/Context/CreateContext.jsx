import React, { createContext, Fragment } from 'react'

function CreateContext({ children}) {

    let myContext = createContext()
  return (
    <Fragment>
        <myContext.Provider value={
            {
                
            }
        }>
            {
                children
            }
        </myContext.Provider>
      
    </Fragment>
  )
}

export default CreateContext
