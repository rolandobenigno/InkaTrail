using ModelEntity.Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelEntity.Main
{
    public class Destino : EntityBase
    {
        public string Nombre {get; set; }
        public string Ubigeo { get; set; }

    }
}
