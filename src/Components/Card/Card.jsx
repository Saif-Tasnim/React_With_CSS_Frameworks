import React from 'react';
import Features from '../Features/Features';

const Card = ({ price }) => {
    return (
        <div className='border-2 mx-4 text-center rounded-lg p-3 flex flex-col'>
            
            <h2 className='text-6xl font-extrabold text-yellow-600 mb-4'> ${price.price} </h2>
            <h4 className='text-3xl mb-3 text-indigo-700 font-bold'>{price.name}</h4>
            <p className='text-3xl pt-4 text-left underline mb-4'>Features : </p>
             <div>
                {
                    price.features.map((feature,idx) =>
                    <Features
                    key = {idx}
                    feature = {feature}
                    ></Features> 
                    )
                }
             </div>

             <button className='bg-green-500 text-white w-full rounded p-2 mt-auto'> Buy Now </button>
        </div>
    );
};

export default Card;