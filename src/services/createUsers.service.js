import users from "../database"
import { v4 as uuidv4 } from 'uuid'
import { hash } from 'bcryptjs'

const createUserService = async (email, name, password, isAdm) => {
    

    const newUser = {
        email,
        name,
        isAdm,
        uuid: uuidv4(),
        password: await hash(password, 10),
        createdOn: Date(),
        updatedOn: Date()
        
    }

    users.push(newUser)

    return newUser
}

export default createUserService