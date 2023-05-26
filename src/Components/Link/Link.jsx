/* eslint-disable react/prop-types */

const Link = ( {route} ) => {
    return (
        <li className='mr-10 py-2  hover:bg-amber-600'>
          <a href={route.path}> {route.name}</a>
        </li>
    );
};

export default Link;