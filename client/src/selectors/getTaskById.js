import React from 'react'
import tasksData from '../data/tasksData';

export const getTaskById = (id) => {
    return tasksData.find( task => task.id === id);
}
