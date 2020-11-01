package com.example.tasks.demo.model;

public enum Status {
    PENDING() {
        public boolean isPending() {
            return true;
        }
    },
    DOING() {
        public boolean isDoing() {
            return true;
        }
    },
    DONE() {
        public boolean isDone() {
            return true;
        }
    }
}
