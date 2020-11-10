package com.example.tasks.demo.services.mappers;

import com.example.tasks.demo.dtos.TaskDTO;
import com.example.tasks.demo.model.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskDTOToTaskEntityMapper implements Mapper<TaskDTO, Task> {
    @Override
    public Task map(TaskDTO taskDTO) {
        Task task = new Task();
        task.setDescription(taskDTO.getDescription());
//        task.setId(taskDTO.getId());
//        task.setPriority(taskDTO.getPriority());
//        task.setStatus(taskDTO.getStatus());
//        task.setEntry(taskDTO.getEntry());
//        task.setDue(taskDTO.getDue());

        return task;
    }
}
