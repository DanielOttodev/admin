export const state = () => ({
    user: false,
    orgId: null
  });
  
  export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
      console.log(authUser);
      if (authUser && authUser.emailVerified) {
        const { uid, email, displayName, emailVerified } = authUser;
        state.user = { uid, email, displayName, emailVerified };
        console.log('STATECHANGE:', state);
        
      } else {
        state.user = false;
      }
    },
    CurrentOrg: (state, orgId ) => {
      console.log('ORG:', orgId)
      state.orgId = orgId
      console.log('CURRENTORG:',state)
    }

  };

  