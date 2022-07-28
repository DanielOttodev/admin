export default function ({ store, redirect }) {
    console.log('in middleware')
    console.log(store.state.user)
    if (!store.state.user) {
// If no user in state, redirect.
      redirect("/login");
      
    }
  }