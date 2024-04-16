import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import useAuth from "./hooks/useAuth";


function App() {
  const { userData } = useAuth()
  return (
    <>
      <Routes>
        <Route path="/" element={userData !== null ? <Home /> : <Navigate to={'/login'} />} />
        <Route path="/login" element={userData === null ? <Login /> : <Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
