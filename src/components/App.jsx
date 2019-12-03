import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import AnimalList from './AnimalList';
import Animal from './Animal';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterAnimalList: {
                '1': {
                    name: 'Sylvie',
                    adorable: true,
                    animalId: '1'
                },
                '2': {
                    name: 'Chunk',
                    adorable: true,
                    animalId: '2'
                },
                '3': {
                    name: 'Toad',
                    adorable: true,
                    animalId: '3'
                },
                '4': {
                    name: 'Winston',
                    adorable: true,
                    animalId: '4'
                },
                '5': {
                    name: 'Honeycomb',
                    adorable: true,
                    animalId: '5'
                },
                '6': {
                    name: 'The Grinch',
                    adorable: false,
                    animalId: '6'
                },
                '7': {
                    name: 'Patches',
                    adorable: true,
                    animalId: '7'
                },
                '8': {
                    name: 'Rhyming Cat',
                    adorable: false,
                    animalId: '8'
                }
            },
            currentAnimal: null
        };
        this.handleAddingNewAnimal = this.handleAddingNewAnimal.bind(this);
    }

    handleAddingNewAnimal(newAnimal) {
        let newAnimalId = v4();
        let newMasterAnimalList = Object.assign({}, this.state.masterAnimalList, {
            [newAnimalId]: newAnimal
        });
        this.setState({masterAnimalList: newMasterAnimalList});
    }


    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' render={()=><Animal 
                            currentAnimal={this.state.currentAnimal} />}/>
                        <Route path='/all' render={()=><AnimalList 
                            animalList={this.state.masterAnimalList}
                            onNewAnimalCreation={this.handleAddingNewAnimal} />}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;