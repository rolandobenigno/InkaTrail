using ModelComun.Comun;
using ModelEntity.Sale;
using Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Services.Controllers
{
    public class CotizacionController : ApiController
    {

        private readonly ICotizacionRepositorio _cotizacionRepositorio;

        public CotizacionController(ICotizacionRepositorio cotizacionRepositorio)
        {
            _cotizacionRepositorio = cotizacionRepositorio;
        }


        [HttpPost]
        //[Route("{id:int}/InvoiceSend")]
        public async Task<GenericResponse> Post([FromBody]Cotizacion cotizacion)
        //public async Task<GenericResponse> Post(int inte)
        {
            GenericResponse response = new GenericResponse();
            response = await _cotizacionRepositorio.GetTest();


            return response;
        }
    }
}
