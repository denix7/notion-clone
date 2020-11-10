package com.example.tasks.demo.repositories;

import com.example.tasks.demo.model.Project;
import com.example.tasks.demo.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRespositories extends JpaRepository<Task, Long> {
    List<Task> findAllByProject(Project project);
}
