import './Header.css';
import Search from '../Search/Search';
import Login from '../login/Login'
//import signUp from './componants/signUp/signUp';

//, NavLink  Router  ,

function Header() {




  return (
    <div className='contaner'>
    <div className='logo'>
      <img src='../../image/Blood_Donation_Logo-removebg-preview.png' alt='logo'></img>


    </div>
    <div className='search'>
      <Search/>
    </div>
    <div className='login'>
      
    
    <button>sign in</button>
    <button>sign up</button>
    </div>

    
    </div>
  );
}

export default Header;
