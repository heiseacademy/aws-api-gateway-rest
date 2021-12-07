exports.handler = async (event) => { 
    console.log("request: " + JSON.stringify(event));

    const responseBody = {
        message: "Echo Antwort",
        received: event
    };

    console.log("response: " + JSON.stringify(responseBody))
    return responseBody;
}