package com.example.tasks.demo.dao;

import java.util.UUID;
import com.example.tasks.demo.model.Task;

public interface TaskDao {
    int insertTask(UUID id, Task task);

    int addTask(Task task);
}
