package com.example.tasks.demo.services;

import java.util.Collection;

public interface Service<Type, TypeNew> {
    Type create(TypeNew task);

    Collection<Type> getAllTasks();

//    Optional<Type> getTaskById(int id);
    Type getTaskById(int id);

    boolean delete(int id);

    int updateTaskById(int id, Type task);

}
