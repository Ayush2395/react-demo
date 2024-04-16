import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

const UserWrapper = ({ children }) => {

    const [userData, setUserData] = useState(null)

    const getUser = () => {
        const userStore = localStorage.getItem('user')
        if (userStore) {
            const user = JSON.parse(userStore)
            setUserData(user)
        } else {
            setUserData(null)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
}

export default UserWrapper