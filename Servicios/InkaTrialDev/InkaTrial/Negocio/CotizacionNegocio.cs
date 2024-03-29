﻿using ModelComun.Comun;
using ModelEntity.Sale;
using Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class CotizacionNegocio : ICotizacionRepositorio
    {

        public async Task<GenericResponse> CalcularMontoPagar(int destino_Id, int cantidadAdultos, int cantidadMenoresEdad, bool aplicaDesc)
        {
            GenericResponse response = new GenericResponse();
            double precioBase = 60D;

            if (cantidadAdultos == 0 )
            {
                response.response = false;
                response.messageResponse = "La cantidad de adultos debe ser minimo 1";
            }

            double montoPagar;
            if (aplicaDesc)
            {
                montoPagar = ((precioBase * cantidadAdultos) + (precioBase * cantidadMenoresEdad)) / 1.20;
            }
            else
            {
                montoPagar = (precioBase * cantidadAdultos) + (precioBase * cantidadMenoresEdad);
            }

            response.messageResponse = "El monto a pagar es: " + montoPagar + " SOLES";


            return response;
        }

        public async Task<GenericResponse> CalcularMontoPagarDescuento(int destino_Id, int cantidadAdultos, int cantidadMenoresEdad)
        {
            GenericResponse response = new GenericResponse();

            return response;
        }

        public Task<GenericResponse> Cotizacion(Cotizacion cotizacion)
        {
            throw new NotImplementedException();
        }

        public Task<GenericResponse> CreateCotizacion(Cotizacion cotizacion)
        {
            throw new NotImplementedException();
        }

        public Task<GenericResponse> DeleteCotizacion(int cotizacion_id)
        {
            throw new NotImplementedException();
        }

       
    }
}
