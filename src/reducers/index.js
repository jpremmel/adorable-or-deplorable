import currentAnimalReducer from './current-animal-reducer';
import animalListReducer from './animal-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentAnimal: currentAnimalReducer,
    masterAnimalList: animalListReducer
});

export default rootReducer;