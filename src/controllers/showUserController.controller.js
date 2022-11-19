import showUserService from "../services/showUserService.service"

const showUserController = (request, response) => {
    const { uuid } = request.user

    const showUser = showUserService(uuid)

    const {name, email, isAdm, createdOn, updatedOn} = showUser

    const returnUser = {email, name, isAdm, uuid, createdOn, updatedOn}

    return response.json(returnUser)
}

export default showUserController