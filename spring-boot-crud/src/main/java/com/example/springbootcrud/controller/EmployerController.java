package com.example.springbootcrud.controller;

import  com.example.springbootcrud.model.Employee;
import com.example.springbootcrud.service.EmployeeService;

public class EmployerController {
    private EmployeeService employeeService;

    public int addEmployee(Employee emp) {
        return employeeService.addEmployee(emp);
    }
}


