package com.example.tasks.demo.services.mappers;
import com.example.tasks.demo.dtos.NewTaskDTO;
import com.example.tasks.demo.model.Task;
import org.springframework.stereotype.Component;

@Component
public class newTaskDTOToTaskEntityMapper implements Mapper<NewTaskDTO, Task> {
    @Override
    public Task map(NewTaskDTO newTaskDTO) {
        Task task = new Task();
        task.setDescription(newTaskDTO.getDescription());

        return task;
    }
}
