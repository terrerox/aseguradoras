import {
    FormControl,
    FormLabel,
    Input,
    Select,
} from '@chakra-ui/react'


export const AseguradoraForm = ({formValues, handleInputChange}) => {

    const { nombre, comision, estado } = formValues

    return (
        <form>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input
            isRequired
            type="text" 
            name="nombre" 
            placeholder="Nombre" 
            value={nombre}
            onChange={handleInputChange}
          />
          <FormLabel>Comision</FormLabel>
          <Input
            isRequired
            type="number" 
            name="comision" 
            placeholder="Comision" 
            value={comision}
            onChange={handleInputChange}
          />
          <FormLabel>Estado</FormLabel>
          <Select 
            isRequired
            name="estado" 
            placeholder="Estado" 
            value={estado}
            onChange={handleInputChange}
          >
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </Select>
        </FormControl>
      </form>
    )
}
  