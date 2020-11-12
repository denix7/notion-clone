package com.example.tasks.demo.dtos;

import com.example.tasks.demo.datatype.Priority;
import com.example.tasks.demo.datatype.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskRequest {
    private Long taskId;
    private String description;
    private Status status;
    private String due;
    private String projectTitle;
    private Priority priority;
    private long projectId;
    private String tag;
}
