import React from 'react';

const EntityItem = ({ entity }) => {
  const defaultImageUrl = process.env.PUBLIC_URL + '/cat-lofi.png';

  return (
    <div className="entity-item">
      <div className="entity-image">
        <img
          src={entity.imageUrl || defaultImageUrl}
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
