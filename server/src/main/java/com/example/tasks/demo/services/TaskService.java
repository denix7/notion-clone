package com.example.tasks.demo.services;

import com.example.tasks.demo.repositories.TaskDao;
import com.example.tasks.demo.model.Priority;
//import com.example.tasks.demo.model.Task;

import java.lang.annotation.Annotation;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;
import com.example.tasks.demo.services.Service;
import com.example.tasks.demo.repositories.Repository;
import com.example.tasks.demo.dtos.TaskDTO;

import com.example.tasks.demo.datatype.Task;
import com.example.tasks.demo.dtos.TaskDTO;
import com.example.tasks.demo.dtos.NewTaskDTO;
import com.example.tasks.demo.services.mappers.Mapper;

import java.util.stream.Collectors;

@Component
public class TaskService implements Service<TaskDTO, NewTaskDTO> {
    //private final TaskDao taskDao;

    @Autowired
    Repository<Task> repository;

    @Autowired
    Mapper<Task, TaskDTO> taskToTaskDTOMapper;

    @Autowired
    Mapper<NewTaskDTO, Task> newTaskDTOToTaskMapper;

//    public TaskService(@Qualifier("hibernateDao") TaskDao taskDao) {
//        this.taskDao = taskDao;
//    }

    @Override
    public TaskDTO create(NewTaskDTO newTaskDTO) {
        //UUID uuid = UUID.randomUUID();

        //LocalDateTime date = LocalDateTime.now();
        //task.setEntry(date);
        //task.setPriority(Priority.M);
        //task.setUuid(uuid);

        //return taskDao.addTask(task);

        //Task task = taskToTaskDTOMapper.map(task);
        //return repository.create(task);
        return taskToTaskDTOMapper.map(repository.create(newTaskDTOToTaskMapper.map(newTaskDTO)));
    }

    @Override
    public Collection<TaskDTO> getAllTasks(){
        //return taskDao.selectAllTasks();
        return repository.getAll().stream().map(task -> taskToTaskDTOMapper.map(task)).collect(Collectors.toList());
    }

    @Override
    public Optional<TaskDTO> getTaskById(int id) {
//        return taskDao.selectTaskById(id);
        return repository.get(id).map(task -> taskToTaskDTOMapper.map(task));
    }

    @Override
    public boolean delete(int id) {
        //return taskDao.deleteTaskById(id);
        return repository.delete(id);
    }

    @Override
    public int updateTaskById(UUID id, TaskDTO task) {
        //return taskDao.updateTaskById(id, task);
        return 0;
    }

}