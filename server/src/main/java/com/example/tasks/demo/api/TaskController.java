package com.example.tasks.demo.api;

import com.example.tasks.demo.dtos.TaskRequest;
import com.example.tasks.demo.dtos.TaskResponse;
import com.example.tasks.demo.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("/api/v1/tasks/")
@AllArgsConstructor
@CrossOrigin(origins="http://localhost:3000")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<Void> createTask(@RequestBody TaskRequest taskRequest){
        taskService.save(taskRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<TaskResponse>> getAllTasks() {
        return status(HttpStatus.OK).body(taskService.getAllTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> getTask(@PathVariable Long id) {
        return status(HttpStatus.OK).body(taskService.getTask(id));
    }

    @GetMapping("by-project/{id}")
    public ResponseEntity<List<TaskResponse>> getTasksByProject(@PathVariable Long id) {
        return status(HttpStatus.OK).body(taskService.getTasksByProject(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
