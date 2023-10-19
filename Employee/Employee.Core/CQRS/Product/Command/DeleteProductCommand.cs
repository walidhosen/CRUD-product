﻿using AutoMapper;
using Employee.Core.CQRS.Employee.Command;
using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Core.CQRS.Product.Command;

public record DeleteProductCommand (int Id) : IRequest<CommandResult<VMProduct>>
{
    public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, CommandResult<VMProduct>>
    {
        private readonly IProductRepository _productrepository;
       
        private readonly IMapper _mapper;
        public DeleteProductCommandHandler(IProductRepository productRepository, IMapper mapper)
        {
            _productrepository = productRepository;
           
            _mapper = mapper;
        }
        public async Task<CommandResult<VMProduct>> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
           
            var result = await _productrepository.DeleteAsync(request.Id);
            return result switch
            {
                null => new CommandResult<VMProduct>(null, CommandResultTypeEnum.NotFound),
                _ => new CommandResult<VMProduct>(result, CommandResultTypeEnum.Success)
            };
        }

    }
}