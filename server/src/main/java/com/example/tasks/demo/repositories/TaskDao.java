package com.example.tasks.demo.repositories;

import java.util.UUID;
import java.util.Collection;

import com.example.tasks.demo.model.Task;

public interface TaskDao {

    int insertTask(UUID uuid, Task task);

    int addTask(Task task);

    Collection<Task> selectAllTasks();

    Task selectTaskById(int id);

    int updateTaskById(UUID uuid, Task task);

    int deleteTaskById(int id);
}
