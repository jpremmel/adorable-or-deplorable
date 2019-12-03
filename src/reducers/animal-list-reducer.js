
export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ANIMAL':
            const { name, adorable, animalId } = action;
            let newState = Object.assign({}, state, {
                [animalId] : {
                    name: name,
                    adorable: adorable,
                    animalId: animalId
                }
            });
            return newState;
        default:
        return state;
    }
};