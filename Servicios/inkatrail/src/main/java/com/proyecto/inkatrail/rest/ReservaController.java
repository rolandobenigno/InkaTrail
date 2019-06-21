package com.proyecto.inkatrail.rest;

import com.proyecto.inkatrail.entidades.Reserva;
import com.proyecto.inkatrail.negocio.Negocio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ReservaController {
    @Autowired
    private Negocio negocio;
    Logger logger = LoggerFactory.getLogger(RestController.class);

    @GetMapping("/listareservas")
    public List<Reserva> obtenerReservas(){
        return negocio.obtenerReservas();
    }

    @PostMapping("/creareserva")
    public Reserva crearReserva(@RequestBody Reserva reserva){
        Reserva p;
        logger.debug("Reserva generada con exito");
        p = negocio.crearReserva(reserva);
        return p;
    }

    @PutMapping("/actualizareserva")
    public Reserva actualizarReserva(@RequestBody Reserva reserva){
        Reserva p;
        try {
            logger.debug("Actualizando reserva");
            p = negocio.actualizarReserva(reserva);
            logger.debug("Reserva actualizada");
        }catch (Exception e){
            logger.error("Error de actualizacion en reserva");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Lo sentimos no se pudo actualizar la reserva");
        }
        return p;
    }

    @DeleteMapping("/anulareserva/{codigo}")
    public Reserva anularReserva(@PathVariable(value = "codigo") Long codigo){
        logger.debug("Anulando reserva");
        try {
            return negocio.anularReserva(codigo);
        }catch (Exception e){
            logger.error("Error al eliminar reserva");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Lo sentimos no se pudo eliminar la reserva");
        }
    }

    @GetMapping("/buscareserva/{codigo}")
    public Reserva obtenerEntidad(@PathVariable(value = "codigo") Long codigo){
        Reserva p;
        try {
            logger.debug("Buscando reserva");
            p = negocio.obtenerReserva(codigo);
            logger.debug("Reserva encontrado");
        }catch (Exception e){
            logger.error("Error buscando reserva");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Lo sentimos no se pudo encontrar la reserva");
        }
        return p;
    }
}
