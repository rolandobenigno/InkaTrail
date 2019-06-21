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

        public async Task<GenericResponse> GetTest()
        {
            GenericResponse response = new GenericResponse();
            response.messageResponse = "Bienvenido";


            return response;
        }
    }
}
