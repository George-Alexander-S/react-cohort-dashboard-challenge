import './Sidebar.css';
import '../../App.css'
import { Link } from 'react-router-dom';
import ProfileIcon from '../../assets/profile.svg'
import HomeIcon from '../../assets/home.svg'

function Sidebar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link>
                        <img src={HomeIcon} className='sidebar-icon'/>
                        Home
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src={ProfileIcon} className='sidebar-icon'/>
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar