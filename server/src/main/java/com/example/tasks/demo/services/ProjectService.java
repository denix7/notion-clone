package com.example.tasks.demo.services;

import com.example.tasks.demo.dtos.ProjectDTO;
import com.example.tasks.demo.exceptions.ProjectNotFoundException;
import com.example.tasks.demo.model.Project;
import com.example.tasks.demo.repositories.ProjectRepositories;
import com.example.tasks.demo.services.mappers.ProjectMapper;
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
    private final ProjectMapper projectMapper;

    public ProjectDTO save(ProjectDTO projectDTO) {
        Project project = projectRepositories.save(projectMapper.mapDtoProject(projectDTO));
        projectDTO.setId(project.getId());
        return projectDTO;
    }

    public List<ProjectDTO> getAll() {
        return projectRepositories.findAll()
                .stream()
                .map(projectMapper::mapProjectToDto)
                .collect(toList());
    }

    public ProjectDTO getProject(Long id) {
        Project project = projectRepositories.findById(id).orElseThrow(() -> new ProjectNotFoundException("Project not found"));
        return projectMapper.mapProjectToDto(project);
    }

    public void deleteTask(Long id) {
        projectRepositories.deleteById(id);
    }
}
