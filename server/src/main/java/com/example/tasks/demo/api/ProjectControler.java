package com.example.tasks.demo.api;

import com.example.tasks.demo.dtos.ProjectDTO;
import com.example.tasks.demo.services.ProjectService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("api/v1/projects")
@CrossOrigin(origins="http://localhost:3000")
@AllArgsConstructor
@Slf4j
public class ProjectControler {

    @Autowired
    private final ProjectService<ProjectDTO> projectService;

    @PostMapping
    public ResponseEntity<ProjectDTO> createProject(@RequestBody ProjectDTO projectDTO){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(projectService.save(projectDTO));
    }

    @GetMapping
    public ResponseEntity<Collection<ProjectDTO>> getAllProject() {
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
