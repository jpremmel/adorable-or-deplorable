import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

function Animal(props) {

    function handleSavingSelectedAnimal(animalId) {
        const { dispatch } = props;
        const action = {
            type: 'SELECT_ANIMAL',
            animalId: animalId
        };
        dispatch(action);
    }

    let adorable;
    if (props.adorable != null) {
        adorable = <p>Adorable: {props.adorable.toString()}</p>;
    }

    return(
        <div onClick={() => {handleSavingSelectedAnimal(props.animalId);}}>
            <h3>{props.name}</h3>
            {adorable}
        </div>
    );
}

Animal.propTypes = {
    name: PropTypes.string,
    adorable: PropTypes.bool,
    animalId: PropTypes.string
};

export default connect()(Animal);