package com.example.tasks.demo.services.mappers;

public interface Mapper <TypeSource, TypeResult> {
    TypeResult map(TypeSource source);
}
