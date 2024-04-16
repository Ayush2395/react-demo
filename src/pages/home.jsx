import useAuth from "../hooks/useAuth"

const Home = () => {
    const { userData } = useAuth()
    const logout = () => {
        if (userData) {
            localStorage.removeItem('user')
        }
    }
    return <>
        <h1>Home page</h1>
        <button onClick={logout}>Logout</button>
    </>
}

export default Home