import React from 'react'
import { Banner2, InfoSection } from '../../Components';
import {
    SermonObjOne,
    SermonObjTwo
} from './data';

const Sermon = () => {
    return (
        <>
            <Banner2 {...SermonObjOne} />
            <InfoSection  {...SermonObjTwo} />
            <InfoSection  {...SermonObjTwo} />
            <InfoSection  {...SermonObjTwo} />
        </>
    )
}

export default Sermon
