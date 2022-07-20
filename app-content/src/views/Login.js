import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();

    function submitLogin() {
        navigate('/rate');
    }

    return (
        <div>
            <Button text={"Login"} onClick={submitLogin}/>
        </div>
    );
}

export default Login;
