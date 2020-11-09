package com.example.tasks.demo.services;

//import com.example.tasks.demo.datatype.Task;

import com.example.tasks.demo.dtos.NewTaskDTO;
import com.example.tasks.demo.dtos.TaskDTO;
import com.example.tasks.demo.model.Task;
import com.example.tasks.demo.repositories.TaskDao;
import com.example.tasks.demo.services.mappers.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.stream.Collectors;

//import com.example.tasks.demo.model.Task;
//import org.springframework.stereotype.Service;

@Component
public class TaskService implements Service<TaskDTO, NewTaskDTO> {
    private final TaskDao taskDao;

//    @Autowired
//    Repository<Task> repository;

    @Autowired
    Mapper<Task, TaskDTO> taskToTaskDTOMapper;

//    @Autowired
//    Mapper<NewTaskDTO, Task> newTaskDTOToTaskMapper;

    @Autowired
    Mapper<NewTaskDTO, Task> newTaskDTOToTaskEntityMapper;

    @Autowired
    Mapper<Task, TaskDTO> TaskEntityToTaskDTOMapper;

    @Autowired
    Mapper<TaskDTO, Task> TaskDTOToTaskEntityMapper;

    public TaskService(@Qualifier("hibernateDao") TaskDao taskDao) {
        this.taskDao = taskDao;
    }

    @Override
    public TaskDTO create(NewTaskDTO newTaskDTO) {
        Task task = newTaskDTOToTaskEntityMapper.map(newTaskDTO);
        return TaskEntityToTaskDTOMapper.map(taskDao.addTask(task));

        //Task task = taskToTaskDTOMapper.map(task);
        //return repository.create(task);

        //return taskToTaskDTOMapper.map(repository.create(newTaskDTOToTaskMapper.map(newTaskDTO)));
    }

    @Override
    public Collection<TaskDTO> getAllTasks(){
        //return taskDao.selectAllTasks();
        return taskDao.selectAllTasks().stream().map(task -> taskToTaskDTOMapper.map(task)).collect(Collectors.toList());
        //return repository.getAll().stream().map(task -> taskToTaskDTOMapper.map(task)).collect(Collectors.toList());
        //return null;
    }

    @Override
    public TaskDTO getTaskById(int id) {
//        return taskDao.selectTaskById(id);
        //return repository.get(id).map(task -> taskToTaskDTOMapper.map(task));
        return taskToTaskDTOMapper.map(taskDao.selectTaskById(id));
    }

    @Override
    public boolean delete(int id) {
        //return taskDao.deleteTaskById(id);
        //return repository.delete(id);
        return taskDao.deleteTaskById(id);
    }

    @Override
    public int updateTaskById(int id, TaskDTO task) {
        //return taskDao.updateTaskById(id, task);
        //if(repository.update(id, newTaskDTOToTaskMapper.map(task)) != null){
//            return 1;
//        }
//        return 0;
        System.out.println(id + "   " + task.toString() + "////TASKSERVICE");
        return taskDao.updateTaskById(id, TaskDTOToTaskEntityMapper.map(task));
    }

}