import React from 'react';
import { 
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive

} from './data';
import { Banner, Blog, Event, Minister, Service} from '../../Components';

const Home = () => {
    return (
        <>
            <Banner {...homeObjOne} />
            <Service {...homeObjTwo} />
            <Event {...homeObjThree} />
            <Blog {...homeObjFour} />
            <Minister {...homeObjFive} />

        </>
    )
}

export default Home