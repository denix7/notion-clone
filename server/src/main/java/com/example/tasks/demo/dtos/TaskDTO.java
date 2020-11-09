package com.example.tasks.demo.dtos;

import com.example.tasks.demo.model.Priority;
import com.example.tasks.demo.model.Status;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public class TaskDTO {
    private int id;
    private String description;
    private Status status;
    private int tagsCantity;
    private Priority priority;
    private LocalDateTime entry;
    private LocalDateTime due;

    public LocalDateTime getEntry() {
        return entry;
    }

    public void setEntry(LocalDateTime entry) {
        this.entry = entry;
    }

    public LocalDateTime getDue() {
        return due;
    }

    public void setDue(LocalDateTime due) {
        this.due = due;
    }

    public TaskDTO () {

    }

    public TaskDTO(
            @JsonProperty("description") String description,
            @JsonProperty("status") Status status) {
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
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

    @Override
    public String toString() {
        return "TaskDTO{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", tagsCantity=" + tagsCantity +
                ", priority=" + priority +
                ", entry=" + entry +
                ", due=" + due +
                '}';
    }
}
