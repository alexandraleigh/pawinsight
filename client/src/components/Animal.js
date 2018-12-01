import React from 'react';

const Animal = ({animal}) =>
    <div className="single-animal" key={animal.id}>
        <h4>{animal.name}</h4>
        <p>{animal.breed}</p>
    </div>

export default Animal;
