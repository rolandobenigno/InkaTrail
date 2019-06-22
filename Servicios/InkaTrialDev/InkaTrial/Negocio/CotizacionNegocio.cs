using ModelComun.Comun;
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

        public async Task<GenericResponse> CalcularMontoPagar(int destino_Id, int cantidadAdultos, int cantidadMenoresEdad)
        {
            GenericResponse response = new GenericResponse();
            double precioBase = 60D;




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
