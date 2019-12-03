
import rootReducer from './../../src/reducers/index';
import currentAnimalReducer from '../../src/reducers/current-animal-reducer';
import animalListReducer from './../../src/reducers/animal-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

    test('Should return default state if no action type is recognized', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            masterAnimalList: {},
            currentAnimal: {}
        });
    });

    test('Should contain animalListReducer logic', () => {
        expect(store.getState().masterAnimalList).toEqual(animalListReducer(undefined, { type: null }));
    });

    test('Should contain currentAnimalReducer logic', () => {
        expect(store.getState().currentAnimal).toEqual(currentAnimalReducer(undefined, { type: null }));
    });

});