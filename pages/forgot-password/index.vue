<template>
    <div class="container container-xl">
        <form class="form" @submit.prevent="handleResetPassword">
            <h1>Forgot Password</h1>
            <p>Don't worry! It happens. Please enter the address <br>
               associated with your account.
            </p>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" placeholder="john.doe@gmail.com" required>
            </div>
            <div class="form-group">
                <button class="reset-password" type="submit">Reset password</button>
            </div>
            <div class="form-group">
                <nuxt-link to="/signin">Back to log in</nuxt-link>
            </div>
            <div v-if="isSentEmail" class="form-group">
                <p>We've reset your password!</p>
                <p>Check your email for a reset link.</p>
                <p>(check your spam folder as well).</p>
            </div>
            <div v-if="isUserEmailFound" class="form-group">
                <p>User is not found.</p>
            </div>
        </form>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth"

export default {
    data() {
        return {
            email: "",
            isSentEmail: false,
            isUserEmailFound: false,
        }
    },
    methods: {
        handleResetPassword() {
            if(this.email) {
                const auth = getAuth()
                sendPasswordResetEmail(auth, this.email)
                .then(() => {
                    this.isSentEmail = true
                })
                .catch(() => {
                    this.isUserEmailFound = true
                })
                this.email = ""
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

        h1 {
            color: #023047;
            font-size: 30px;
        }

        p {
            color: #023047;
            margin: 0.5rem 0;
            font-size: 14px;
            opacity: 0.7;
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

            .reset-password {
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

                &:hover {
                    opacity: 0.9;
                }
            }

            a {
                text-align: center;
                margin-top: 1rem;
                font-size: 14px;
                color: #34AFF9;
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: #023047;
                }
            }


            p {
                text-align: center;
                margin-bottom: -0.5rem;
            }
        }
    }
}
</style>