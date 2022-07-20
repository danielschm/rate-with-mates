import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();

    // const {session_id} = useParams();
    // const [data, setData] = useState([]);
    // const [user_id, setUser_id] = useState(null);
    //
    // const registerUser = async (session_id) => {
    //     const response = await fetch(`${API_URL}/create_new_user?session_id=${session_id}`);
    //     const data = await response.json();
    //     setUser_id(data.user_id);
    // }
    //
    // const getData = async (session_id) => {
    //     const response = await fetch(`${API_URL}/get_urls?session_id=${session_id}`);
    //     const data = await response.json();
    //     setData(data.urls);
    // }

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
