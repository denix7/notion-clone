package com.example.tasks.demo.service;

import com.example.tasks.demo.repositories.TaskDao;
import com.example.tasks.demo.model.Priority;
import com.example.tasks.demo.model.Task;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    private final TaskDao taskDao;

    public TaskService(@Qualifier("hibernateDao") TaskDao taskDao) {
        this.taskDao = taskDao;
    }

    public int addTask(Task task) {
        UUID uuid = UUID.randomUUID();

        LocalDateTime date = LocalDateTime.now();
        task.setEntry(date);
        task.setPriority(Priority.M);
        task.setUuid(uuid);

        return taskDao.addTask(task);
    }

    public List<Task> getAllTasks(){
        return taskDao.selectAllTasks();
    }

    public Task getTaskById(int id) {
        return taskDao.selectTaskById(id);
    }

    public int deleteTaskById(int id) {
        return taskDao.deleteTaskById(id);
    }

    public int updateTaskById(UUID id, Task task) {
        return taskDao.updateTaskById(id, task);
    }
}