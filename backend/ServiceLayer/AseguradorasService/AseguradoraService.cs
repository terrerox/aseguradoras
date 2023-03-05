using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using AutoMapper;
using DataLayer;
using EntitiesLayer.Dtos;
using EntitiesLayer.Entities;
using Microsoft.EntityFrameworkCore;

namespace ServiceLayer.AseguradorasService
{
    public class AseguradoraService : IAseguradoraService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public AseguradoraService(IMapper mapper, DataContext context)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<List<GetAseguradoraDto>>> AddAseguradora(AddAseguradoraDto newAseguradora)
        {
            ServiceResponse<List<GetAseguradoraDto>> serviceResponse = new ServiceResponse<List<GetAseguradoraDto>>();
            Aseguradora Aseguradora = _mapper.Map<Aseguradora>(newAseguradora);

            await _context.Aseguradoras.AddAsync(Aseguradora);
            await _context.SaveChangesAsync();
            serviceResponse.Data = (_context.Aseguradoras.Select(c => _mapper.Map<GetAseguradoraDto>(c))).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetAseguradoraDto>>> DeleteAseguradora(Guid id)
        {
            ServiceResponse<List<GetAseguradoraDto>> serviceResponse =
                new ServiceResponse<List<GetAseguradoraDto>>();
            try
            {
                Aseguradora Aseguradora = await _context.Aseguradoras.FirstOrDefaultAsync(c => c.Id == id);
                if (Aseguradora != null)
                {
                    _context.Aseguradoras.Remove(Aseguradora);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = (_context.Aseguradoras.Select(c => _mapper.Map<GetAseguradoraDto>(c))).ToList();
                }
                else
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Aseguradora not found.";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetAseguradoraDto>>> GetAllAseguradoras()
        {
            ServiceResponse<List<GetAseguradoraDto>> serviceResponse = new ServiceResponse<List<GetAseguradoraDto>>();
            List<Aseguradora> dbAseguradoras = await _context.Aseguradoras.ToListAsync();
            serviceResponse.Data = dbAseguradoras.Select(c => _mapper.Map<GetAseguradoraDto>(c)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetAseguradoraDto>> GetAseguradoraById(Guid id)
        {
            ServiceResponse<GetAseguradoraDto> serviceResponse = new ServiceResponse<GetAseguradoraDto>();
            try
            {
                Aseguradora dbAseguradora =
                    await _context.Aseguradoras
                    .FirstOrDefaultAsync(c => c.Id == id);
                serviceResponse.Data = _mapper.Map<GetAseguradoraDto>(dbAseguradora);
            }
            catch (Exception)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "Aseguradora not found";
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetAseguradoraDto>>> UpdateAseguradora(UpdateAseguradoraDto updatedAseguradora)
        {
            ServiceResponse<List<GetAseguradoraDto>> serviceResponse = new ServiceResponse<List<GetAseguradoraDto>>();
            try
            {
                Aseguradora Aseguradora = await _context.Aseguradoras.FirstOrDefaultAsync(c => c.Id == updatedAseguradora.Id);
                if (Aseguradora != null)
                {
                    Aseguradora.Nombre = updatedAseguradora.Nombre;
                    Aseguradora.Comision = updatedAseguradora.Comision;
                    Aseguradora.Estado = updatedAseguradora.Estado;
                    _context.Aseguradoras.Update(Aseguradora);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = (_context.Aseguradoras.Select(c => _mapper.Map<GetAseguradoraDto>(c))).ToList();
                }
                else
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Aseguradora not found.";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
    }
}