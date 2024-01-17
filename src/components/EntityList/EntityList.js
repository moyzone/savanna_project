import React from 'react';
import EntityItem from '../EntityItem/EntityItem';

const EntityList = ({ entities }) => {
  return (
    <div className="entity-list">
      {entities.map((entity, index) => (
        <EntityItem key={index} entity={entity} />
      ))}
    </div>
  );
};

export default EntityList;
