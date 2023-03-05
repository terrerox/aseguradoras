using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EntitiesLayer.Dtos;
using EntitiesLayer.Entities;

namespace ServiceLayer.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        { 
            CreateMap<Aseguradora, GetAseguradoraDto>();
            CreateMap<AddAseguradoraDto, Aseguradora>();
        }        
    }
}