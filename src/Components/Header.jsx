import logo from '../assets/pietroFlix.png'

export default function Header() {
    return (

        <div className="header">
            {/* <h1 className="title-site">PietroTv</h1> */}
           <img src={logo} alt="" className='header-logo' />

        </div>
    )
}