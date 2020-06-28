import React from 'react';
import Shoe from './Shoe';

const ShoeRender = ({shoes}) => {
    return (
      <div className="shoe-list">
        {shoes.map((r,index) => {
          return <Shoe
          key={r.id} r={r}
          />
      })}
      </div>
    )

}
export default ShoeRender;
