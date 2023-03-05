using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EntitiesLayer.Dtos
{
    public class GetAseguradoraDto
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public double Comision { get; set; }
        public bool Estado { get; set; }
    }
}