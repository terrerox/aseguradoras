using AutoMapper;
using DataLayer;
using EntitiesLayer.Dtos;
using EntitiesLayer.Entities;
using ServiceLayer.AseguradorasService;
using TestsLayer.Base;

namespace TestsLayer
{
    public class AseguradoraTest : BaseTests<DataContext>
    {
        public DataContext Context { get; }
        private static IMapper Mapper;


        public AseguradoraTest() : base("AseguradoraDBContextTest-Job")
        {
            Context = new DataContext(_contextOptions);
            var mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Aseguradora, GetAseguradoraDto>();
                cfg.CreateMap<Aseguradora, GetAseguradoraDto>();
            });
            Mapper = mapperConfiguration.CreateMapper();


            CreateDBMockData();
        }
        [Fact]
        public void GetAllAseguradoras_ReturnsTrue()
        {
            // Arrange
            var aseguradoraService = CreateOutboundService();

            //Act
            var outboundResponse = aseguradoraService.GetAllAseguradoras();

            //Assert
            Assert.True(outboundResponse.Result.Success);
        }
        private void CreateDBMockData()
        {
            Context.Database.EnsureDeleted();
            Context.Database.EnsureCreated();

            Aseguradora newAseguradora = new()
            {
                Nombre = "Prueba",
                Comision = 12.00,
                Estado = true
            };

            Context.Aseguradoras.Add(newAseguradora);
            Context.SaveChanges();
        }
        private AseguradoraService CreateOutboundService()
        {
            return new AseguradoraService(Mapper, Context);
        }
    }
}