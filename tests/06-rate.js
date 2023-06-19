/*
Checks will not fail the whole load tests suite, so we will use rate along with checks
Condition:
Fail the load tests if more than 20% of results are failed
less than 20% is allowed
*/

import http from 'k6/http'
import { check } from 'k6'
import { Rate } from 'k6/metrics'



export let myErrorRate = new Rate('error_rate')


export let options = {
    thresholds: {
        error_rate: ['rate < 0.2'] // 20% of error are allowed, else throw error threshold have breached
    }
}

//ALT + Shift + F --> Format code
// Main function where user will be spread
export default function () {

    let response = http.get("https://run.mocky.io/v3/2099eb9f-efb5-4f5e-b650-1578b1d9db36"); // 200 OK with response body

    console.log(`response body length ${response.body.length} for VU = ${__VU} and ITER = ${__ITER}`);// virtual user

    //PASSED response
    const checkOutput1 =
        check(response, {
            'is response status code 200 :': (response) => response.status === 200,
        });

    myErrorRate.add(!checkOutput1);

    //FAILED Response
    const checkOutput2 =
        check(response, {
            'body size is 43 bytes :': (response) => response.body.length == 12,
        });

    myErrorRate.add(!checkOutput2);


}






