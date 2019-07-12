package com.upc.curso.repositorio;

import com.upc.curso.entidades.Movimiento;
import org.springframework.data.repository.CrudRepository;

public interface MovRepositorio extends CrudRepository<Movimiento, Long> {

}
