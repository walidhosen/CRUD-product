using Employee.Model;
using Employee.Shared.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Infrastructure.Persistence.Configurations;

public record ProductConfiguration:IEntityTypeConfiguration<Products>
{
    public void Configure(EntityTypeBuilder<Products> builder)
    {
        builder.ToTable("Product", schema: "Emp");
        builder.HasKey(x => x.Id);
        builder.HasIndex(x => x.ProductName);
        builder.HasData(new
        
       
        {
            Id = 1,
            ProductName = "Laptop",
            Description = "TK",
            RatingPrice=400,
            BareCode="123",
            SellPrice=1,
            CountryId = 1,
            Created = DateTimeOffset.Now,
            Status = EntityStatus.Created
            
           
        });
    }
}