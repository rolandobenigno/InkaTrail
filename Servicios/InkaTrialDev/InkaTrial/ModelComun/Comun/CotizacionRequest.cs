using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelComun.Comun
{
    public class CotizacionRequest
    {
        public  int destino_Id { get; set; }
        public int cantidadAdultos { get; set; }
        public int cantidadMenoresEdad { get; set; }
        public bool aplicaDescuento { get; set; }

    }
}
