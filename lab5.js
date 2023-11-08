const Lab5 = (app) => {
    app.get("/a5/add/:a/:b", (req, res) => {
        const {a, b} = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString()); // make sure to send as string because browser would interpret number as a status code - like 404 = not found
    });
    app.get("/a5/subtract/:a/:b", (req, res) => {
        const {a, b} = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
    });
    app.get("/a5/welcome", (req, res) => {
        res.send("Welcome to Assignment 5");
    });

    
};

export default Lab5;