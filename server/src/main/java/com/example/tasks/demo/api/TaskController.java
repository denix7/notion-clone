package com.example.tasks.demo.api;

import com.example.tasks.demo.model.Task;
import com.example.tasks.demo.service.TaskService;
import java.util.List;
import java.util.UUID;
import java.util.Optional;
import java.util.Date.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/tasks")
@RestController
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public void addTask(@NonNull @RequestBody Task task) {
        taskService.addTask(task);
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping(path = "{uuid}")
    public Task getTask(@PathVariable("uuid") int uuid) {
        return taskService.getTaskById(uuid);
    }

    @PutMapping(path = "{id}")
    public int updateTask(@PathVariable("id") UUID id, @NonNull @RequestBody Task task) {
        return taskService.updateTaskById(id, task);
    }

    @DeleteMapping(path = "{id}")
    public int deleteTask(@PathVariable("id") int id) {
        return taskService.deleteTaskById(id);
    }
}
