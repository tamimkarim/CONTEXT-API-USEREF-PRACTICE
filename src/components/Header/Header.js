import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h3>This is Header :{category} </h3>
            <button onClick={() => setCategory(category + 1)}>Increment</button>

        </div>
    );
};

export default Header;