package com.example.tasks.demo.services;

import java.util.Collection;
import java.util.UUID;
import java.util.Optional;

public interface Service<Type, TypeNew> {
    Type create(TypeNew task);

    Collection<Type> getAllTasks();

    Optional<Type> getTaskById(int id);

    boolean delete(int id);

    int updateTaskById(UUID id, Type task);

}
