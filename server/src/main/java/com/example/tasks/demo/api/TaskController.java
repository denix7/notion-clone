package com.example.tasks.demo.api;

import com.example.tasks.demo.dtos.TaskRequest;
import com.example.tasks.demo.dtos.TaskResponse;
import com.example.tasks.demo.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("api/v1/tasks/")
@AllArgsConstructor
@CrossOrigin(origins="http://localhost:3000")
public class TaskController {

    @Autowired
    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskResponse> createTask(@RequestBody TaskRequest taskRequest){
        if(taskRequest.getProjectTitle() == null)
            return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(taskRequest));
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.saveDefault(taskRequest));
    }

    @GetMapping("/")
    public ResponseEntity<Collection<TaskResponse>> getAllTasks() {
        return status(HttpStatus.OK).body(taskService.getAllTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> getTask(@PathVariable Long id) {
        return status(HttpStatus.OK).body(taskService.getTask(id));
    }

    @GetMapping("by-project/{id}")
    public ResponseEntity<Collection<TaskResponse>> getTasksByProject(@PathVariable Long id) {
        return status(HttpStatus.OK).body(taskService.getTasksByProject(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskResponse> updateTask(@PathVariable("id") Long id, @RequestBody TaskRequest taskRequest){
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.updateTask(id, taskRequest));
    }
}
