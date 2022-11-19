import editUserService from "../services/editUserService.service"

const editUserController = (request, response) => {
    try {
        const uuid = request.params.id
        const updatedOn = Date()
        const user = {...request.body, updatedOn}        

        const updatedUser = editUserService(uuid, user)

        const { createdOn, email, name, isAdm } = updatedUser

        const returnUser = {email, name, isAdm, uuid, createdOn, updatedOn}

        return response.json(returnUser)
        
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default editUserController