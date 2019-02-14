package com.cap.Schaakspel.control;

import com.cap.Schaakspel.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface PlayerRepository extends JpaRepository<Player, Long> {
}
