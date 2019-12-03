import React from 'react';
import Animal from './Animal';
import NewAnimalForm from './NewAnimalForm';
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
        <NewAnimalForm onNewAnimalCreation={props.onNewAnimalCreation}/>
        </div>
    );
}

AnimalList.propTypes = {
    animalList: PropTypes.object,
    onNewAnimalCreation: PropTypes.func
};

export default AnimalList;