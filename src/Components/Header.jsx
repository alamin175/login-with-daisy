import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
        .then((result)=> {console.log(result);})
        .catch (error => console.log(error.message))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <Link to='/'><button className="btn btn-primary text-xl">Al-Amin</button></Link>
            <Link to='/login'><button className="btn btn-primary text-xl">Login</button></Link>
            <Link to='/register'><button className="btn btn-primary text-xl">Register</button></Link>
            <Link to='/profile'><button className="btn btn-primary text-xl">Profile</button></Link>
            <Link to='/orders'><button className="btn btn-primary text-xl">Orders</button></Link>

            {user?<>
                <span className="btn btn-xs">{user && user.email} </span>
                <button onClick={handleSignOut} className="btn btn-xs"> Sign Out </button>
            </> : <Link to='/login'>Login</Link>
            }
            </div>
        </div>
    );
};

export default Header;