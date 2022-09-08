import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return( 
    <div className='App'>
      
      
      <div className='page'>
        
        <Sidebar/>
      
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Layout;