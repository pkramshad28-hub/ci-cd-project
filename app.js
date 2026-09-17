const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>CI/CD Pipeline Successfully Deployed!</h1>
        <p>Ramshad Pk</p>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
