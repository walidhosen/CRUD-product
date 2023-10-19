﻿using AutoMapper;
using Employee.Infrastructure.Persistence;
using Employee.Model;
using Employee.Repository.Interface;
using Employee.Service.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Repository.Concrete;

public class ProductRepository : RepositoryBase<Products, VMProduct, int>, IProductRepository
{
    public ProductRepository(EmployeeDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
    {
    }
}
