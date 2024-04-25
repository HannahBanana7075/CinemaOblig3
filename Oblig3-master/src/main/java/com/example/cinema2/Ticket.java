package com.example.cinema2;

public class Ticket {
    private int id;
    private String movie;
    private int amount;
    private String firstName;
    private String lastName;
    private int phoneNumber;
    private String email;

    public Ticket(int id, String movie, int amount, String firstName, String lastName, int phoneNumber, String email) {
        this.id = id;
        this.movie = movie;
        this.amount = amount;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public Ticket(String movie, int amount, String firstName, String lastName, int phoneNumber, String email) {
        this.movie = movie;
        this.amount = amount;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public Ticket() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
        /*
        Getters and Setters retrieve data and saves it in the ticket array.

        source code https://www.geeksforgeeks.org/getter-and-setter-in-java/
        also, right click, generate, getters and setters
        */

}
