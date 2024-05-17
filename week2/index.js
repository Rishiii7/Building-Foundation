const express = require("express");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const port = 3000;

// single user
let user = [{
    name: 'John',
    age: 30,
    kidney : [{
        healthy : false
    }, {
        healthy : true
    }]
}]

// get the no of kidneys and health of each kidney
app.get("/", (req, res) => {
    const kidneys = user[0].kidney;
    const numberOfKidney = kidneys.length ;
    // for(let i=0 ; i<kidneys.length; i++){
    //     console.log(typeof kidneys[i].healthy);
    // }
    // console.log(kidneys);
    const healthyKidneys = kidneys.filter(kidney => kidney.healthy === true).length;

    res.send({
        kidneys,
        numberOfKidney,
        healthyKidneys
    })
});

// add kidney to the user using post method
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy ;
    // console.log(typeof isHealthy);
    user[0].kidney.push({
        healthy : isHealthy
    });

    res.send("Done !");
})

// put request for kidney
app.put("/", (req, res) => {
    for(let i=0;i<user[0].kidney.length; i++){
        user[0].kidney[i].healthy = true;
    }

    res.send("Done with updateing");
})

//delete request to remove all unhealthy kidney
app.delete("/", (req, res) => {
    const kidneys = user[0].kidney
    let status_code = 200
    let mesaage = "";
    if(kidneys.filter(kidney => kidney.healthy === false).length != 0){
        user[0].kidney = user[0].kidney.filter(kidney => kidney.healthy === true);
        mesaage = "Removed Unhealthy";
    }
    else{
        mesaage = " No kidney to be removed";
        status_code = 411;

    }
    
    res.send({
        message : mesaage,
        status_code : status_code
    });
});

// listening on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})