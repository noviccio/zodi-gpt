const PORT = 8000; //runs backend on port 8000
const express = require('express'); //alerts for middleware 
const cors = require('cors');
const app = express();
app.use(express.json()); //allows json to be used when sending from backend to frontend with post requests. 
app.use(cors()); 

//insert api key
const API_KEY = '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'

//make express root. Parameters will be the route, requests and response
app.post('/completions', async(req,res) => {

    //create object that holds configuration data for making an API request
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`, 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ //request body
            model : "gpt-3.5-turbo",
            messages: [{role: "user", content: "how are you?"}],
            max_tokens: 100, 
        })
    }
    //use try and catch to handle potental errors during the async operations
    try {
        //fetch to the completions API from OpenAPI
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)

    } catch (error){
        console.error(error) 
    }
})

//test to see if server is running
app.listen(PORT, ()  =>  console.log('Your server is running on PORT ' + PORT)); 