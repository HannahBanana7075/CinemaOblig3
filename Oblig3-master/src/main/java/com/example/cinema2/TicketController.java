package com.example.cinema2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    CinemaRepository rep;

    @PostMapping("saveTicket")
    public void saved(Ticket ticket){
        rep.saveTicket(ticket);
    }

    @GetMapping("getTickets")
    public List<Ticket> getTickets(){
        return rep.getTickets();
    }

    @DeleteMapping("deleteAll")
    public void deleteAll() {
        rep.deleteAll();
    }

   // @PostMapping("/deleteAll")


}
