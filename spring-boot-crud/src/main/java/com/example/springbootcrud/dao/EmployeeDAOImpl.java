package com.example.springbootcrud.dao;

import com.example.springbootcrud.model.Employee;
import java.util.ArrayList;
import java.util.List;

public class EmployeeDAOImpl implements  EmployeeDAO{


    List<Employee> employees = new ArrayList<>();


    @Override
    public int addEmployee(Employee emp) {
        employees.add(emp);
        return 1;
    }
}
