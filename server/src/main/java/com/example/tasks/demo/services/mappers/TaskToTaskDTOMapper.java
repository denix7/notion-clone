package com.example.tasks.demo.services.mappers;
import com.example.tasks.demo.dtos.TaskDTO;
import com.example.tasks.demo.datatype.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskToTaskDTOMapper implements Mapper <Task, TaskDTO> {
    @Override
    public TaskDTO map(Task task) {
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setDescription(task.getDescription());
        taskDTO.setId(task.getId());
        taskDTO.setPriority(task.getPriority());

        return taskDTO;
    }
}