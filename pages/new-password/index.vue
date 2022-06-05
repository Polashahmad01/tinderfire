<template>
    <div class="container container-xl">
        <form class="form" @submit.prevent="handleNewPasswordReset">
            <h1>New password</h1>
            <div class="form-group">
                <label for="newpassword">New password</label>
                <input v-model="password" type="password" required>
            </div>
            <div class="form-group">
                <label for="newpasswordagain">New password again</label>
                <input v-model="confirmPassword" type="password" required>
            </div>
            <div class="form-group">
                <button class="reset-password">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
import { getAuth, confirmPasswordReset } from "firebase/auth"


export default {
    data() {
        return {
            password: "",
            confirmPassword: "",
        }
    },
    methods: {
        handleNewPasswordReset() {
            if(this.password && this.confirmPassword) {
               const auth = getAuth()
               const code = this.$route.query.oobCode
               confirmPasswordReset(auth, code, this.confirmPassword)
                .then(() => {
                    console.log('New password has been set')
                    this.$router.push({name: 'signin'})
                })
                .catch(() => {
                    console.log('There is an error.')
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

        h1 {
            color: #023047;
            font-size: 30px;
            padding-right: 5rem;
            margin-bottom: 0.5rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

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
    }
}
</style>