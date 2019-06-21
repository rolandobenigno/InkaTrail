namespace InkaTrialDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class OK1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cotizacion",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Destino_Id = c.Int(nullable: false),
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
            DropForeignKey("dbo.Cotizacion", "Destino_Id", "dbo.Destino");
            DropIndex("dbo.Cotizacion", new[] { "Destino_Id" });
            DropTable("dbo.Cotizacion");
        }
    }
}
