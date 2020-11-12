package com.example.tasks.demo.dtos;

import com.example.tasks.demo.model.Priority;
import com.example.tasks.demo.model.Status;
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
//    private Instant start;
//    private Instant end;
//    private Instant due;
    private String projectTitle;
    private Priority priority;
    private long projectId;
    private String tag;
}
