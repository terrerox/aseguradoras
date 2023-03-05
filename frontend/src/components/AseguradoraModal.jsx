import React, { useState, useEffect } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast
} from '@chakra-ui/react'
import { AseguradoraForm } from './AseguradoraForm'
import { useForm } from '../hooks/useForm'

export const AseguradoraModal = ({ aseguradora, createAseguradora, updateAseguradora, isOpen, onClose }) => {
    const toast = useToast()
    
    const [formValues, handleInputChange, setValues] = useForm({
        nombre: "",
        comision: "",
        estado: 0,
    })

    useEffect(() => {
        setValues({
            nombre: aseguradora.nombre || "",
            comision: aseguradora.comision || "",
            estado: aseguradora.estado ?? 0,
        })
    }, [aseguradora])

    const { nombre, comision, estado } = formValues


    const handleSubmit = async e => {
        e.preventDefault()
        if(comision > 0.25) {
            return toast({
                title: "Error",
                description: "la comisión no debe ser mayor a 25%",
                status: "error",
                duration: 90000000,
                isClosable: true,
            })
        }
        if (nombre === "" || comision === 0 || estado === 0) {
            return toast({
                title: "Error",
                description: "Please, complete all the inputs",
                status: "error",
                duration: 90000000,
                isClosable: true,
            })
        }

        if (aseguradora.id) {
            return updateAseguradora(formValues)
        } 

        createAseguradora(formValues)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    { aseguradora.id ? 'Update aseguradora' : 'Create aseguradora' }
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <AseguradoraForm
                        formValues={formValues}
                        handleInputChange={handleInputChange}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cerrar
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        id="enviarForm"
                        colorScheme='teal'
                    >
                        { aseguradora.id ? 'Update aseguradora' : 'Create aseguradora' }
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}