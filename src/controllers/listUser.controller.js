import listUsersService from "../services/listUsers.service"

const listUseersController = (request, response) => {
    const userList = listUsersService()

    return response.json(userList)
}

export default listUseersController