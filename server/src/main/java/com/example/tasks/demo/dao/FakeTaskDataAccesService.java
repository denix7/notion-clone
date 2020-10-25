package com.example.tasks.demo.dao;

import com.example.tasks.demo.model.Task;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.ArrayList;

import java.util.UUID;

@Repository("fakeDao")
public class FakeTaskDataAccesService implements TaskDao {
    private static List<Task> DB = new ArrayList<>();


    @Override
    public int insertTask(UUID id, Task task) {
        DB.add(new Task(id, task.getDescription(), task.getStatus()));
        return 1;
    }

    @Override
    public int addTask(Task task) {
        UUID id = UUID.randomUUID();
        return insertTask(id, task);
    }
}
