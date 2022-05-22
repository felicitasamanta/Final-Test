package com.example.demo.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/customers")
public class  CustomerController {

    @Autowired
    private final CustomerDao customerDao;

    public CustomerController(CustomerDao customerDao) {
        this.customerDao = customerDao;
    }

    @GetMapping
    public Customers getCustomers() {
        return customerDao.getList();
    }

   @PostMapping
    public void registerNewCustomer(@RequestBody Customer customer) {
      customerDao.addCustomer(customer);

   }

}
