package com.example.tasks.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@Table(name="task")
public class Task implements Serializable{

    //@Column(name="id")
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long taskId;
    @Column(name="description")
    private String description;
    @Column(name="status")
    private Status status;
    @Type(type = "uuid-char")
    private UUID uuid;
//    @Column(name = "entry")
//    private Instant entry;
//    @Column(name = "start")
//    private Instant start;
//    @Column(name = "end")
//    private Instant end;
//    @Column(name = "due")
//    private Instant due;
    @Column(name = "priority")
    private Priority priority;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "id", referencedColumnName = "id")
    private Project project;
    private String tag;

//    public Task () {
//
//    }
//
//    public Task(
//                @JsonProperty("description") String description,
//                @JsonProperty("status") Status status) {
//        this.id = id;
//        this.description = description;
//        this.status = status;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public UUID getUuid() {
//        return uuid;
//    }
//
//    public void setUuid(UUID uuid) {
//        this.uuid = uuid;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public Status getStatus() {
//        return status;
//    }
//
//    public void setStatus(Status status) {
//        this.status = status;
//    }
//
//    public LocalDateTime getEntry() {
//        return entry;
//    }
//
//    public void setEntry(LocalDateTime entry) {
//        this.entry = entry;
//    }
//
//    public LocalDateTime getStart() {
//        return start;
//    }
//
//    public void setStart(LocalDateTime start) {
//        this.start = start;
//    }
//
//    public LocalDateTime getEnd() {
//        return end;
//    }
//
//    public void setEnd(LocalDateTime end) {
//        this.end = end;
//    }
//
//    public LocalDateTime getDue() {
//        return due;
//    }
//
//    public void setDue(LocalDateTime due) {
//        this.due = due;
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
//    @Override
//    public String toString() {
//        return "Task{" +
//                "id=" + id +
//                ", description='" + description + '\'' +
//                ", status='" + status + '\'' +
//                ", uuid=" + uuid +
//                ", entry=" + entry +
//                ", start=" + start +
//                ", end=" + end +
//                ", due='" + due + '\'' +
//                ", priority=" + priority +
//                '}';
//    }
}
