import React from 'react';
import News from '../../News/News';
import Tours from '../../Tours/Tours';
import TourSearch from '../../TourSearch/TourSearch';
import Banner from '../Banner/Banner';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TourSearch></TourSearch>
            <Tours></Tours>
            <Statistics></Statistics>
            <News></News>
        </>
    );
};

export default Home;