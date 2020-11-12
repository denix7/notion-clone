package com.example.tasks.demo.dtos;

import com.example.tasks.demo.model.Priority;
import com.example.tasks.demo.model.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskResponse {
    private Long id;
    private String description;
    private long projectId;
//    private Instant entry;
    private String projectTitle;
    private Priority priority;
    private Status status;
//    private Instant start;
//    private Instant end;
//    private Instant due;
    private String tag;
}
