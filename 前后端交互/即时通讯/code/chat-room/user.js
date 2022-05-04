const users = [];
module.exports = {
  addUser(id, username, room) {
    users.push({
      id,
      username,
      room,
    });
  },

  findUserById(id) {
    return users.find((user) => user.id === id);
  },
};
