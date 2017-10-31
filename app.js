//1. Get the express class
var express = require('express');
var path = require('path');

//2. Initiate and assign to an app object
var app = express();

//3. Tell express which view template we are going to use
app.set("view engine","ejs");

//3.1 Let us tell express the asset/resource folder where images, css, js reside
app.use(express.static(path.join(__dirname, 'public')));

//4. Which page to render when express '/' route is called
app.get("/",

    //call back function to be called when '/' route is called
    function(request,response)
    {
        //render the "home" view from ejs. note we are not explicitly specifying .ejs extension
        response.render("home",
            {
                //variable we will use in ejs template and its value..
                headline:"We believe every city has a shitty store to say"
            }
        );
    }
);

//5. Decide the port - let it be 8080
var port = process.env.PORT || process.env.VCAP_APP_PORT || 8080; 

//6. Start the server of express object to listen to port
var server = app.listen(port,
    function(request,response)
    {
        console.log("Catch the action at http://localhost:" + port);
    }
);