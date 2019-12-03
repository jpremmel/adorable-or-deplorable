import React from 'react';
import PropTypes from 'prop-types';

function NewAnimalForm(props) {
    let _name = null;

    function handleNewAnimalFormSubmission(event) {
        event.preventDefault();
        props.onNewAnimalCreation({name: _name.value});
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

export default NewAnimalForm;