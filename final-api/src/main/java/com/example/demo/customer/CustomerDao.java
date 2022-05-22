package com.example.demo.customer;

import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public class CustomerDao {

    public static Customers list = new Customers();

    static {
        while (list.getCustomerList().size() <= 100) {
            list.getCustomerList().add(new Customer("Test name " + (list.getCustomerList().size() + 1),
                            "Test surname " + (list.getCustomerList().size() + 1),
                            LocalDate.of(1997, 10, 17),
                            861234567,
                            "test" + (list.getCustomerList().size() + 1) + "@gmail.com")
            );
        }

    }
    public Customers getList() {
        return list;
    }
    public void addCustomer(Customer customer) {
        list.getCustomerList().add(customer);
    }
}
