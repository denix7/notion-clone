package com.example.tasks.demo.service;

import com.example.tasks.demo.dao.TaskDao;
import com.example.tasks.demo.model.Task;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    private final TaskDao taskDao;

    public TaskService(@Qualifier("fakeDao") TaskDao taskDao) {
        this.taskDao = taskDao;
    }

    public int addTask(Task task) {
        return taskDao.addTask(task);
    }
}
