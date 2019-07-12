package com.upc.curso.negocio;

import javax.transaction.Transactional;

import com.upc.curso.entidades.Movimiento;
import com.upc.curso.repositorio.MovRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.upc.curso.entidades.Auto;
import com.upc.curso.repositorio.AutoRepositorio;

@Service
public class Negocio {
	@Autowired
	private AutoRepositorio autoRepositorio;
	@Autowired
	private MovRepositorio movRepositorio;

	public Auto crearCuenta(Auto auto){
		return autoRepositorio.save(auto);
	}

	//@Transactional
	//public Auto grabar(Auto auto){return autoRepositorio.save(auto);}

   @Transactional
	public Movimiento grabar(Movimiento movimiento){
		return movRepositorio.save(movimiento);
   }

}
