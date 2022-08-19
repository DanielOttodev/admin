export const state = () => ({
    user: false,
  });
  
  export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
      console.log(authUser);
      if (authUser && authUser.emailVerified) {
        const { uid, email, displayName, emailVerified } = authUser;
        state.user = { uid, email, displayName, emailVerified };
        
      } else {
        state.user = false;
      }
    },
    CurrentOrg: (state, orgId ) => {
      state.user.orgId = orgId
    }

  };