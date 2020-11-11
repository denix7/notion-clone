package com.example.tasks.demo.api;

import com.example.tasks.demo.dtos.ProjectDTO;
import com.example.tasks.demo.services.ProjectService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/projects")
@CrossOrigin(origins="http://localhost:3000")
@AllArgsConstructor
@Slf4j
public class ProjectControler {

    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<ProjectDTO> createProject(@RequestBody ProjectDTO projectDTO){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(projectService.save(projectDTO));
    }

    @GetMapping
    public ResponseEntity<List<ProjectDTO>> getAllProject() {
        return ResponseEntity.status(HttpStatus.OK)
                            .body(projectService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectDTO> getProject(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(projectService.getProject(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable("id") Long id) {
        projectService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
