package com.example.tasks.demo.repositories;

import com.example.tasks.demo.model.Task;

import java.util.Collection;
import java.util.UUID;

public interface TaskDao {

    int insertTask(UUID uuid, Task task);

    Task addTask(Task task);

    Collection<Task> selectAllTasks();

    Task selectTaskById(int id);

    int updateTaskById(int id, Task task);

    boolean deleteTaskById(int id);
}
