import React from 'react';
import Animal from './Animal';
import PropTypes from 'prop-types';

function AnimalList(props) {
    console.log(props.animalList);
    return(
        <div>
            {Object.keys(props.animalList).map(function(animalId) {
                var animal = props.animalList[animalId];
                return <Animal 
                    name={animal.name}
                    adorable={animal.adorable} 
                    key={animalId} 
                    animalId={animalId} />
            })}
        </div>
    );
}

AnimalList.propTypes = {
    animalList: PropTypes.object
};

export default AnimalList;