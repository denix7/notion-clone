package com.example.tasks.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String title;
    @OneToMany(fetch = LAZY, mappedBy = "project", cascade = CascadeType.REMOVE)
    private List<Task> tasks;
    private Instant createdDate;
}
