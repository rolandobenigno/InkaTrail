using ModelEntity.Main;
using ModelEntity.Sale;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InkaTrialDB.Contexto
{
    public class InkaTrialDB: DbContext
    {
        public InkaTrialDB() : base("InkaTrial")
        {
            Database.SetInitializer<InkaTrialDB>(null);
            Configuration.LazyLoadingEnabled = false;
            Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Destino> Destino { get; set; }
        public DbSet<PrecioPorDestino> PrecioPorDestino { get; set; }
        public DbSet<Cotizacion> Cotizacion { get; set; }

        #region Fluent Api
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Para no pluralizar los nombres
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            //Para evitar el borrado en cascada
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

            #region Cliente
            modelBuilder.Entity<Cliente>().Property(x => x.NumeroDocumento)
                .HasColumnType("varchar")
                .HasMaxLength(20)
                .IsRequired()
                .IsUnicode();


            modelBuilder.Entity<Cliente>().Property(x => x.Nombre)
                .HasColumnType("varchar")
                .HasMaxLength(255)
                .IsRequired();
            #endregion


        }

        #endregion

    }
}
