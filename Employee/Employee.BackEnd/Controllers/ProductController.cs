using Employee.Core.CQRS.Employee.Command;
using Employee.Core.CQRS.Employee.Query;
using Employee.Core.CQRS.Product.Command;
using Employee.Core.CQRS.Product.Query;
using Employee.Service.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee.BackEnd.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : APIControllerBase
{
    [HttpGet("{id:int}")]
    public async Task<ActionResult<VMProduct>> GetById(int id)
    {
        return await HandleQueryAsync(new GetAllProductByIdQuery(id));
    }
    [HttpGet]
    public async Task<ActionResult<VMProduct>> GetAllProduct()
    {
        return await HandleQueryAsync(new GetAllProductQuery());
    }

    [HttpPost]
    public async Task<ActionResult<VMProduct>> CreateProduct([FromForm] VMProduct command)
    {
        return await HandleCommandAsync(new CreateProductCommand(command));
    }
    [HttpPut("{id:int}")]
    public async Task<ActionResult<VMProduct>> UpdateProduct(int id, [FromForm] VMProduct product)
    {
        return await HandleCommandAsync(new UpdateProductCommand(id, product));
    }
    [HttpDelete]
    public async Task<ActionResult<VMProduct>> DeleteProduct(int id)
    {
        return await HandleCommandAsync(new DeleteProductCommand(id));
    }
}
