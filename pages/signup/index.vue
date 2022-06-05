<template>
    <div class="container container-xl">
        <form class="form">
            <p>Welcome to TinderFire</p>
            <h1>Choose a user type</h1>
            <div class="form-group">
                <nuxt-link to="signup/user">Sign up as a user</nuxt-link>
            </div>
            <div class="divide">
                <p>or</p>
            </div>
            <div class="form-group">
                <nuxt-link to="/signup/content-creator">Sign up as a content creator</nuxt-link>
            </div>
            <div class="divide">
                <p class="sign-in">Already have an account? <nuxt-link class="sign-in" to="/">Sign in</nuxt-link></p>
            </div>
        </form>
    </div>
</template>

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

            a {
                border: 1px solid #ededed;
                width: 100%;
                text-align: center;
                border-radius: 5px;
                padding: 0.8rem 1rem;
                color: #34AFF9;
                font-weight: 400;
                margin-bottom: 0.7rem;

                &:hover {
                    border: 1px solid #023047;
                    color: #023047;
                }
            }

            .sign-in {
                width: none;
                padding: 0;
                border: none;

                &:hover {
                    border: none;
                }
            }
        }

        .divide {
            display: flex;
            justify-content: center;

            p {
                margin-bottom: 0.7rem;
                color: #023047;
                align-self: center;
            }

            p {
                font-size: 14px;
                text-align: center;
            }
        }
    }
}
</style>