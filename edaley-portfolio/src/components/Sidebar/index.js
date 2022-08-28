import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import './index.scss';


const Sidebar = () => (
  <div className="nav-bar">
    <Link className='logo' to='/'>
      
    </Link>
    <nav>
      <NavLink exact="true" activeclassname='active' className="navlink" to="/">
        HOME
      </NavLink>
      <NavLink exact="true" activeclassname='active' className="navlink work-link" to="/work">
        WORK
      </NavLink>
      <NavLink exact="true" activeclassname='active' className="navlink about-link" to="/about">
        ABOUT
      </NavLink>
      <NavLink exact="true" activeclassname='active' className="navlink contact-link" to="/contact">
        CONTACT
      </NavLink>
    </nav>
  </div>
 
)

export default Sidebar;