// Create mock API for testing - Dummy API - from website https://designer.mocky.io/
// GET method, 200 ok response mock API - https://run.mocky.io/v3/b8bba7fa-9219-49ad-a3bf-a0d2f38c9b86

import http from 'k6/http'
import { check, fail } from 'k6'

export let options = {

}

// Main function where user will be spread
export default function () {
    //let response = http.get("https://run.mocky.io/v3/b8bba7fa-9219-49ad-a3bf-a0d2f38c9b86"); // 200 OK with no response body - body length 0

    let response = http.get("https://run.mocky.io/v3/2099eb9f-efb5-4f5e-b650-1578b1d9db36"); // 200 OK with response body

    //print logs

    // response body length is 0 here becuase we return nothing, no. of vitural user will print
    console.log(`response body length ${response.body.length} for VU = ${__VU} and ITER = ${__ITER}`);

    const checkOutput =

        check(response, {
            'is response status code 200 :': (response) => response.status === 200,
            //'body size is 0 bytes :': (response) => response.body.length == 0,
            'body size is 43 bytes :': (response) => response.body.length == 43,
        });

    if (!checkOutput) {
        fail('unexpected response or error')
    }

}






