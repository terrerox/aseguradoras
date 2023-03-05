using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using EntitiesLayer.Entities;

namespace EntitiesLayer.Dtos
{
    public class AddAseguradoraDto
    {
        [Required]
        public string Nombre { get; set; }
        [Required]
        public double Comision { get; set; }
        [Required]
        public bool Estado { get; set; }
    }
}