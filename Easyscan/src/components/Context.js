import React, { useState } from 'react'

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
    const [liteModeCheck, setChecked] = useState(false);

    return (
        <UserContext.Provider
            value={[
                liteModeCheck
            ]}
        >
            {children}
        </UserContext.Provider>
    )
}
