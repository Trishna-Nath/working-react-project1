import React from 'react';
import { add, multifly } from '../../Utilities/calculate';

const Shoes = () => {
    const first = 66;
    const second = 76;
    const result = multifly(first,second);
    const sum =add(first,second);

    return (
        <div>
            <h1>This is Shoes section</h1>
            <p>result: {result} and total:{sum}</p>
        </div>
    );
};

export default Shoes;