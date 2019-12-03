import React from 'react';
import PropTypes from 'prop-types';
import Animal from './Animal';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewAnimalForm(props) {
    let _name = null;

    function handleNewAnimalFormSubmission(event) {
        event.preventDefault();
        const { dispatch } = props;
        const action = {
            type: 'ADD_ANIMAL',
            name: _name.value,
            animalId: v4(),
        }
        dispatch(action);
        _name.value = '';
    }

    return(
        <div>
            <form onSubmit={handleNewAnimalFormSubmission}>
                <input
                    type='text'
                    id='name'
                    placeholder='Animal Name'
                    ref={(input) => {_name = input;}}/>
                <button type='submit'>Add Animal</button>
            </form>
        </div>
    );
}

NewAnimalForm.propTypes = {
    onNewAnimalCreation: PropTypes.func
};

NewAnimalForm = connect()(NewAnimalForm); //makes the connect() function return a NewAnimalForm. NewAnimalForm now has access to Redux's dispatch() function.

export default NewAnimalForm;