/*
Parse HTTP response
Lets create mock API which returns some json response
API - https://run.mocky.io/v3/cfe66da2-cbe2-45a5-a060-22ec2f8d38d4
*/

import http from 'k6/http'
import { check } from 'k6'



export default function () {

    var url = 'https://run.mocky.io/v3/cfe66da2-cbe2-45a5-a060-22ec2f8d38d4'

    var headerParam = {
        headers:{
            'content-type' : 'application/json',
        }
    }

    const response = http.get(url, headerParam)

    //check response status of the API
    check(response, {
        'is status is 200: ': (res) => res.status === 200,
    })

    //Parse json response
    let body = JSON.parse(response.body)

    //print console
    console.log(`response body is ${JSON.stringify(body)}`)
    console.log(`messege is ${body.Message}`)

    //check the response body message
    check(response, {
        'Is reponse body message: ' : (res)=> JSON.parse(res.body).Message === "Data fetched successfully."
    })

}






