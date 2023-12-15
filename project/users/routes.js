import * as dao from "./dao.js";

function ProjectUserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/project/api/users", createUser);
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    const currentUser = await dao.findUserById(userId);
    req.session['currentUser'] = currentUser;
    res.json(status);
  };


  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(
      req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  };


  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session['currentUser'] = currentUser;
      res.json(currentUser);
    } else {
      res.status(400).json(
        { message: "No user found" });
    }
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };


  const account = async (req, res) => {
    res.json(req.session['currentUser']);
  };


  app.post("/project/api/users", createUser);
  app.get("/project/api/users", findAllUsers);
  app.get("/project/api/users/:userId", findUserById);
  app.put("/project/api/users/:userId", updateUser);
  app.delete("/project/api/users/:userId", deleteUser);
  app.post("/project/api/users/signup", signup);
  app.post("/project/api/users/signin", signin);
  app.post("/project/api/users/signout", signout);
  app.post("/project/api/users/account", account);
}
export default ProjectUserRoutes;

