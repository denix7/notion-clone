const ADD = "ADD";

export const addTask = (x) => ({
    type: ADD,
    data: {
        id: Math.random(),
        value: x
    }
})