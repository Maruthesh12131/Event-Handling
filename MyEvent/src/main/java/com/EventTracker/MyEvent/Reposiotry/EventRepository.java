package com.EventTracker.MyEvent.Reposiotry;

import com.EventTracker.MyEvent.Entity.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventEntity,Integer> {
}
