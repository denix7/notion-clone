package com.example.tasks.demo.services;

import com.example.tasks.demo.dtos.TaskRequest;
import com.example.tasks.demo.dtos.TaskResponse;

import java.util.Collection;

public interface TaskService {
    TaskResponse save(TaskRequest taskRequest);

    TaskResponse saveDefault(TaskRequest taskRequest);

    TaskResponse getTask(Long id);

    Collection<TaskResponse> getAllTasks();

    Collection<TaskResponse> getTasksByProject(Long projectId);

    void deleteTask(Long id);

    TaskResponse updateTask(Long id, TaskRequest newTask);
}
