import React from 'react';
import { Redirect } from 'react-router';

const Home = () => {
    return (
        <>
        hi
 <Redirect to="/quiz" />
        </>
    );
}

export default Home;
