package com.EventTracker.MyEvent.Reposiotry;

import com.EventTracker.MyEvent.Entity.Ticket;
import org.hibernate.sql.exec.spi.JdbcCallParameterRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket,Integer> {
}
