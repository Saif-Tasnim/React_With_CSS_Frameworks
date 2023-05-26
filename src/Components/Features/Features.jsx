import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ( {feature} ) => {
    return (
        <div className='flex  items-center gap-2 text-base mb-2'>
            <CheckCircleIcon className="h-6 w-6 text-blue-500" />  
            <span> {feature} </span>
        </div>
    );
};

export default Features;