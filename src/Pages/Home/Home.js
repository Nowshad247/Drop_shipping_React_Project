import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Featured from '../../Components/Featured/Featured';
import HowWork from '../../Components/HowWorkHome/HowWork';
import SearchBox from '../../Components/SearchBox/SearchBox';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <HowWork></HowWork>
            <SearchBox></SearchBox>
            <Featured></Featured>
        </>
    );
};

export default Home;