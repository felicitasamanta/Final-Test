package com.example.demo.customer;

import java.time.LocalDate;
import java.util.Locale;

public class Customer {

    private Integer id;
    private String name;
    private String surname;
    private LocalDate dob;
    private Integer phoneNumber;
    private String email;

    public Customer( String name, String surname, LocalDate dob, Integer phoneNumber, String email) {
        this.id = setId( id);
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public Integer setId(Integer id) {
       return this.id = CustomerDao.list.getCustomerList().size() + 1;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer phoneNumber) {
            this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        for (int i = 0; i < CustomerDao.list.getCustomerList().size(); i++) {
        }
            this.email = email;
        }


    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", dob=" + dob +
                ", phoneNumber=" + phoneNumber +
                ", email='" + email + '\'' +
                '}';
    }
}
