package com.example.tasks.demo.services.mappers;

import com.example.tasks.demo.dtos.ProjectDTO;
import com.example.tasks.demo.model.Project;
import com.example.tasks.demo.model.Task;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    @Mapping( target = "tasksQuantity", expression = "java(project.getTasks().size())")
    ProjectDTO mapProjectToDto(Project project);

    default Integer mapTasks(List<Task> tasksQuantity) {
        return tasksQuantity.size();
    }

    @InheritInverseConfiguration
    @Mapping(target = "tasks", ignore = true)
    @Mapping(target = "entry", expression = "java(java.time.Instant.now())")
    Project mapDtoProject(ProjectDTO projectDTO);
}
