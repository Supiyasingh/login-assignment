import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <div className='headline'>
                <h2>Welcome to PopX</h2>
                <p className='home-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className='btn-home'>
                <Link to={"/auth/signup"}> <button className='btn-create-account'>Create Account</button></Link>
            </div>
            <div className='btn-home'>
                <Link to={"/auth/login"}><button className='btn-already-register'>Already Register?Login</button></Link>
            </div>
        </div>
    )
}

export default Home