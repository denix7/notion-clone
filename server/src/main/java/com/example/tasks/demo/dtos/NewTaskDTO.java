package com.example.tasks.demo.dtos;

public class NewTaskDTO {
    private String description;
//    private Status status;
//    private Priority priority;
//    private String tag;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    public Status getStatus() {
//        return status;
//    }
//
//    public void setStatus(Status status) {
//        this.status = status;
//    }
//
//    public Priority getPriority() {
//        return priority;
//    }
//
//    public void setPriority(Priority priority) {
//        this.priority = priority;
//    }
//
//    public String getTag() {
//        return tag;
//    }
//
//    public void setTag(String tag) {
//        this.tag = tag;
//    }

    @Override
    public String toString() {
        return "NewTaskDTO{" +
                "description='" + description + '\'' +
                '}';
    }
}
