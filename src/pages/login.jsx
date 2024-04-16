import { useState } from "react"

const Login = () => {

    const [error, setError] = useState({ error: false, message: "" })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        if (email === "" || password === "") {
            setError({ error: true, message: "Please provide the credentials for login." })
            return;
        } else {
            const store = JSON.stringify({ email: email, password: password })
            localStorage.setItem('user', store)
        }
    }

    return <>
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
        {
            error.error && <div>
                {error.message}
            </div>
        }
    </>
}

export default Login