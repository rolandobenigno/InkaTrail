using ModelEntity.Main;
using ModelEntity.Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelEntity.Sale
{
    public class Cotizacion : EntityBase
    {
        public int Destino_Id { get; set; }
        [ForeignKey("Destino_Id")]
        public virtual Destino Destino { get; set; }
    }
}
