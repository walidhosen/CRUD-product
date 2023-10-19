using Employee.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Service.Model;

public class VMProduct:IVM
{
    public int Id { get; set; }
    public string? ProductName { get; set; }
    public string? Description { get; set; }
    public int? Price { get; set; }
    public string? BarCode { get; set; }
    public int? SellPrice { get; set; }
    public int CountryId { get; set; }
}
