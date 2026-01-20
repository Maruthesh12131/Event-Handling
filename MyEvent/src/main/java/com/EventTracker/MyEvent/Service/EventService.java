package com.EventTracker.MyEvent.Service;

import com.EventTracker.MyEvent.DTOs.EventDTO;
import com.EventTracker.MyEvent.Entity.EventEntity;
import com.EventTracker.MyEvent.Entity.Ticket;
import com.EventTracker.MyEvent.Reposiotry.EventRepository;
import com.EventTracker.MyEvent.Reposiotry.TicketRepository;
import jdk.jfr.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository repository;
    @Autowired
    private TicketRepository ticketRepo;
    public List<EventEntity> showEvents(){
        return repository.findAll();
    }
    public EventEntity addEvent(EventEntity newEvent){
        repository.save(newEvent);
        return newEvent;
    }
    public EventEntity updateEvent(EventDTO event,Integer eventId){
        Optional<EventEntity> outdatedEvent = repository.findById(eventId);
        EventEntity updatedEvent = new EventEntity();
        if(outdatedEvent.isPresent()){
            updatedEvent = outdatedEvent.get();
            updatedEvent.setEventName(event.getEventName());
            updatedEvent.setEventDate(event.getEventDate());
            updatedEvent.setEventStartTime(event.getEventStartTime());
            updatedEvent.setEventEndTime(event.getEventEndTime());
            updatedEvent.setEventTotalTickets(event.getEventTotalTicket());
            updatedEvent.setTicketPrice(event.getTicketPrice());
            repository.save(updatedEvent);
        }
        return updatedEvent;
    }
    public String deleteEvent(Integer eventId){
        Optional<EventEntity> existingEvent = repository.findById(eventId);
        if(existingEvent.isPresent()){
            repository.deleteById(eventId);
            return "Success";
        }
        return "Failure";
    }
    public EventEntity showDetails(Integer eventId){
        Optional<EventEntity> existingEvent = repository.findById(eventId);
        EventEntity update = new EventEntity();
        if(existingEvent.isPresent()){
            update = existingEvent.get();
        }
        return update;
    }

    public void bookTicket(Integer eventId, Ticket newTicket){
        Optional<EventEntity> event = repository.findById(eventId);
        if(event.isPresent()){
           ticketRepo.save(newTicket);
        }
    }
}
