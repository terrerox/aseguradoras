using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntitiesLayer.Entities
{
    public class Aseguradora
    {
        public Guid  Id  { get; set; }
        public string Nombre { get; set; }
        public double Comision { get; set; }
        public Boolean Estado { get; set; }
    }
}
