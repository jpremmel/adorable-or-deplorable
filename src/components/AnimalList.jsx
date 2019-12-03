import React from 'react';
import Animal from './Animal';
import NewAnimalForm from './NewAnimalForm';
import PropTypes from 'prop-types';

function AnimalList(props) {
    console.log(props.animalList);

    let optionalSelectedAnimalContent = null;
    if (props.currentAnimal != null) {
        optionalSelectedAnimalContent = <p><em>Selected Animal: {props.animalList[props.currentAnimal].name}</em></p>
    }

    return(
        <div>
            {optionalSelectedAnimalContent}
            {Object.keys(props.animalList).map(function(animalId) {
                var animal = props.animalList[animalId];
                return <Animal 
                    name={animal.name}
                    adorable={animal.adorable} 
                    key={animalId} 
                    animalId={animalId}
                    onAnimalSelection={props.onAnimalSelection} />
            })}
        <NewAnimalForm onNewAnimalCreation={props.onNewAnimalCreation}/>
        </div>
    );
}

AnimalList.propTypes = {
    animalList: PropTypes.object,
    currentAnimal: PropTypes.string,
    onNewAnimalCreation: PropTypes.func,
    onAnimalSelection: PropTypes.func
};

export default AnimalList;