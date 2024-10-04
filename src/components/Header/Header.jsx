import './Header.css'
import HeaderLogo from '../../assets/headerlogo.svg'
import ProfileIcon from '../../assets/profile.svg'

function Header () {
    return (
        <div className='header'>
            <img src={HeaderLogo} className='header-logo'/>
            <img src={ProfileIcon} />

        </div>
    )
}

export default Header