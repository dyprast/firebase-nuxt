<template>
    <div class="login">
        <h3>Login</h3>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="text" placeholder="email@email." v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <button>Login</button>
        </form>
        <div class="error" v-if="error">
            {{ error.message }}
        </div>
    </div>
</template>

<script>
    import * as firebase from 'firebase/app'
    import 'firebase/auth'
    export default {
        data () {
            return {
                email: "",
                password: "",
                error: ""
            }
        },
        methods: {
            pressed() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data => {
                    this.$router.push("/secret")
                })
                .catch(err => {
                    this.error = err
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        margin-top: 50px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input {
        width: 400px;
        padding: 30px;
        margin: 20px;
        font-size: 21px;
    }
    button {
        width: 400px;
        height: 75px;
        font-size: 100%;
        margin: 20px;
    }
    .error {
        color: red;
    }
</style>