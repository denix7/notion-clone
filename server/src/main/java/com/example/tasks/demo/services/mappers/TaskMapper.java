package com.example.tasks.demo.services.mappers;

import com.example.tasks.demo.model.Project;
import com.example.tasks.demo.model.Task;
import com.example.tasks.demo.dtos.TaskRequest;
import com.example.tasks.demo.dtos.TaskResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TaskMapper {
//    @Mapping(target = "entry", expression = "java(java.time.Instant.now())")
    @Mapping(target = "description", source = "taskRequest.description")
    @Mapping(target = "priority", source = "taskRequest.priority")
    @Mapping(target = "status", source = "taskRequest.status")
    Task map(TaskRequest taskRequest, Project project);

    @Mapping(target = "id", source = "taskId")
    @Mapping(target = "projectTitle", source = "project.title")
    @Mapping(target = "projectId", source = "project.id")
    TaskResponse mapToDto(Task task);
}
