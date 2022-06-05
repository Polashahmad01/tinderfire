<template>
    <div class="wrapper">
        <div class="container-xl">
            <h1><nuxt-link to="/">TinderFire</nuxt-link></h1>
            <ul v-if="!user">
                <li>
                    <nuxt-link to="/signin">Sign in</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/signup">Sign up</nuxt-link>
                </li>
            </ul>
            <ul v-if="user">
                <li>
                    <nuxt-link to="#">Profile</nuxt-link>
                </li>
                <li>
                    <button @click="handleUserSignOut">Log out</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
import { getAuth, signOut } from "firebase/auth"

export default {
    data() {
        return {

        }
    },
    computed: mapState({
        user: state => state.user
    }),
    methods: {
        handleUserSignOut() {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    this.$router.push({ name: 'signin'})
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    background-color: #7FB5FF;
    color: #fff;
    padding: 15px 0;
    -webkit-box-shadow: 0 3px 5px rgba(127, 181, 255, 0.2);
    -moz-box-shadow: 0 3px 5px rgba(127, 181, 255, 0.2);
    box-shadow: 0 3px 5px rgba(127, 181, 255, 0.2);

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        h1 {
            font-size: 1.4rem;
            font-weight: 700;

            a {
                color: #fff;
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: #33353d;
                }
            }
        }

        ul {
            display: flex;
            align-items: center;

            li {
                a {
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 500;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        color: #33353d;
                    }
                }

                button {
                    border: none;
                    background: none;
                    cursor: pointer;
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 500;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        color: #33353d;
                    }
                }
            }

            li:first-child {
                list-style: none;
                margin-right: 2rem;
            }
        }
    }
}
</style>