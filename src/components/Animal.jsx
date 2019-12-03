import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Animal(props) {

    let adorable;
    if (props.adorable != null) {
        adorable = <p>Adorable: {props.adorable.toString()}</p>;
    }

    return(
        <div>
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

export default Animal;