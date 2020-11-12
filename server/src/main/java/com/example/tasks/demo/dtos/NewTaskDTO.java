package com.example.tasks.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewTaskDTO {
    private String description;

    public String getDescription() {
        return description;
    }
}
