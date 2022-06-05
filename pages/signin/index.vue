<template>
    <div class="container container-xl">
        <form class="form" @submit.prevent="handleUserLogin">
            <p>Welcome back</p>
            <h1>Login to your account</h1>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" placeholder="john.doe@gmail.com" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" required>
            </div>
            <div class="form-group">
                <nuxt-link class="forgot" to="/forgot-password">Forgot password?</nuxt-link>
            </div>
            <div class="form-group">
                <button class="login" type="submit">Login</button>
            </div>
            <div class="form-group">
                <p>Don't have an account? <nuxt-link to="/signup">Sign up for free</nuxt-link></p>
            </div>
            <div v-if="userNotFound" class="form-group">
                <p class="error-text">User with {{ email }} is not found</p>
            </div>
        </form>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default {
    data() {
        return {
            email: "",
            password: "",
            userNotFound: false,
        }
    },
    methods: {
        handleUserLogin() {
            if(this.email && this.password) {
                const auth = getAuth()
                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then(userCredential => {
                        this.$router.push({name: 'index'})
                    })
                    .catch(() => {
                        this.userNotFound = true
                    })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    place-items: center;
    margin: 0 auto;
    height: 82.8vh;

    .form {
        background-color: #fff;
        padding: 3rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

        p {
            color: #023047;
            margin-bottom: -0.5rem;
            font-size: 16px;
        }

        h1 {
            color: #023047;
            font-size: 30px;
            margin-bottom: 1rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;

            label {
                color: #023047;
                margin-bottom: 0.3rem;
            }

            input {
                padding: 0.8rem 1rem;
                border-radius: 5px;
                border: 1px solid #ededed;
                margin-bottom: 0.5rem;
                outline: none;
            }

            input:focus {
                border: 1px solid #023047;
            }

            .error {
                border: 1px solid red;
            }

            .error-text {
                font-size: 12px;
                color: red;
            }

            .forgot {
                align-self: flex-end;
                color: #34AFF9;
                font-size: 14px;
                font-weight: 500;
                margin: 0.5rem 0;
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: #023047;
                }
            }

            .login {
                padding: 0.5rem 0;
                border-radius: 5px;
                margin-top: 0.5rem;
                text-align: center;
                background-color: #023047;
                color: #fff;
                font-weight: 400;
                font-size: 16px;
                border: 1px solid #ededed;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                // &:hover {
                //     color: #023047;
                //     background: #7FB5FF;
                // }
            }

            p {
                text-align: center;
                margin-top: 1rem;
                font-size: 14px;

                a {
                    color: #34AFF9;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                    color: #023047;
                }
                }
            }
        }
    }
}
</style>
