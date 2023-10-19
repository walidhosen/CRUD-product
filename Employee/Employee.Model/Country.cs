﻿using Employee.Shared;
using Employee.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Employee.Model;

public class Country :BaseAuditableEntity,IEntity
{
    public int Id { get; set; }
    public string? CountryName { get; set; }
    public string? Currency { get; set; }
    

    [JsonIgnore]
    public ICollection<Employees> Employees { get; set; } = new HashSet<Employees>();
    [JsonIgnore]
    public ICollection<State> State { get; set; } = new HashSet<State>();
    [JsonIgnore]
    public ICollection<Products> products { get; set; } = new HashSet<Products>();
}
