package com.ratemyboss.ratemyboss2;

import jakarta.persistence.*;

@Entity
@Table(name = "boss")
public class Boss {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    private String name;
    private String company;
    private String department;

    //CONSTRUCTOR REQUIRED BY JPA
    protected Boss(){

    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Boss(String name, String company, String department) {
        this.name = name;
        this.company = company;
        this.department = department;

    }
}
