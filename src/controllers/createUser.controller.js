import createUsersService from "../services/createUsers.service"

const createUsersController = async (request, response) => {
    const {email, name, password, isAdm} = request.body

    const user = await createUsersService(email, name, password, isAdm) 

    const {uuid, createdOn, updatedOn} = user

    const returnUser = {email, name, isAdm, uuid, createdOn, updatedOn}

    return response.status(201).json(returnUser)
}

export default createUsersController