package com.example.tasks.demo.services;

import com.example.tasks.demo.dtos.ProjectDTO;
import com.example.tasks.demo.model.Project;
import com.example.tasks.demo.repositories.ProjectRepositories;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
public class ProjectService {
    private final ProjectRepositories projectRepositories;

    public ProjectDTO save(ProjectDTO projectDTO) {
        Project project = projectRepositories.save(mapProjectDto(projectDTO));
        projectDTO.setId(project.getId());
        return projectDTO;
    }

    public List<ProjectDTO> getAll() {
        return projectRepositories.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(toList());
    }

    private ProjectDTO mapToDto(Project project) {
        return ProjectDTO.builder().title(project.getTitle())
                        .id(project.getId())
                        .tasksCantity(project.getTasks().size())
                        .build();
    }

    private Project mapProjectDto(ProjectDTO projectDTO){
        return Project.builder().title(projectDTO.getTitle()).build();
    }
}
