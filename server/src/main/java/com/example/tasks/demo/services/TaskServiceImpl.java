package com.example.tasks.demo.services;

import com.example.tasks.demo.datatype.Priority;
import com.example.tasks.demo.datatype.Status;
import com.example.tasks.demo.dtos.TaskRequest;
import com.example.tasks.demo.dtos.TaskResponse;
import com.example.tasks.demo.exceptions.ProjectNotFoundException;
import com.example.tasks.demo.exceptions.TaskNotFoundException;
import com.example.tasks.demo.model.Project;
import com.example.tasks.demo.model.Task;
import com.example.tasks.demo.repositories.ProjectRepositories;
import com.example.tasks.demo.repositories.TaskRespositories;
import com.example.tasks.demo.services.mappers.TaskMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collection;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
public class TaskServiceImpl implements TaskService {

    @Autowired
    private final TaskRespositories taskRespositories;

    @Autowired
    private final ProjectRepositories projectRepositories;

    @Autowired
    private final TaskMapper taskMapper;

    @Override
    public TaskResponse save(TaskRequest taskRequest) {
        System.out.println(" SERVICE" + taskRequest);
        taskRequest.setPriority(Priority.M);
        taskRequest.setStatus(Status.PENDING);

        Project project = projectRepositories.findById(taskRequest.getProjectId())
                .orElseThrow(() -> new ProjectNotFoundException(taskRequest.getProjectId()+""));

        Task task = taskRespositories.save(taskMapper.map(taskRequest, project));
        return taskMapper.mapToDto(task);
    }
    @Override
    public TaskResponse saveDefault(TaskRequest taskRequest) {
        Project project = projectRepositories.findByTitle(taskRequest.getProjectTitle())
                    .orElseThrow(() -> new ProjectNotFoundException(taskRequest.getProjectTitle()));

        Task task = taskRespositories.save(taskMapper.map(taskRequest, project));
        return taskMapper.mapToDto(task);
    }


    @Override
    public TaskResponse getTask(Long id) {
        Task task = taskRespositories.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        return taskMapper.mapToDto(task);
    }

    @Override
    public Collection<TaskResponse> getAllTasks() {
        return taskRespositories.findAll().stream().map(taskMapper::mapToDto)
                            .collect(toList());
    }

    @Override
    public Collection<TaskResponse> getTasksByProject(Long projectId) {
        Project project = projectRepositories.findById(projectId)
                            .orElseThrow(() -> new ProjectNotFoundException(projectId.toString()));
        Collection<Task> tasks = taskRespositories.findAllByProject(project);

        return tasks.stream().map(taskMapper::mapToDto).collect(toList());
    }

    @Override
    public void deleteTask(Long id) {
        taskRespositories.deleteById(id);
    }

    @Override
    public TaskResponse updateTask(Long id, TaskRequest newTask) {
        newTask.setTaskId(id);
        Task taskToUpdate = taskRespositories.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        taskToUpdate.setDescription(newTask.getDescription());
        taskToUpdate.setStatus(newTask.getStatus());
        taskToUpdate.setPriority(newTask.getPriority());
        taskToUpdate.setTag(newTask.getTag());
        LocalDate dueDate = LocalDate.parse(newTask.getDue());
        taskToUpdate.setDue(dueDate);

        taskRespositories.save(taskToUpdate);

        return taskMapper.mapToDto(taskToUpdate);
    }
}