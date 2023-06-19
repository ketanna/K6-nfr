// write in java script
// call google.com
// when 10 no. of user call google.com
// call means get - http.get

import http from 'k6/http'

// Main function where user will be spread
export default function () {
    http.get("https://www.google.com/");
}

// Let's execute test with 1 virtual user using command -  k6 run .\tests\01-script.js
// for 10 virtual user using command -  k6 run --vus 10 --duration 10s .\tests\01-script.js
