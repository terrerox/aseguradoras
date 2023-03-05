import { httpClient, FETCH_OPTIONS } from "../helpers"

const aseguradoraService = {}

aseguradoraService.getAll = () => {
    return httpClient('/aseguradora', FETCH_OPTIONS.GET())
        .then(res => res.json())
        .then(res => res.data)
}

aseguradoraService.getById = (id) => {
    return httpClient(`/aseguradora/${id}`,FETCH_OPTIONS.GET())
        .then(res => res.json())
}

aseguradoraService.create = (body) => {
    const postBody = {
        nombre: body.nombre,
        comision: +body.comision,
        estado: eval(body.estado)
    }
    return httpClient('/aseguradora', FETCH_OPTIONS.POST(postBody))
        .then(res => res.json())
}

aseguradoraService.update = (id, body) => {
    const updateBody = {
        id,
        nombre: body.nombre,
        comision: +body.comision,
        estado: eval(body.estado)
    }
    return httpClient(`/aseguradora`, FETCH_OPTIONS.PUT(updateBody))
        .then(res => res.json())
}

aseguradoraService.delete = (id) => {
    return httpClient(`/aseguradora/${id}`, FETCH_OPTIONS.DELETE())
    .catch(error => error)
}

export default aseguradoraService 