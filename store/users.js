// State for the users page
export const state = () => ({
    user: false,
  
  });

  export const mutations = {
    setUser : (state,user) => {
        state.user = user
        console.log('STATE USER:',state.user);
    }

  }