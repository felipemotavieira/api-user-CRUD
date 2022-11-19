import createSessionService from "../services/createSessionService.service"

const createSessionController = async (request, response) => {
    try {
        const {email, password} = request.body
        const token = await createSessionService(email,password)
        return response.json({token})
    } catch (error) {
        return response.status(401).json({
            message: error.message
        })
    }
}

export {createSessionController}