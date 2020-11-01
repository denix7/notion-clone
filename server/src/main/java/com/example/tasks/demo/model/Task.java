package com.example.tasks.demo.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import org.hibernate.annotations.Type;
import java.io.Serializable;

import java.util.UUID;
import java.time.LocalDateTime;

@Entity
@Table(name="task")
public class Task implements Serializable{

    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    @Column(name="description")
    private String description;
    @Column(name="status")
    private String status;

//    @Id
//    @GeneratedValue(generator = "UUID")
//    @GenericGenerator(
//            name = "UUID",
//            strategy = "org.hibernate.id.UUIDGenerator"
//    )
//    @Column(name = "uuid3", updatable = false, nullable = false)

    @Type(type = "uuid-char")
    private UUID uuid;
    @Column(name = "entry")
    private LocalDateTime entry;
    @Column(name = "start")
    private LocalDateTime start;
    @Column(name = "end")
    private LocalDateTime end;
    @Column(name = "due")
    private String due;
    @Column(name = "priority")
    private Priority priority;
//    private ArrayList<UUID> depends;
//    private String tag;

    public Task () {

    }

    public Task(
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

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
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

    public LocalDateTime getEntry() {
        return entry;
    }

    public void setEntry(LocalDateTime entry) {
        this.entry = entry;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public String getDue() {
        return due;
    }

    public void setDue(String due) {
        this.due = due;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }
}
