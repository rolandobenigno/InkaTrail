package com.proyecto.inkatrail.entidades;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TP_RESERVA")

public class Reserva implements Serializable {
    private static final long serialVersionUID = 54646546464161653L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String nombres;
    private String apellidos;
    private  String telefono ;
    private  String email;
    private String direccion;
    private  String ciudad;
    private  String estado;
    private  String codigopostal;
    private  int nroadultos;
    private  int nroninos;
    private double totalpaquete;
    private Long codcoti;
    private  String metodopago;

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCodigopostal() {
        return codigopostal;
    }

    public void setCodigopostal(String codigopostal) {
        this.codigopostal = codigopostal;
    }

    public int getNroadultos() {
        return nroadultos;
    }

    public void setNroadultos(int nroadultos) {
        this.nroadultos = nroadultos;
    }

    public int getNroninos() {
        return nroninos;
    }

    public void setNroninos(int nroninos) {
        this.nroninos = nroninos;
    }

    public double getTotalpaquete() {
        return totalpaquete;
    }

    public void setTotalpaquete(double totalpaquete) {
        this.totalpaquete = totalpaquete;
    }

    public Long getCodcoti() {
        return codcoti;
    }

    public void setCodcoti(Long codcoti) {
        this.codcoti = codcoti;
    }

    public String getMetodopago() {
        return metodopago;
    }

    public void setMetodopago(String metodopago) {
        this.metodopago = metodopago;
    }
}
