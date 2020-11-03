package com.example.tasks.demo.repositories;

import java.util.Collection;
import java.util.Optional;

public interface Repository <Type> {
    Collection<Type> getAll();

    Optional<Type> get(int id);

    Type create(Type object);

    boolean delete(int id);
}
