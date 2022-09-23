export default (context,inject) => {
    inject('mFetch', async params => {
    let token = await context.$fire.auth.currentUser.getIdToken()
    console.log(`${params.method} ${params.route}`)
    const head = {
        clienttoken: token,
       orgId : localStorage.getItem('orgID')
    }
    console.log(context);
    if(params.body) params.body = JSON.stringify(params.body);
    /*let _headers = {
        clienttoken: token,
        orgId : context.$store.state.orgId
    }*/
    if(params.method == 'GET'){
    
       console.log(head);
      let res =  fetch(params.route,{
            method: params.Authorization_method,
            headers: head           
        }).then((x) => x.json()).then((result) => {
            return result
        }  
        )
        return res;
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