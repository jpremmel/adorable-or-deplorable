import currentAnimalReducer from './../../src/reducers/current-animal-reducer';

describe('selectedTicketReducer', () => {
    
    test('Should return default state if no action type is recognized', () => {
        expect(currentAnimalReducer({}, { type: null })).toEqual({});
    });

    test('Should record which animal has been selected by the user', () => {
        expect(currentAnimalReducer({}, { type: 'SELECT_ANIMAL', animalId: '1'})).toEqual('1');
    });

});