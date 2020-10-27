const initialData = [];

const task = (state = initialData, action) => {
    switch(action.type) {
        case 'ADD' :
            return [...state, action.data]
        default:
            return state
    }
}

export default task;