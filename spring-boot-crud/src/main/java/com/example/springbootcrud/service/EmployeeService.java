package com.example.springbootcrud.service;

import com.example.springbootcrud.dao.EmployeeDAO;
import com.example.springbootcrud.model.Employee;

public class EmployeeService {
    private EmployeeDAO employeeDAO;

public int addEmployee(Employee emp)
{
   return employeeDAO.addEmployee(emp);
}
}
