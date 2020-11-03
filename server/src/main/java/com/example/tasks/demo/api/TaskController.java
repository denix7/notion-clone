package com.example.tasks.demo.api;

import com.example.tasks.demo.dtos.TaskDTO;
import com.example.tasks.demo.dtos.NewTaskDTO;
import com.example.tasks.demo.services.TaskService;
import java.util.Collection;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.example.tasks.demo.services.Service;

import com.example.tasks.demo.exceptions.TaskNotFoundException;
import java.net.URI;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RequestMapping("api/v1/tasks")
@RestController
public class TaskController {
    @Autowired
    private final Service<TaskDTO, NewTaskDTO> taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public ResponseEntity<TaskDTO> addTask(@RequestBody NewTaskDTO task) {
        TaskDTO taskDTO = taskService.create(task);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(taskDTO.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping
    public Collection<TaskDTO> getTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping(path = "{uuid}")
    public TaskDTO getTask(@PathVariable("uuid") int uuid) {
        return taskService.getTaskById(uuid).orElseThrow(() -> new TaskNotFoundException(uuid));
    }

    @PutMapping(path = "{id}")
    public int updateTask(@PathVariable("id") UUID id, @NonNull @RequestBody TaskDTO task) {
        return taskService.updateTaskById(id, task);
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<Integer> delete(@PathVariable("id") int id) {
        if(!taskService.delete(id)){
            throw  new TaskNotFoundException(id);
        }

        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
