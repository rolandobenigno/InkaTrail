package com.upc.curso.entidades;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TBL_MOVIMIENTO")
public class Movimiento implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String nrocuenta;
    private double monto;
    private String descripcion;
    private String respuesta;

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getNrocuenta() {
        return nrocuenta;
    }

    public void setNrocuenta(String nrocuenta) {
        this.nrocuenta = nrocuenta;
    }

    public double getMonto() {
        return monto;
    }

    public void setMonto(double monto) {
        this.monto = monto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
    }
}
