import { useNavigate } from "react-router-dom";

function Navbar (){
    const navigate =useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        navigate('/login')
    }

    return (
        <nav>
            <button onClick={handleLogout}> Logout </button>
        </nav>
    )
}