package com.example.tasks.demo.repositories;
import com.example.tasks.demo.datatype.Tag;
import com.example.tasks.demo.datatype.Task;
import com.example.tasks.demo.model.Priority;
import com.example.tasks.demo.model.Status;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class TaskRepository implements Repository<Task> {
    private static int ID_GENERATOR = 0;
    private static final List<Task> TASKS;

    static {
        TASKS = new ArrayList<>();
        Task task = new Task();
        task.setId(++ID_GENERATOR);
        task.setDescription("task 1");
        task.setPriority(Priority.M);

        Tag tag = new Tag();
        tag.setId(1);
        tag.setValue("tag1");

        task.setTags(Arrays.asList(tag));
        TASKS.add(task);
    }

    public Task create(Task task) {
        int id = ++ID_GENERATOR;
        task.setId(id);
        task.setPriority(Priority.M);
        task.setStatus(Status.PENDING);
        TASKS.add(task);
        return task;
    }

    public Collection<Task> getAll(){
        return TASKS;
    }

    public Optional<Task> get(int id) {
        return TASKS.stream().filter(task -> task.getId() == id).findFirst();
    }

    @Override
    public boolean delete(int id) {
        return TASKS.removeIf(task -> task.getId() == id);
    }

    @Override
    public Task update(int id, Task object) {
        return null;
    }
}
