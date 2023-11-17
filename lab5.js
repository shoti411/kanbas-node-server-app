const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
};

const todos = [
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: true },
    { id: 4, title: "Task 4", completed: false },
];

const Lab5 = (app) => {
    
    app.get("/a5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
    });
    app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
    });

    app.get("/a5/welcome", (req, res) => {
        res.send("Welcome to Assignment 5 !!!!!!");
    });

    app.get("/a5/calculator", (req, res) => {
        const { a, b, operation } = req.query;
        let result = 0;
        switch (operation) {
          case "add":
            result = parseInt(a) + parseInt(b);
            break;
          case "subtract":
            result = parseInt(a) - parseInt(b);
            break;
          default:
            result = "Invalid operation";
        }
        res.send(result.toString());
      });

    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
      });
      app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
      })
      app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });
      app.get("/a5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = newScore;
        res.json(assignment);
      });  
      app.get("/a5/assignment/completed/:newCompleted", (req, res) => {
        const { newCompleted } = req.params;
        let newCompletedBool = false;
        if (newCompleted === 'true') {
            newCompletedBool = true;
        } else {
            newCompletedBool = false;
        }
        assignment.completed = newCompletedBool;
        res.json(assignment);
      });

    // http://localhost:3000/a5/todos?completed=true
    app.get("/a5/todos", (req, res) => {
      const { completed } = req.query;
      if (completed !== undefined) {
        const completedTodos = todos.filter(
          (t) => t.completed === (completed === "true"));
        res.json(completedTodos);
        return;
      }
  
        // const { completed, due, assignedTo } = req.query;

        // if (completed === undefined) {
        //   const completedTodos = todos.filter(
        //     (t) => t.completed === (completed === "true"));
        //   res.json(completedTodos);
        //   return;
        // }
    
        // if (completed === "true") {
        //     const completedTodos = todos.filter((todo) => todo.completed);
        //     res.json(completedTodos);
        //     return;
        // } else if (completed === "false") {
        //     const incompletedTodos = todos.filter((todo) => !todo.completed);
        //     res.json(incompletedTodos);
        //     return;
        // }
        res.json(todos);
    });

    app.get("/a5/todos/create", (req, res) => {
      const newTodo = {
        id: new Date().getTime(),
        title: "New Task",
        completed: false,
      };
      todos.push(newTodo);
      res.json(todos);
    });
  

    app.get("/a5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
      });

      app.get("/a5/todos/:id/title/:title", (req, res) => {
        const { id, title } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.title = title;
        res.json(todos);
      });

      app.get("/a5/todos/:id/completed/:completed", (req, res) => {
        const { id, completed } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        let completedBool = false;
        if (completed === "true") {
          completedBool = true;
        }
        todo.completed = completedBool;
        res.json(todos);
      });

    app.get("/a5/todos/:id/delete", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todos.splice(todos.indexOf(todo), 1);
        res.json(todos);
    });

    
};
export default Lab5;