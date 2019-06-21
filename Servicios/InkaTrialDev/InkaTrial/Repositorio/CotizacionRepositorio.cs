using ModelComun.Comun;
using ModelEntity.Sale;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio
{
    public interface CotizacionRepositorio
    {
        Task<GenericResponse> CreateCotizacion(Cotizacion cotizacion);
        Task<GenericResponse> DeleteCotizacion(int cotizacion_id);
        Task<GenericResponse> Cotizacion(Cotizacion cotizacion);

    }
}
