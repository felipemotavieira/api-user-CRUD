import users from "../database"

const isEmailRegisteredMiddleware = (request, response, next) => {
    const userAlreadyExists = users.find(user => user.email === request.body.email)

    if(userAlreadyExists){
        return response.status(400).json({message: "This email address is already being used"})
    }

    next()
}

export default isEmailRegisteredMiddleware