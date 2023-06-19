// write in java script
// call google.com
// when 10 no. of user call google.com
// call means get - http.get

import http from 'k6/http'

//No need to send configuration at runtime, we can define like below and export
export let options = {
    //Declare configuration
    vus: 10,
    duration: '10s'  // 1m2s  - example for minutes, seconds
}

// Main function where user will be spread
export default function () {
    http.get("https://www.google.com/");
}


