//Erika Kohl - ekohl@umich.edu

function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.display = "block";

    //Set default location if one isn't provided
    var location = document.querySelector("#location").value;
    
    if(document.querySelector("#location").value == ""){
        //"Use “Ann Arbor” as the default value, not “Ann Arbor, US”"
        location = "Ann Arbor"
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
    var degrees;
    
    if(document.querySelector("#celcius").checked == true){
        format = "metric"
        degrees = "Celsius"
    } 
    else if(document.querySelector("#fahrenheit").checked == true){
        format = "imperial"
        degrees = "Fahrenheit"
    }
    else{
        format = "imperial"
        degrees = "Fahrenheit"
    };

    // Your code here.
    console.log("Format is:  " + format + " / " + degrees);

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
        country = json.sys.country;
        document.querySelector("#loc").innerHTML = loc;
        console.log("loc: " + loc + ", " + country);

        temp = json.main.temp;
        document.querySelector("#temp").innerHTML = temp;
        console.log("temp: " + temp);
            
        tempImg = json.weather[0].icon;
        document.querySelector("#tempImg").src = ("https://openweathermap.org/img/wn/" + tempImg + "@2x.png")
        console.log("tempImg: " + tempImg);

        //"Add alternate text for accessibility"
        description = json.weather[0].description;
        document.querySelector("#tempImg").alt = description;
        document.querySelector("#tempImg").title = description;
        console.log("alt text: " + description);
        
    });
};