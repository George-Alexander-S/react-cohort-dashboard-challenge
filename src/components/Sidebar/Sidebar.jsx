import './Sidebar.css';
import '../../App.css'
import { Link } from 'react-router-dom';
import ProfileIcon from '../../assets/profile.svg'
import HomeIcon from '../../assets/home.svg'
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <img src={HomeIcon} className='sidebar-icon'/>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                    <img src={ProfileIcon} className='sidebar-icon'/>
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar