package com.example.tasks.demo.repositories;

import com.example.tasks.demo.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepositories extends JpaRepository<Project, Long> {
    Optional<Project> findByTitle(String projectName);
}
