using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelComun.Comun
{
    public class GenericResponse
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public bool response { get; set; }
        public string messageResponse { get; set; }

        public GenericResponse()
        {
            response = true;
        }
    }
}
