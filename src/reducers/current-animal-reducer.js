
export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_ANIMAL':
            return action.animalId;
        default:
            return state;
    }
};