using Employee.Shared;
using Employee.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Model
{
    public class Products: BaseAuditableEntity, IEntity
    {
        public int Id { get; set; }
        public string? ProductName { get; set; }
        public string? Description { get; set; }
        public int? Price { get; set; }
        public string? BarCode { get; set; }
        public int? SellPrice { get; set; }
        public int CountryId { get; set; }
        public Country? Country { get; set; }
        

    }
}
