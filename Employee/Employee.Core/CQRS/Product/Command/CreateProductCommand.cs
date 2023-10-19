using AutoMapper;
using Employee.Core.CQRS.Employee.Command;
using Employee.Model;
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

public record CreateProductCommand(VMProduct Product) : IRequest<CommandResult<VMProduct>>;

public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, CommandResult<VMProduct>>
{
    private readonly IProductRepository _productRepository;

    private readonly IMapper _mapper;

    public CreateProductCommandHandler(IProductRepository productRepository,  IMapper mapper)
    {
        _productRepository = productRepository;
        
        _mapper = mapper;
    }
    public async Task<CommandResult<VMProduct>> Handle(CreateProductCommand request, CancellationToken cancellationToken)
    {
       
        var result = _mapper.Map<Products>(request.Product);

        var product = await _productRepository.InsertAsync(result);
        return product switch
        {
            null => new CommandResult<VMProduct>(null, CommandResultTypeEnum.NotFound),
            _ => new CommandResult<VMProduct>(product, CommandResultTypeEnum.Success)
        };
    }
}
