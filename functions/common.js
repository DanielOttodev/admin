
import {state} from "../store/index.js"

export async function mFetch(_body,_method,route,auth){
    // Common fetch used across the front-end which shares standard headers + auth methods.
    // Parses a JS object to post or get to the endpoint and returns a JSON response

    if(_body) _body = JSON.stringify(_body);
    if(_method == 'GET'){
        fetch(route,{
            method: _method,
            Authorization: auth
            
        }).then((x) => x.json()).then((result) => {
            return result
        }  
        )
    }
    else{
        fetch(route,{
            method : _method,
            body: _body,
            Authorization: auth
        }).then((x) => x.json()).then((result) => {
            return result
        })
    }

}
