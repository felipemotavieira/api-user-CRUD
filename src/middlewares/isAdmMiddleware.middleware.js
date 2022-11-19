const isAdmMiddleware = (request, response, next) => {
    const isAdm = request.user.isAdm
    const userId = request.user.uuid
    const params = request.params.id

    if(params){
        if(userId !== params){
            if(!isAdm){
                return response.status(401).json({
                    message: "User unauthorized1"
                })
            }
        }
    }

    if(!params){
        if(!isAdm){
            console.log(typeof isAdm)
            return response.status(401).json({
                message: "User unauthorized2"
            })
        }   
    }

    next()
}

export default isAdmMiddleware