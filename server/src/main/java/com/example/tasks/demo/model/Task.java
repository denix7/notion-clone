package com.example.tasks.demo.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

//@Entity
//@Table(name = "tasks")
public class Task {
    //@Id
    private UUID id;
    private String description;
    private String status;
//    private UUID uuid;
//    private String entry;
//    private Date start;
//    private Date end;
//    private String due;
//    private String priority;
//    private ArrayList<UUID> depends;
//    private String tag;


    public Task(@JsonProperty("id") UUID id,
                @JsonProperty("description") String description,
                @JsonProperty("status") String status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
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
}
