import React from 'react'

export const ManagemenContext = React.createContext()
export default function ManagementProvider({children}){

  const [userType, setUserType] = React.useState("user");
  if(userType=== undefined) return <h1>Loading...</h1>


  return (
    <ManagemenContext.Provider value={{userType,setUserType}}>
        {children}
    </ManagemenContext.Provider>
    )
}

export const useManagentContext = () => React.useContext(ManagemenContext)