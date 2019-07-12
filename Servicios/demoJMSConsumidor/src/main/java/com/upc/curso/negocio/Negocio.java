package com.upc.curso.negocio;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.upc.curso.entidades.Auto;
import com.upc.curso.repositorio.AutoRepositorio;

@Service
public class Negocio {
	@Autowired
	private AutoRepositorio autoRepositorio;

	@Transactional
	public Auto grabar(Auto auto)
   {	   
	  return autoRepositorio.save(auto);
   }
}
