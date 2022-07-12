import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    

    return (
        <AppContext.Provider
            value={{
                user, setUser,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export { AppContext, AppProvider }