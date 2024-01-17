import React from 'react';
import CatLofiPic from '../../assets/cat-lofi.png';

const EntityItem = ({ entity }) => {
  const CatLofi=CatLofiPic;
  return (
    <div className="entity-item">
      <div className="entity-image">
        <img
          src={entity.image || CatLofi}
          alt={entity.name || 'Default Alt Text'}
        />
      </div>
      <div className="entity-details">
        <p className="name">{entity.name}</p>
        <p>{entity.snippet}</p>
      </div>
    </div>
  );
};

export default EntityItem;
