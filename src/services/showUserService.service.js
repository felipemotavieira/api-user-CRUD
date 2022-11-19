import users from "../database";

const showUserService = (uuid) => {

    const user = users.find(user => user.uuid === uuid)

    if(!user){
        throw new Error("User not found")
    }

    return user
}

export default showUserService