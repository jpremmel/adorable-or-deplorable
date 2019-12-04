import React from 'react';
import Animal from './Animal';
import NewAnimalForm from './NewAnimalForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AnimalList(props) {

    let optionalSelectedAnimalContent = null;
    if (props.currentAnimal.length > 0) {
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
                    animalId={animalId} />
            })}
        <NewAnimalForm />
        </div>
    );
}

AnimalList.propTypes = {
    animalList: PropTypes.object,
    currentAnimal: PropTypes.string
};

const mapStateToProps = state => {
    return {
        currentAnimal: state.currentAnimal,
        animalList: state.masterAnimalList
    };
};

export default connect(mapStateToProps)(AnimalList);