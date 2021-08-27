import React from 'react';
import '../../../style.css';

const Label = (props) => {
    return (
   
        <label className="text-gray-700 text-sm font-mono dark:text-gray-100">
            <input className="w-4 h-4 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="checkbox" value="xs"/>
            {props.text}
        </label>

        
    )
}

export default Label;