import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Flex
} from '@chakra-ui/react'
import {
    FiPenTool,
    FiDelete
} from "react-icons/fi";


export const AseguradorasTable = ({ aseguradoras, setAseguradora, deleteAseguradora, onOpen }) => {

    const updateAccount = (aseguradora) => {
        onOpen()
        setAseguradora(aseguradora)
    }


    return (
        <Table variant='striped' colorScheme='teal'>
            <TableCaption id="logger"> 
                Updated 2 minutes ago
            </TableCaption>
            <Thead>
                <Tr>
                    <Th>Nombre</Th>
                    <Th>Comision</Th>
                    <Th>Estado</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    aseguradoras.map(aseguradora => (
                        <Tr key={aseguradora.id}>
                            <Td>{aseguradora.nombre}</Td>
                            <Td>{aseguradora.comision}</Td>
                            <Td>{aseguradora.estado ? 'Activo' : 'Inactivo'}</Td>
                            <Td>
                                <Flex alignItems="center" justifyContent="space-around">
                                    <Button
                                        id={'botonEditar-' + aseguradora.id}
                                        leftIcon={<FiPenTool />}
                                        colorScheme='blue'
                                        variant='solid'
                                        onClick={() => updateAccount(aseguradora)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        id={'botonEliminar-' + aseguradora.id}
                                        className='deleteButton'
                                        leftIcon={<FiDelete />}
                                        colorScheme='red'
                                        variant='solid'
                                        onClick={() => deleteAseguradora(aseguradora.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </Flex>
                            </Td>
                        </Tr>
                    ))
                }
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th>Nombre</Th>
                    <Th>Comision</Th>
                    <Th>Estado</Th>
                </Tr>
            </Tfoot>
        </Table>
    )
}