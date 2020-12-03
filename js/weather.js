function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.display = "block";

    //Set default location if one isn't provided
    var location = document.querySelector("#location").value;
    
    if(document.querySelector("#location").value == ""){
        //location == document.querySelector("#location").value == "Ann Arbor"
        location = "Ann Arbor"
        console.log("Defaulting to Ann Arbor");
    }
    else{
        location = document.querySelector("#location").value
    };

    // Your code here
    //display the location
    document.querySelector("#loc").innerHTML = location;

    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    var format;
    
    if(document.querySelector("#celcius").checked == true){
        format = "metric"
    } 
    else if(document.querySelector("#fahrenheit").checked == true){
        format = "imperial"
    }
    else{
        format = "imperial"
    };

    // Your code here.
    console.log("Format is:  " + format);

    //set the query  
    let query;
    // Your code here. 
    let API_key; 
    
    API_key = "2e5f225adc80be13df0c43772de2a7eb";
    
    //query = "api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid=" + API_key;
    query = "https://api.openweathermap.org/data/2.5/weather?q="+ location + "&appid=" + API_key + "&units=" + format;
    
    console.log("Query is:" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console

        //console.log(json[0]);
        //document.write(JSON.stringify(json));

        // Your code here.
        
        //view as string 
        console.log(JSON.stringify(json)); 
        //view as object
        console.log(json) 

        loc = json.name;
        document.querySelector("#loc").innerHTML = loc;
        console.log("loc: " + loc);

        temp = json.main.temp;
        document.querySelector("#temp").innerHTML = temp;
        console.log("temp: " + temp);
            
        tempImg = json.weather[0].icon;
        document.querySelector("#tempImg").src = ("https://openweathermap.org/img/wn/" + tempImg + "@2x.png")
        console.log("tempImg: " + tempImg);
        
    });
};