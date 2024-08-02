const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/get-req", (req, res) => {
    res.json({
        "status": "success",
        "message": "Data stored successfully"
    })
})

app.post('/post-req', (req, res) => {
    const {jsondata} = req.body;
    if(jsondata)
    {
        res.json({ message: `Data received successfully: ${jsondata}` });
    }
    else{
        res.json({message: "No Data received. Please send JSON Data in the Request Body"})
    }
    
});
app.listen(port)