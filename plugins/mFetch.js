export default (context,inject) => {
    inject('mFetch', async params => {
    let token = await context.$fire.auth.currentUser.getIdToken()
    const head = {
        clienttoken: token,
      //  orgId : context.$store.orgId
    }
    console.log(context);
    if(params.body) params.body = JSON.stringify(params.body);
    /*let _headers = {
        clienttoken: token,
        orgId : context.$store.state.orgId
    }*/
    if(params.method == 'GET'){
       console.log('HIT THE GET')
       console.log(head);
      /*  fetch(params.route,{
            method: params.Authorization_method,
            headers: {
             
            }
        }).then((x) => x.json()).then((result) => {
            return result
        }  
        )*/
    }
    else{
        console.log('NOT GET')
        /*
        fetch(route,{
            method : _method,
            body: _body,
            Authorization: auth
        }).then((x) => x.json()).then((result) => {
            return result
        })*/
    }
    
    });
}