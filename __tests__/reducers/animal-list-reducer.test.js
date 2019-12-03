import animalListReducer from './../../src/reducers/animal-list-reducer';

describe('animalListReducer', () => {

    let action;
    const sampleAnimalData = {
        name: 'Wren',
        adorable: true,
        animalId: '9'
    };

    test('Should return default state if no action type is recognized', () => {
        expect(animalListReducer({}, { type: null })).toEqual({});
    });

    test('Should successfully add new animal to masterAnimalList', () => {
        const { name, adorable, animalId } = sampleAnimalData;
        action = {
            type: 'ADD_ANIMAL',
            name: name,
            adorable: adorable,
            animalId: animalId
        };
        expect(animalListReducer({}, action)).toEqual({
            [animalId] : {
                name: name,
                adorable: adorable,
                animalId: animalId
            }
        });
    });

});