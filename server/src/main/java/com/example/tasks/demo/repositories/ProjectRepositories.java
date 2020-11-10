package com.example.tasks.demo.repositories;

import com.example.tasks.demo.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepositories extends JpaRepository<Project, Long> {
}
