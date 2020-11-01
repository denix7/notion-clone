package com.example.tasks.demo.repositories;
import com.example.tasks.demo.datatype.Task;

import java.util.ArrayList;
import java.util.List;

public class TaskRepository {
    private static int ID_GENERATOR = 0;
    private static final List<Task> TASKS;

    static {
        TASKS = new ArrayList<>();
        Task task = new Task();
        task.setId(++ID_GENERATOR);
        task.setDescription("task 1");
    }
}
