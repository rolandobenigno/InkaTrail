using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelEntity.Shared
{
    public class EntityBase
    {
        public int Id { get; set; }

        [Required]
        public string CreateUser { get; set; }

        [Required]
        public DateTime CreateDate { get; set; }

        [Required]
        public string UpdateUser { get; set; }

        [Required]
        public DateTime UpdateDate { get; set; }

        public EntityBase()
        {
            this.UpdateDate = DateTime.Now;
        }
    }
}
