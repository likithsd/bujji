package com.example.backend;

public class LoveLetter {
    private String title;
    private String message;

    public LoveLetter(String title, String message) {
        this.title = title;
        this.message = message;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
