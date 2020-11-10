package com.example.tasks.demo.services.mappers;

import com.example.tasks.demo.dtos.TaskDTO;
import com.example.tasks.demo.model.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskEntityToTaskDTOMapper implements  Mapper<Task, TaskDTO>{
    @Override
    public TaskDTO map(Task task) {
        TaskDTO taskDto = new TaskDTO();
//        taskDto.setId(task.getId());
//        taskDto.setDescription(task.getDescription());
//        taskDto.setPriority(task.getPriority());
//        taskDto.setStatus(task.getStatus());
//        taskDto.setEntry(task.getEntry());
//        taskDto.setDue(task.getDue());

        return taskDto;
    }
}
