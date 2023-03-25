import React from 'react';
import { add } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Cosmatics = () => {
    const first = 55;
    const second = 66;
    const total = add(first,second);
    return (
        <div>
           <h1>Welcome to my cosmatics store</h1> 
           <p>total: {total}</p>
        </div>
    );
};

export default Cosmatics;