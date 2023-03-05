using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntitiesLayer.Dtos;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.AseguradorasService;

namespace RouterLayer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AseguradoraController : ControllerBase
    {
        private readonly IAseguradoraService _aseguradoraService;
        public AseguradoraController(IAseguradoraService aseguradoraService)
        {
            _aseguradoraService = aseguradoraService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _aseguradoraService.GetAllAseguradoras());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(Guid id)
        {
            return Ok(await _aseguradoraService.GetAseguradoraById(id));
        }

        [HttpPost]
        public async Task<IActionResult> AddAccount(AddAseguradoraDto newAccount)
        {
            return Ok(await _aseguradoraService.AddAseguradora(newAccount));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAccount(UpdateAseguradoraDto updatedAccount)
        {
            ServiceResponse<List<GetAseguradoraDto>> response = await _aseguradoraService.UpdateAseguradora(updatedAccount);
            if (response.Data == null)         
                return NotFound(response);
            
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            ServiceResponse<List<GetAseguradoraDto>> response = await _aseguradoraService.DeleteAseguradora(id);
            if (response.Data == null)
                return NotFound(response);
            
            return Ok(response);
        }
    }
}