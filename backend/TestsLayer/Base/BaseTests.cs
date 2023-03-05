using DataLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestsLayer.Base
{
    public class BaseTests<TContext>
        where TContext : DbContext
    {
        protected DbContextOptions<TContext> _contextOptions { get; set; }
        public IServiceCollection Services { get; private set; }
        public IServiceScopeFactory ServiceScopeFactory { get; private set; }

        #region Constructor

        public BaseTests(string dbContextName)
        {
            if (string.IsNullOrEmpty(dbContextName)) throw new ArgumentNullException();

            _contextOptions = new DbContextOptionsBuilder<TContext>()
               .UseInMemoryDatabase(dbContextName)
               .ConfigureWarnings(b => b.Ignore(InMemoryEventId.TransactionIgnoredWarning))
               .Options;

            Services = new ServiceCollection();

            BuildServiceScopeFactory();
        }

        #endregion

        #region private Methods

        private void BuildServiceScopeFactory()
        {
            var serviceProvider = Services.BuildServiceProvider();

            Services.AddSingleton<DataContext>();

            var serviceScopeMock = new Mock<IServiceScope>();
            serviceScopeMock.SetupGet(s => s.ServiceProvider)
                .Returns(serviceProvider);

            var serviceScopeFactoryMock = new Mock<IServiceScopeFactory>();
            serviceScopeFactoryMock.Setup(s => s.CreateScope())
                .Returns(serviceScopeMock.Object);

            ServiceScopeFactory = serviceScopeFactoryMock.Object;
        }

        #endregion
    }
}
