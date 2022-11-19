import jwt from "jsonwebtoken"
import "dotenv/config"

const decodeIsAdmMiddleware = (request, response, next) => {
    let token = request.headers.authorization

    if(token){
        token = token.split(" ")[1]
    }
    
    if(!token){
        return response.status(401).json({
            message: "Missing authorization token"
        })
    }


    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if(error){
            return response.status(403).json({
                message: "Unauthorized"
            })
        }

        request.user = {
            uuid: decoded.sub,
            isAdm: decoded.isAdm
        }
        next()
    })
}

export default decodeIsAdmMiddleware