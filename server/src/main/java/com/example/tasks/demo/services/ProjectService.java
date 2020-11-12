package com.example.tasks.demo.services;

import java.util.Collection;

public interface ProjectService<Type> {

    public Type save(Type projectDTO);

    public Collection<Type> getAll();

    public Type getProject(Long id);

    public void deleteTask(Long id);
}
