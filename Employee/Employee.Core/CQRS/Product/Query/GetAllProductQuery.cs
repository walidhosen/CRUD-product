using Employee.Core.CQRS.Employee.Query;
using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Core.CQRS.Product.Query;

public record GetAllProductQuery () : IRequest<QueryResult<IEnumerable<VMProduct>>>;


public class GetAllProductQueryHandeler : IRequestHandler<GetAllProductQuery, QueryResult<IEnumerable<VMProduct>>>
{
    private readonly IProductRepository _productRepository;
    public GetAllProductQueryHandeler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }
    public async Task<QueryResult<IEnumerable<VMProduct>>> Handle(GetAllProductQuery request, CancellationToken cancellationToken)
    {
        var products = await _productRepository.GetAllAsync(x=>x.Country);
        return products switch
        {
            null => new QueryResult<IEnumerable<VMProduct>>(null, QueryResultTypeEnum.NotFound),
            _ => new QueryResult<IEnumerable<VMProduct>>(products, QueryResultTypeEnum.Success)
        };
    }
}
