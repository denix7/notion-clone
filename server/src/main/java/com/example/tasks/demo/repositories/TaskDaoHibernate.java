package com.example.tasks.demo.repositories;

//@Repository("hibernateDao")
public class TaskDaoHibernate  {
//    private static final String PERSISTENCE_UNIT_NAME = "PERSISTENCE";
//    EntityManagerFactory entityManagerFactory;
////    @PersistenceContext
//    //EntityManager entity;
//
//    EntityManager entity = JPAUtil.getEntityManagerFactory().createEntityManager();
//    public TaskDaoHibernate() {
//        entityManagerFactory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
//        //entity = entityManagerFactory.createEntityManager();
//    }
//
//    @Override
//    public int insertTask(UUID id, Task task) {
//
//        return 0;
//    }
//
//    @Override
//    public Task addTask(Task task) {
//        System.out.println(task.toString());
//        UUID uuid = UUID.randomUUID();
//        LocalDateTime date = LocalDateTime.now();
//        task.setEntry(date);
//        task.setPriority(Priority.M);
//        task.setStatus(Status.PENDING);
//        task.setUuid(uuid);
//
//        try{
//            entity.getTransaction().begin();
//            entity.persist(task);
//            entity.getTransaction().commit();
//            return task;
//        } catch (Exception e) {
//            e.printStackTrace();
//            entity.getTransaction().rollback();
//            return null;
//        }
////        finally {
////            if(entity != null) {
////                entity.close();
////            }
////        }
//    }
//
//    @Override
//    public List<Task> selectAllTasks() {
//        String hql = "select p from Task p";
//        Query query = entity.createQuery(hql);
//        List<Task> tasks = query.getResultList();
//        return tasks;
//    }
//
//    @Override
//    public Task selectTaskById(int id) {
//        return entity.find(Task.class, id);
//    }
//
//    @Override
//    public int updateTaskById(int id, Task task) {
//        task.setId(id);
//        System.out.println(id + "   " + task.toString() + "///TASKDAO");
//        try {
//            entity.getTransaction().begin();
//            entity.merge(task);
//            entity.getTransaction().commit();
//            return 1;
//        } catch (Exception exception) {
//            exception.printStackTrace();
//            entity.getTransaction().rollback();
//            return 0;
//        }
////        finally {
////            if(entity != null) {
////                entity.close();
////            }
////        }
//    }
//
//    @Override
//    public boolean deleteTaskById(int id) {
//        try {
//            entity.getTransaction().begin();
//            Task task = selectTaskById(id);
//            entity.remove(task);
//            entity.getTransaction().commit();
//            return true;
//        } catch (Exception exception) {
//            exception.printStackTrace();
//            entity.getTransaction().rollback();
//            return false;
//        }
//    }
}