package com.example.tasks.demo.model;

import com.example.tasks.demo.datatype.Priority;
import com.example.tasks.demo.datatype.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="task")
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
    @Column(name = "entry")
    private Instant entry;
    @Column(name = "due")
    private LocalDate due;
    @Column(name = "priority")
    private Priority priority;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "id", referencedColumnName = "id")
    private Project project;
    private String tag;
}
