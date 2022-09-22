export default (context,inject) => {
    inject('mFetch', async params => {
    let token = await context.$fire.auth.currentUser.getIdToken()
    console.log(token);
    /*if(params._body) params_body = JSON.stringify(params._body);
    if(params._method == 'GET'){
        fetch(params.route,{
            method: params.Authorization_method,
            headers: {
             
            }
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
    }*/
    });
}