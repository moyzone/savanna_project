import React from 'react';
import CatLofiPic from '../../assets/cat-lofi.png';

const EntityItem = ({ entity }) => {
  const CatLofi=CatLofiPic;
  return (
    <div className="entity-item">
      <div className="entity-image">
        <img
        src={CatLofi}
        alt={entity.name || 'Entity Image'}
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
