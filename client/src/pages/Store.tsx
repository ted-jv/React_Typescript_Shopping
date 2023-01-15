import React from 'react';
import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="container">
        {storeItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
