package com.upc.curso.jms;

import com.upc.curso.entidades.Movimiento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.upc.curso.entidades.Auto;
import com.upc.curso.negocio.Negocio;

@Component
public class JmsOyente {
	
	@Autowired
	private Negocio negocio;
	
	@JmsListener(destination="${jms.queue.destination}")
	public void miMensaje(String mensajeJson) {
		System.out.println("Transaccion Recibida:" + mensajeJson);
		//mensajeJSON a Objeto Auto
		ObjectMapper mapper = new ObjectMapper();
		try {
			//Auto auto =  mapper.readValue(mensajeJson, Auto.class);
			Movimiento movimiento =  mapper.readValue(mensajeJson, Movimiento.class);
			//auto.setRespuesta("Registrar a Tabla");
			movimiento.setRespuesta("Registrar Transaccion");
			System.out.println(mensajeJson);
			//Auto respuesta = negocio.grabar(auto);//registra en la base de  datos
			Movimiento respuesta = negocio.grabar(movimiento);//registra en la base de  datos
			if (respuesta==null) {
				System.out.println("No se pudo registrar Transaccion");
		    }	
			else {
				System.out.println("Registrado ok!");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
			System.out.println("No se pudo registrar");
		} 
	}
	
}