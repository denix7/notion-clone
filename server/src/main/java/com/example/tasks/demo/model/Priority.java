package com.example.tasks.demo.model;

public enum Priority {
    L() {
        public boolean isLow() {
            return true;
        }
    },
    M() {
        public boolean isMedium() {
            return true;
        }
    },
    H() {
        public boolean isHard(){
            return true;
        }
    }
}