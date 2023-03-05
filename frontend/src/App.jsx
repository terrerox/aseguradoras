import { useState, useEffect } from 'react'
import { 
  Text,
  Flex,
  Button,
  Spinner,
  useToast,
  Container,
  useDisclosure
} from "@chakra-ui/react";
import aseguradoraService from './services/aseguradoraService';
import { AseguradorasTable } from "./components/AseguradorasTable"
import { AseguradoraModal } from "./components/AseguradoraModal"


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [aseguradoras, setAseguradoras] = useState([])
  const [aseguradora, setAseguradora] = useState([])
  const toast = useToast()

  useEffect(() => {
    aseguradoraService.getAll()
      .then(setAseguradoras)
  }, [])

  const deleteAseguradora = (id) => {
    const confirmResponse = confirm('Esta seguro que desea eliminar ese registro?')
    if (!confirmResponse) return 
    aseguradoraService.delete(id)
        .then(() => {
            setAseguradoras(aseguradoras => aseguradoras.filter(aseguradora => aseguradora.id !== id))
            toast({
                title: "Deleted",
                description: "Aseguradora deleted successfully",
                status: "success",
                duration: 90000000,
                isClosable: true,
            })
        })
  }

  const updateAseguradora = (body) => {
    aseguradoraService.update(aseguradora.id, body)
        .then(res => {
            if(res.status === 400) {
              return toast({
                title: 'Error',
                description: res.title,
                status: "error",
                duration: 9000,
                isClosable: true,
              })
            }
            setAseguradoras(res.data)
            toast({
                title: "Updated",
                description: "Book updated successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        })
  }

  const createAseguradora = (aseguradora) => {
    aseguradoraService.create(aseguradora)
        .then(res => {
            if(res.status === 400) {
              return toast({
                title: 'Error',
                description: res.title,
                status: "error",
                duration: 9000,
                isClosable: true,
              })
            }
            setAseguradoras(res.data)
            toast({
                title: "Added",
                description: "Added updated successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        })
  }

  const openModal = () => {
    setAseguradora({})
    onOpen()
  }

  return (
    <Container maxW='90%'>
      <Flex alignItems="center" justifyContent="space-between">
          <Text my="2" fontSize="2xl" id="title" fontFamily="monospace" fontWeight="bold">
              Aseguradoras
          </Text>
          <Button colorScheme='teal' id="newButton" variant='outline' onClick={openModal}>
              New
          </Button>
      </Flex>
      <AseguradoraModal
          aseguradora={aseguradora}
          createAseguradora={createAseguradora}
          updateAseguradora={updateAseguradora}
          isOpen={isOpen}
          onClose={onClose}
      />
      {
        !aseguradoras && <Spinner /> 
      }
      {
        aseguradoras && (
          <AseguradorasTable 
            aseguradoras={aseguradoras}
            setAseguradora={setAseguradora}
            deleteAseguradora={deleteAseguradora}
            onOpen={onOpen}
          />
        )
      }
    </Container>
  )
}

export default App
