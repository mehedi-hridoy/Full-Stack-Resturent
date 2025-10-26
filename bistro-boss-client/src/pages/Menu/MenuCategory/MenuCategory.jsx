import React from 'react';
import MenuItem from '../../shared/MenuItem/MenuItem';
import Cover from '../../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
        <div className='pt-12'>
            {title && <Cover img={img

            } title={title}></Cover>}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 my-16">
                    {
                        items.map(item => (
                            <MenuItem key={item._id} item={item} />
                        ))
                    }
                </div>
        {title && (
          <Link to={`/order/${title.toLowerCase()}`}>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
          </Link>
        )}
        </div>
    );
};

export default MenuCategory;