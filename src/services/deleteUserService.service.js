import users from "../database";

const deleteUserService = (id) => {

  const userIndex = users.findIndex((element) => element.uuid === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users.splice(userIndex, 1);

  return {message: "Usuário excluido"};
}

export default deleteUserService