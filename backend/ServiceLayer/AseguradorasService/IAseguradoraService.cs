using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntitiesLayer.Dtos;

namespace ServiceLayer.AseguradorasService
{
    public interface IAseguradoraService
    {
        Task<ServiceResponse<List<GetAseguradoraDto>>> GetAllAseguradoras();
        Task<ServiceResponse<GetAseguradoraDto>> GetAseguradoraById(Guid id);
        Task<ServiceResponse<List<GetAseguradoraDto>>> AddAseguradora(AddAseguradoraDto newAseguradora);
        Task<ServiceResponse<List<GetAseguradoraDto>>> UpdateAseguradora(UpdateAseguradoraDto updatedAseguradora);
        Task<ServiceResponse<List<GetAseguradoraDto>>> DeleteAseguradora(Guid id); 
    }
}