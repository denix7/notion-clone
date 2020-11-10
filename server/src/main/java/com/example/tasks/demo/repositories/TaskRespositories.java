package com.example.tasks.demo.repositories;

import com.example.tasks.demo.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRespositories extends JpaRepository<Task, Long> {
}
