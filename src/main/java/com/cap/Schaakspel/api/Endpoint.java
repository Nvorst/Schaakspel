package com.cap.Schaakspel.api;

import com.cap.Schaakspel.control.PlayerRepository;
import com.cap.Schaakspel.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Endpoint {

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/players")
    public List<Player> getAllPlayers(){
        return playerRepository.findAll();
    }

    @PostMapping("/register")
    public void registerPlayer(@RequestBody Player player){
        playerRepository.save(player);
    }

    @PostMapping("/delete")
    public void deletePlayer( Long id){
        System.out.println(id);
        long playerId = id;
        Player x = playerRepository.findById(playerId).get();
        playerRepository.delete(x);
    }
}
