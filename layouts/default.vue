<template>
  <div>
      <div class="main">
          <div class="main-links">
              <nuxt-link to="/">Home Page</nuxt-link>|
              <div @click="logout" v-if="loggedIn" class="logout-link">Logout</div>
              <nuxt-link to="login" v-else>Login</nuxt-link>|
              <nuxt-link to="secret">Secret</nuxt-link>|
          </div>
      </div>
    <Nuxt />
  </div>
</template>

<script>
    import * as firebase from "firebase/app"
    import "firebase/auth"
    import Cookies from "js-cookie"

    export default {
        mounted() {
            this.setupFirebase()
        },
        data () {
            return {
                loggedIn: false
            }
        },
        methods: {
            setupFirebase() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.loggedIn = true
                        firebase
                            .auth()
                            .currentUser.getIdToken(true)
                            .then(token => {
                                Cookies.set("access_token", token)
                            })
                    }
                    else {
                        this.loggedIn = false
                        Cookies.remove("access_token")
                    }
                })
            },
            logout() {
                firebase.auth().signOut().then(() => {
                    this.$router.push("/")
                })
            },
        }
    }
</script>

<style>
.logout-link {
    cursor: pointer;
    text-decoration: underline;
    color: #35495e;
}
.main {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.main-links {
    width: 30%;
    margin: 10px 20px;
    display: flex;
    justify-content: space-around;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
