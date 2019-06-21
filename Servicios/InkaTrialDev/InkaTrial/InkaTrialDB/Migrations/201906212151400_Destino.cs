namespace InkaTrialDB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Destino : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Destino",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nombre = c.String(),
                        Ubigeo = c.String(),
                        CreateUser = c.String(nullable: false),
                        CreateDate = c.DateTime(nullable: false),
                        UpdateUser = c.String(nullable: false),
                        UpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Destino");
        }
    }
}
