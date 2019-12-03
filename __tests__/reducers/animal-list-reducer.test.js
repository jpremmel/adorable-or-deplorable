import animalListReducer from './../../src/reducers/animal-list-reducer';


describe('animalListReducer', () => {

    test('Should return default state if no action type is recognized', () => {
        expect(animalListReducer({}, { type: null })).toEqual({});
    });

});