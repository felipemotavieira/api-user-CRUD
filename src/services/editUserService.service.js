import users from "../database"

const editUserService = (id, user) => {
    const userIndex = users.findIndex(user => user.uuid == id)

    if(userIndex === -1){
        throw new Error('User not found')
    }

    users[userIndex] = { ...users[userIndex], ...user }

    return users[userIndex]
}

export default editUserService