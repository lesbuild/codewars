function kindOfDay(str){
    let weather = {"sunny": "Good day to go out!",
                   "rainy" : "Take an umbrella when going out or just sleep in" ,
                   "cloudy" : "Good day for a nature walk.",
                   "hot" : "Make sure to use sunblock or don't go out at all." };
    return weather[str.toLowerCase()]
}