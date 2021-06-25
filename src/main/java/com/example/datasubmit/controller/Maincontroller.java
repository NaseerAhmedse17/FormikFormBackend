package com.example.datasubmit.controller;

import com.example.datasubmit.model.login;
import com.example.datasubmit.respository.respository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class Maincontroller {
        @Autowired
        respository Repo;

      @CrossOrigin
    @PostMapping("/login")
    public void savedata(@RequestBody login log){
        Repo.save(log);
    }

    @GetMapping("/showdata")
    public List<login> allData(){
          return (List<login>) Repo.findAll();
    }
}
