import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Tasks } from '../Components/Tasks/Tasks/';
import { MenuTasks } from '../Components/Tasks/MenuTasks/MenuTasks';
import { deleteTask, setTasks, postTask, deleteTaskAsync } from '../Store/reducers/tasks/action';
import { addTask } from '../Store/reducers/tasks/action';
import { loadTasks } from '../Store/reducers/tasks/action';

export const TasksPage = () => {
  const data = useSelector((state) => state.task.tasks);
  console.log(data, 'DATA')
  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch(deleteTaskAsync(id));
  };

  const saveTask = (title) => {
    console.log('SAVETASK')
    dispatch(postTask({
      description: title,
    }));
  };

  const [tasksFilters, setTaskFilters] = useState(data);

  let newTasks = [];
  const filterItems = (status) => {
    if (status === 'all') {
      setTaskFilters(data);
      return;
    }
    newTasks = data.filter((item) => item.status === status);
    setTaskFilters(newTasks);
  };

  function getData() {
    dispatch(loadTasks())
  }

  useEffect(() => {
    getData();
  }, [loadTasks]);


  return (
    <div className="container">
      <MenuTasks filterItems={filterItems} />
      {/* <TagsSlide /> */}

      <Tasks tasks={data} removeTask={removeTask} saveTask={saveTask} filtered={tasksFilters} />
    </div>
  );
};

export default TasksPage;
