<template>


    <v-sheet class="bgimg">

        <ul class="pa-5" color=""
            style="display:flex;  justify-content:center; list-style: none; background-color:#f5f5f5;">

            <li>
                <v-btn text color=" primary">
                    Home
                </v-btn>
            </li>
            <li>
                <v-btn @click="toLogin" text color="grey">Login <v-icon right>mdi-account-circle</v-icon>
                </v-btn>
            </li>
        </ul>
        <v-container fluid>
            <v-row class="mt-5 mb-0" justify="end">

            </v-row>
        </v-container>
        <div v-if="!success">
            <SignUp1 @selected="serviceSelected" v-if="selectService == ''" />


            <SignUp2 @selected="staffSelected" v-if="selectService != '' && selectStaff == ''" />


            <SignUp3 :wait="loading" @createNew="createNewOrgUser" v-if="selectStaff != '' && selectService != ''" />
        </div>

        <SignUpSuccess v-if="success" />


    </v-sheet>

</template>

<script>
import SignUp2 from "../components/SignUp2.vue";
import { routes } from '../routes'
import { firebase } from '@nuxtjs/firebase'
import SignUpSuccess from "../components/SignUpSuccess.vue";

export default {
    layout: "login",
    data: () => ({
        user: "",
        pass: "",
        loading: false,
        error: false,
        errmessage: "",
        selectService: "",
        selectStaff: "",
        success: false
    }),
    methods: {
        toLogin() {
            this.$router.push("/login");
        },
        async createUser(usr) {
            const createUser = usr
            try {
                this.loading = true;
                const newUser = await this.$fire.auth.createUserWithEmailAndPassword(createUser.email.trim(), createUser.pass).then((fbUser) => {
                    if (fbUser) {
                        console.log('USER', fbUser.user);
                        this.$fire.auth.currentUser.sendEmailVerification();
                        return fbUser
                    } else {
                        console.log('No User')
                    }


                });
                this.loading = false;
                return newUser
            }
            catch (e) {
                this.loading = false;
                console.log(e);
                alert(e);
                return false
            }
        },

        serviceSelected(e) {
            this.selectService = e;
        },
        staffSelected(e) {
            this.selectStaff = e;
        },
        async createNewOrgUser(e) {
            try {
                e.serviceType = this.selectService
                e.staffLimit = this.selectStaff
                const userCreated = await this.createUser(e)
                console.log(userCreated);
                if (userCreated) {
                    e.uid = userCreated.user.uid
                    // Successfully created the user and received the object back from FB - 
                    fetch(routes.createNewOrg, {
                        method: 'POST',
                        headers: {
                            authorization: '',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(e)
                    }).then(res => res.json()).then((x) => {
                        this.success = true
                    })
                }
                else {
                    // Error creating user
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    components: { SignUp2, SignUpSuccess }
}
</script>

<style >
.bgimg {

    width: 100vw;
    height: 100vh;
}

.card {
    width: 800px;
    background-image: url('~@/assets/bg2.png');
    background-size: 50%;

}
</style>
<style>
</style>