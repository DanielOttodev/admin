let baseUrl = 'http://localhost:3000'
// All API Routes - All routes pass in the OrgID  as a header param. Routes follow REST semantics and patterns
exports.routes = {
    // Org
    createNewOrg: `${baseUrl}/org`, 
    getOrg: `${baseUrl}/org`, //{ID}
    //Users
    listUsers: `${baseUrl}/users/list`,
    getUser: `${baseUrl}/users/`,
    addUser: `${baseUrl}/users`,
    editUser: `${baseUrl}/users`,
    // Services
    services: `${baseUrl}/services`
    
}