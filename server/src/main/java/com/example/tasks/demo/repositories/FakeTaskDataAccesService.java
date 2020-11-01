//package com.example.tasks.demo.dao;
//
//import com.example.tasks.demo.model.Task;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//import java.util.ArrayList;
//import java.util.Optional;
//import java.util.*;
//
//import java.util.UUID;
//
//@Repository("fakeDao")
//public class FakeTaskDataAccesService implements TaskDao {
//    private static List<Task> DB = new ArrayList<>();
//
//
//    @Override
//    public int insertTask(UUID id, Task task) {
//        DB.add(new Task(id, task.getDescription(), task.getStatus()));
//        return 1;
//    }
//
//    @Override
//    public int addTask(Task task) {
//        UUID id = UUID.randomUUID();
//        return insertTask(id, task);
//    }
//
//    @Override
//    public List<Task> selectAllTasks() {
//        return DB;
//    }
//
//    @Override
//    public Optional<Task> selectTaskById(UUID id) {
//        return DB.stream().filter(task -> task.getId().equals(id)).findFirst();
//    }
//
//    @Override
//    public int updateTaskById(UUID id, Task newTask) {
//        return selectTaskById(id)
//                .map(task -> {
//                    int indexOfTaskToUpdate = DB.indexOf(task);
//                    if(indexOfTaskToUpdate >= 0) {
//                        DB.set(indexOfTaskToUpdate, new Task(id, newTask.getDescription(), newTask.getStatus()));
//                        return 1;
//                    }
//                    return 0;
//                })
//                .orElse(0);
//    }
//
//    @Override
//    public int deleteTaskById(UUID id) {
//        Optional<Task> taskToDelete = selectTaskById(id);
//        if(taskToDelete == null) {
//            return 0;
//        }
//        DB.remove(taskToDelete.get());
//        return 1;
//    }
//}
