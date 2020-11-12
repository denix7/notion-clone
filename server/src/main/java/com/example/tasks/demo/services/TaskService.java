package com.example.tasks.demo.services;

import com.example.tasks.demo.dtos.TaskRequest;
import com.example.tasks.demo.dtos.TaskResponse;
import com.example.tasks.demo.exceptions.ProjectNotFoundException;
import com.example.tasks.demo.exceptions.TaskNotFoundException;
import com.example.tasks.demo.model.Priority;
import com.example.tasks.demo.model.Project;
import com.example.tasks.demo.model.Status;
import com.example.tasks.demo.model.Task;
import com.example.tasks.demo.repositories.ProjectRepositories;
import com.example.tasks.demo.repositories.TaskRespositories;
import com.example.tasks.demo.services.mappers.TaskMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
public class TaskService {

    private final TaskRespositories taskRespositories;
    private final ProjectRepositories projectRepositories;
    private final TaskMapper taskMapper;

    public TaskResponse save(TaskRequest taskRequest) {
        System.out.println(" SERVICE" + taskRequest);
        taskRequest.setPriority(Priority.M);
        taskRequest.setStatus(Status.PENDING);

        Project project = projectRepositories.findById(taskRequest.getProjectId())
                .orElseThrow(() -> new ProjectNotFoundException(taskRequest.getProjectId()+""));

        Task task = taskRespositories.save(taskMapper.map(taskRequest, project));
        return taskMapper.mapToDto(task);
    }
    public TaskResponse saveDefault(TaskRequest taskRequest) {
        Project project = projectRepositories.findByTitle(taskRequest.getProjectTitle())
                    .orElseThrow(() -> new ProjectNotFoundException(taskRequest.getProjectTitle()));

        Task task = taskRespositories.save(taskMapper.map(taskRequest, project));
        return taskMapper.mapToDto(task);
    }


    public TaskResponse getTask(Long id) {
        Task task = taskRespositories.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        return taskMapper.mapToDto(task);
    }

    public Collection<TaskResponse> getAllTasks() {
        return taskRespositories.findAll().stream().map(taskMapper::mapToDto)
                            .collect(toList());
    }

    public Collection<TaskResponse> getTasksByProject(Long projectId) {
        Project project = projectRepositories.findById(projectId)
                            .orElseThrow(() -> new ProjectNotFoundException(projectId.toString()));
        Collection<Task> tasks = taskRespositories.findAllByProject(project);

        return tasks.stream().map(taskMapper::mapToDto).collect(toList());
    }

    public void deleteTask(Long id) {
        taskRespositories.deleteById(id);
    }

    public TaskResponse updateTask(Long id, TaskRequest newTask) {
        newTask.setTaskId(id);
        Task taskToUpdate = taskRespositories.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        taskToUpdate.setDescription(newTask.getDescription());
        taskToUpdate.setStatus(newTask.getStatus());
        taskToUpdate.setPriority(newTask.getPriority());
        taskToUpdate.setTag(newTask.getTag());

        taskRespositories.save(taskToUpdate);

        return taskMapper.mapToDto(taskToUpdate);
    }
}