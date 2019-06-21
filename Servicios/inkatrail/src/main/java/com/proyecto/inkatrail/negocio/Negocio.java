package com.proyecto.inkatrail.negocio;

import com.proyecto.inkatrail.entidades.Reserva;
import com.proyecto.inkatrail.repositorio.ReservaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class Negocio {
    @Autowired
    private ReservaRepositorio reservaRepositorio;

    public List<Reserva> obtenerReservas(){
        return (List<Reserva>) reservaRepositorio.findAll();
    }

    public Reserva obtenerReserva(Long codigo) throws Exception{
        return reservaRepositorio.findById(codigo).orElseThrow(() -> new Exception("No se encontro reserva"));
    }

    public Reserva crearReserva(Reserva producto){
        return reservaRepositorio.save(producto);
    }

    public Reserva actualizarReserva(Reserva reserva) throws Exception{
        Reserva p = reservaRepositorio.findById(reserva.getCodigo()).orElseThrow
                (() -> new Exception("No se puede actualizar la reserva"));
        p.setApellidos(reserva.getApellidos());
        return reservaRepositorio.save(reserva);
    }

    public Reserva anularReserva(Long codigo)throws Exception{
        Reserva reserva = reservaRepositorio.findById(codigo).orElseThrow(() -> new Exception("No se puede reserva"));
        reservaRepositorio.delete(reserva);
        return reserva;
    }


}
