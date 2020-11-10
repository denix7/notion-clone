package com.example.tasks.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskRequest {
    private Long taskId;
    private String projectTitle;
    private String description;
    private Instant due;
}
