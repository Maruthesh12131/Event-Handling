package com.EventTracker.MyEvent.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EventEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventId;
    @Column(nullable = false)
    private String eventName;
    @Column(nullable = false)
    private String location;
    @Column(nullable = false)
    private LocalDate eventDate;
    @Column(nullable = false)
    private LocalTime eventStartTime;
    @Column(nullable = false)
    private LocalTime eventEndTime;
    private String eventDescription;
    private Integer eventTotalTickets;
    private double ticketPrice;
}
