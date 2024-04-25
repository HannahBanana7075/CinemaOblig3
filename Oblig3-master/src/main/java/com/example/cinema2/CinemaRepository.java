package com.example.cinema2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CinemaRepository {

    //CRUD

    @Autowired
    private JdbcTemplate db;

    //save tickets
    public void saveTicket (Ticket newTicket){
        String sql ="INSERT INTO tickets(movie, amount, firstName, lastName, phoneNumber, email) VALUES(?,?,?,?,?,?)";
        db.update(sql,newTicket.getMovie(),newTicket.getAmount(), newTicket.getFirstName(),newTicket.getLastName(),
                newTicket.getPhoneNumber(),newTicket.getEmail());
    }

    //read tickets
    public List<Ticket> getTickets() {
        String sql = "SELECT * FROM tickets ORDER BY LOWER(lastName)";
        List<Ticket> getAllTickets = db.query(sql, new BeanPropertyRowMapper<>(Ticket.class));
        return getAllTickets;
    }
/*
    //edit select
    public void editTicket(){
        String sql = "UPDATE * FROM CinemaTickets(movie, amount, firstName, lastName, phoneNumber, email) VALUES(?,?,?,?,?,?)";
        db.update(sql);
    }

    //delete select
    public void deleteSelect(long id){
        String sql = "DELETE FROM myTickets WHERE id = ?";
        db.update(sql, id);
    }
*/
    //delete all
    public void deleteAll(){
        String sql = "DELETE FROM tickets";
        db.update(sql);
    }
}
