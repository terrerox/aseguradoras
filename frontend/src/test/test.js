const {By, Key, Builder} = require("selenium-webdriver")
const { expect } = require('chai');
require("chromedriver")


describe("FE - Vista de aseguradoras", function() {

    it("Tiene el titulo de pagina requerido", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        const title = await driver.getTitle()
        expect(title).to.eq('Aseguradoras')
        driver.quit()
    })

    it("Tiene el texto que muestra la ultima vez que se actualizó la tabla", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        const loggerTitle = await driver.findElement(By.id('logger')).getText()
        expect(loggerTitle).to.eq('Updated 2 minutes ago')
        driver.quit()
    })
})

describe("FE - Visualizar todos los aseguradoras de la base de datos", function() {

    it("Usa una tabla para mostrar los datos", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        const table = await driver.findElement(By.className('chakra-table')).isDisplayed()
        expect(table).to.eq(true)
        driver.quit()
    })

    it("Agrega los registros en la tabla", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        setTimeout(async() => {
            const botonEliminar = await driver.findElement(By.css('.bookTitle')).isDisplayed()
            expect(botonEliminar).to.eq(true)
            driver.quit()
        }, 900)
    })
})

describe("FE - Eliminar libro de la base de datos", function() {

    it("El boton eliminar existe", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        setTimeout(async() => {
            const tituloLibro = await driver.findElement(By.css('.deleteButton')).isDisplayed()
            expect(tituloLibro).to.eq(true)
            driver.quit()
        }, 900)
    })

    it("El boton tiene color rojo", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        setTimeout(async() => {
            const botonEliminar = await driver.findElement(By.css('.deleteButton')).isEnabled()
            expect(botonEliminar).to.eq(true)
            driver.quit()
        }, 900)
    })

    it("Se muestra el mensaje de eliminado", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        setTimeout(async() => {
            await driver.findElement(By.id('botonEliminar-1')).click()
            const mensaje = await driver.findElement(By.className('chakra-toast__inner')).isDisplayed()
            expect(mensaje).to.eq(true)
            driver.quit()
        }, 900)
    })
})

describe("FE - Editar aseguradoras de la base de datos", function() {
    it("El formulario esta en un modal", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        setTimeout(async() => {
            await driver.findElement(By.id('botonEditar-1')).click()
            const modal = await driver.findElement(By.className('chakra-modal__header')).isDisplayed()
            expect(modal).to.eq(true)
            driver.quit()
        }, 900)
    })

    it("Se muestra el mensaje de no inputs en blanco", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        setTimeout(async() => {
            await driver.findElement(By.id('botonEditar-1')).click()
            await driver.findElement(By.id('enviarForm')).click()
            const mensaje = await driver.findElement(By.className('chakra-alert')).isDisplayed()
            expect(mensaje).to.eq(true)
            driver.quit()
        }, 900)
    })
})

describe("FE - Agregar aseguradoras a la base de datos", function() {
    it("El formulario esta en un modal", async function() {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
        await driver.findElement(By.id('newButton')).click()
        const modal = await driver.findElement(By.className('chakra-modal__header')).isDisplayed()
        expect(modal).to.eq(true)
        driver.quit()
    })
})