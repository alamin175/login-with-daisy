import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
  const {name} = useContext(AuthContext)
    return (
        <div>
          <h1>Home {name} </h1>  
        </div>
    );
};

export default Home;