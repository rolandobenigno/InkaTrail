namespace InkaTrialDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ActualizandoPrecios : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.PrecioPorDestino",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Destino_Id = c.Int(nullable: false),
                        PecioUnitarioAdulto = c.Decimal(nullable: false, precision: 18, scale: 2),
                        PecioUnitarioMenorEdad = c.Decimal(nullable: false, precision: 18, scale: 2),
                        CreateUser = c.String(nullable: false),
                        CreateDate = c.DateTime(nullable: false),
                        UpdateUser = c.String(nullable: false),
                        UpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Destino", t => t.Destino_Id)
                .Index(t => t.Destino_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PrecioPorDestino", "Destino_Id", "dbo.Destino");
            DropIndex("dbo.PrecioPorDestino", new[] { "Destino_Id" });
            DropTable("dbo.PrecioPorDestino");
        }
    }
}
