import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import AnimalList from './AnimalList';
import Animal from './Animal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            // masterAnimalList: {
            //     '1': {
            //         name: 'Sylvie',
            //         adorable: true,
            //         animalId: '1'
            //     },
            //     '2': {
            //         name: 'Chunk',
            //         adorable: true,
            //         animalId: '2'
            //     },
            //     '3': {
            //         name: 'Toad',
            //         adorable: true,
            //         animalId: '3'
            //     },
            //     '4': {
            //         name: 'Winston',
            //         adorable: true,
            //         animalId: '4'
            //     },
            //     '5': {
            //         name: 'Honeycomb',
            //         adorable: true,
            //         animalId: '5'
            //     },
            //     '6': {
            //         name: 'The Grinch',
            //         adorable: false,
            //         animalId: '6'
            //     },
            //     '7': {
            //         name: 'Patches',
            //         adorable: true,
            //         animalId: '7'
            //     },
            //     '8': {
            //         name: 'Rhyming Cat',
            //         adorable: false,
            //         animalId: '8'
            //     }
            // },
            currentAnimal: null
        };
        this.handleAddingNewAnimal = this.handleAddingNewAnimal.bind(this);
        this.handleChangingSelectedAnimal = this.handleChangingSelectedAnimal.bind(this);
    }

    handleAddingNewAnimal(newAnimal) {
        let newAnimalId = v4();
        let newMasterAnimalList = Object.assign({}, this.state.masterAnimalList, {
            [newAnimalId]: newAnimal
        });
        this.setState({masterAnimalList: newMasterAnimalList});
    }

    handleChangingSelectedAnimal(animalId) {
        this.setState({currentAnimal: animalId});
    }

    render() {
        console.log('Current Selected Animal: ', this.props.masterAnimalList[this.state.currentAnimal]);
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Switch>
                        <Route path='/animal' render={()=><Animal 
                            currentAnimal={this.state.currentAnimal} />}/>
                        <Route exact path='/' render={()=><AnimalList 
                            animalList={this.props.masterAnimalList}
                            currentAnimal={this.state.currentAnimal}
                            onNewAnimalCreation={this.handleAddingNewAnimal}
                            onAnimalSelection={this.handleChangingSelectedAnimal} />}/>
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
        masterAnimalList: state //React masterAnimalList is being mapped to the Redux state saved in store
    }
}

export default withRouter(connect(mapStateToProps)(App));