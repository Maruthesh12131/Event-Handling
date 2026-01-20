package com.EventTracker.MyEvent.Controller;

import com.EventTracker.MyEvent.DTOs.EventDTO;
import com.EventTracker.MyEvent.Entity.EventEntity;
import com.EventTracker.MyEvent.Entity.Ticket;
import com.EventTracker.MyEvent.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ServiceController {
    @Autowired
    private EventService service;
    @GetMapping("/showEvents")
    public List<EventEntity> showAllEvents(){
        return service.showEvents();
    }
    @PostMapping("/postEvent")
    public EventEntity postNewEvent(@RequestBody EventEntity newEvent){
        System.out.println(newEvent.getEventDate());
        System.out.println(newEvent.getEventDescription());
        System.out.println(newEvent.getEventName());
        System.out.println(newEvent.getLocation());
        return service.addEvent(newEvent);
    }
    @PutMapping("/updateEvent/{eventId}")
    public EventEntity updateEvent(@RequestBody EventDTO event ,@PathVariable Integer eventId){
        System.out.println(eventId);
        return service.updateEvent(event,eventId);
    }
    @GetMapping("/getEventDetails/{eventId}")
    public EventEntity showEventDetails(@PathVariable Integer eventId){
        return service.showDetails(eventId);
    }

    @DeleteMapping("/deleteEvent/{eventId}")
    public String deleteEvent(@PathVariable Integer eventId){
        return service.deleteEvent(eventId);
    }

    @PostMapping("/bookTicket/{eventId}")
    public void registerTicket(@PathVariable Integer eventId, @RequestBody Ticket newTicket){
        System.out.println(eventId);
        service.bookTicket(eventId , newTicket);
    }
}
