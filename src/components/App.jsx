import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import AnimalList from './AnimalList';
import Animal from './Animal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' render={()=><AnimalList />}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    masterAnimalList: PropTypes.object
};

const mapStateToProps = state => {
    return {
        masterAnimalList: state.masterAnimalList //React masterAnimalList is being mapped to the Redux state.masterAnimalList saved in store
    };
};

export default withRouter(connect(mapStateToProps)(App));