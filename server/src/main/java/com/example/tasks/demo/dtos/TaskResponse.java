package com.example.tasks.demo.dtos;

import com.example.tasks.demo.datatype.Priority;
import com.example.tasks.demo.datatype.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskResponse {
    private Long id;
    private String description;
    private long projectId;
    private Instant entry;
    private String projectTitle;
    private Priority priority;
    private Status status;
//    private Instant start;
//    private Instant end;
    private String due;
    private String tag;
}
