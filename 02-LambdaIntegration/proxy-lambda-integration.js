exports.handler = async (event) => { 
    console.log("request: " + JSON.stringify(event));

    const responseBody = {
        message: "Echo Antwort",
        received: event
    };

    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "Mein spezieller Header"
        },
        body: JSON.stringify(responseBody)
    };
    
    console.log("response: " + JSON.stringify(response))
    return response;
}