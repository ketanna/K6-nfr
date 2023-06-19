// write in java script
// call google.com
// when 10 no. of user call google.com
// call means get - http.get

import http from 'k6/http'

//No need to send configuration at runtime, we can define like below and export
export let options = {
    //Declare configuration
    stages: [
        { duration: '1s', target: 5 }, // 5 users for 10 sec
        { duration: '20s', target: 20 }, // again 3 users for 20 sec
        { duration: '10s', target: 0 } // again 0 users for 20 sec
    ]
}

// Main function where user will be spread
export default function () {
    http.get("https://www.google.com/");
    http.get("https://www.wikipedia.org/");
}


