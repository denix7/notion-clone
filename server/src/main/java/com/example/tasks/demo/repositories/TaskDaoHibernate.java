package com.example.tasks.demo.repositories;

import com.example.tasks.demo.model.Task;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.Query;
import java.util.List;
import java.util.UUID;

@Repository("hibernateDao")
public class TaskDaoHibernate implements TaskDao {
    private static final String PERSISTENCE_UNIT_NAME = "PERSISTENCE";
    EntityManagerFactory entityManagerFactory;
    EntityManager entity;

    //EntityManager entity = JPAUtil.getEntityManagerFactory().createEntityManager();
    public TaskDaoHibernate() {
        entityManagerFactory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
        entity = entityManagerFactory.createEntityManager();
    }

    @Override
    public int insertTask(UUID id, Task task) {

        return 0;
    }

    @Override
    public int addTask(Task task) {
        try{
            entity.getTransaction().begin();
            entity.persist(task);
            entity.getTransaction().commit();
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
            entity.getTransaction().rollback();
            return 0;
        }
//        finally {
//            if(entity != null) {
//                entity.close();
//            }
//        }
    }

    @Override
    public List<Task> selectAllTasks() {
        String hql = "select p from Task p";
        Query query = entity.createQuery(hql);
        List<Task> tasks = query.getResultList();
        return tasks;
    }

    @Override
    public Task selectTaskById(int id) {
        return entity.find(Task.class, id);
    }

    @Override
    public int updateTaskById(UUID id, Task task) {
        try {
            entity.getTransaction().begin();
            entity.merge(task);
            entity.getTransaction().commit();
            return 1;
        } catch (Exception exception) {
            exception.printStackTrace();
            entity.getTransaction().rollback();
            return 0;
        }
    }

    @Override
    public int deleteTaskById(int id) {
        try {
            entity.getTransaction().begin();
            Task task = selectTaskById(id);
            entity.remove(task);
            entity.getTransaction().commit();
            return 1;
        } catch (Exception exception) {
            exception.printStackTrace();
            entity.getTransaction().rollback();
            return 0;
        }
    }
}