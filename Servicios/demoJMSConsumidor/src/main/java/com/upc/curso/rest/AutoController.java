package com.upc.curso.rest;

import com.upc.curso.entidades.Auto;
import com.upc.curso.negocio.Negocio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apis")
public class AutoController {
    @Autowired
    private Negocio negocio;
    Logger logger = LoggerFactory.getLogger(AutoController.class);

    @PostMapping("/creacuenta")
    public Auto crearCuenta(@RequestBody Auto auto){
        Auto a;
        //logger.debug("Creando cuenta");
        a = negocio.crearCuenta(auto);
        return a;
    }
}
