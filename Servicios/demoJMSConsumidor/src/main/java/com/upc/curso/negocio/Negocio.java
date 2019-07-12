package com.upc.curso.negocio;

import javax.transaction.Transactional;

import com.upc.curso.entidades.Tarjeta;
import com.upc.curso.repositorio.TarjetaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.upc.curso.entidades.Auto;
import com.upc.curso.repositorio.AutoRepositorio;

@Service
public class Negocio {
	@Autowired
	//private AutoRepositorio autoRepositorio;
	private TarjetaRepositorio tarjetaRepositorio;

	@Transactional
	//public Auto grabar(Auto auto){return autoRepositorio.save(auto);}
	public Tarjeta grabar(Tarjeta tarjeta){
		return tarjetaRepositorio.save(tarjeta);
	}

}
