import React from 'react';
import ErrorPic from '../../../images/ErrorPic.jpg';

const NotFound = () => {
    return (
        <div>
            <h2>Sorry The Page is not Found</h2>
            <img className='w-100 h-100' src={ErrorPic} alt="" />
        </div>
    );
};

export default NotFound;