<template>
    <div class="contianer container-xl">
        <form class="form" @submit.prevent="handleCreateUser">
            <p>Welcome to Tinder</p>
            <h1>Sign up as a user</h1>
            <div class="form-group">
                <label for="fullName">Full Name</label>
                <input v-model="fullName" type="text" placeholder="Enter your full name">
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" placeholder="Enter your username">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" placeholder="Enter your email address">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" placeholder="Enter your password">
            </div>
            <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input v-model="dateOfBirth" type="date">
            </div>
            <div class="form-group">
                <button class="submit">Submit</button>
            </div>
            <div class="form-group">
                <p class="sign-in">Already have an account? <nuxt-link class="sign-in" to="/signin">Sign in</nuxt-link></p>
            </div>
        </form>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default {
    data() {
        return {
            fullName: "",
            username: "",
            email: "",
            password: "",
            dateOfBirth: "",
        }
    },
    methods: {
        handleCreateUser() {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    this.$router.push({name: 'index'})
                })
                .catch(() => {
                    console.log('Unable to create user')
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.contianer {
    display: grid;
    place-items: center;
    margin: 0 auto;
    height: 82.8vh;

    .form {
        background-color: #fff;
        padding: 2rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

        p {
            color: #023047;
            margin-bottom: -0.5rem;
            font-size: 13px;
            padding-right: 5rem;
        }

        h1 {
            color: #023047;
            font-size: 30px;
            margin-bottom: 0.5rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;

            label {
                color: #023047;
                margin-bottom: 0.2rem;
                font-size: 13px;
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

            .submit {
                padding: 0.5rem 0;
                border-radius: 5px;
                margin-top: 0.5rem;
                text-align: center;
                background-color: #023047;
                color: #fff;
                font-weight: 400;
                font-size: 16px;
                border: 1px solid #ededed;

                &:hover {
                    opacity: 0.9;
                }
            }

            p {
                font-size: 14px;
                margin-top: 0.6rem;
            }
        }
    }
}
</style>
