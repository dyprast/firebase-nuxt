<template>
    <div>
        <h1>This is a secret info</h1>
    </div>
</template>

<script>
    import { getUserFromCookie } from "@/helpers"
    import * as firebase from "firebase/app"
    import "firebase/auth"
    import Cookies from "js-cookie"

    export default {
        asyncData({ req, redirect }) {
            if (process.server) {
                console.log(req)
                const user = getUserFromCookie(req)
                console.log(user)
                if(!user) {
                    redirect("/login")
                }
            }
            else {
                let user = firebase.auth().currentUser
                if (!user) {
                    redirect("/login")
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>