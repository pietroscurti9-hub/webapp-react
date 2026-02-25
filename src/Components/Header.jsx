import { Link, Links } from 'react-router-dom'
import logo from '../assets/pietroFlix.png'

export default function Header() {
    return (

        <div className="header">
            {/* <h1 className="title-site">PietroTv</h1> */}
            <Link to={'/'}>
                <img src={logo} alt="" className='header-logo' />
            </Link>
        </div>


    )
}