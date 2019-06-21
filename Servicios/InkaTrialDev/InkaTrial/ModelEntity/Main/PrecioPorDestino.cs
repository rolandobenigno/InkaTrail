using ModelEntity.Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelEntity.Main
{
    public class PrecioPorDestino : EntityBase
    {
        public int Destino_Id { get; set; }
        [ForeignKey("Destino_Id")]
        public virtual Destino Destino { get; set; }

        public decimal PecioUnitarioAdulto { get; set; }

        public decimal PecioUnitarioMenorEdad { get; set; }
    }
}
