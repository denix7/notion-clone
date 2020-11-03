package com.example.tasks.demo.dtos;

import com.example.tasks.demo.model.Priority;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.util.UUID;

public class TaskDTO {
    private int id;
    private String description;
    private String status;
    private int tagsCantity;
    private Priority priority;

    public TaskDTO () {

    }

    public TaskDTO(
            @JsonProperty("description") String description,
            @JsonProperty("status") String status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getTagsCantity() {
        return tagsCantity;
    }

    public void setTagsCantity(int tagsCantity) {
        this.tagsCantity = tagsCantity;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }
}
