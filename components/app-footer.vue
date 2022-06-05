<template>
    <div class="wrapper">
        <div class="container container-xl">
            <p>Copyright &copy; 2022 All Rights Reserved by TinderFire</p>
            <div class="icon-container">
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'home']"/>
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'font-awesome']" />
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'home']"/>
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'font-awesome']" />
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    background-color: #7FB5FF;
    color: #fff;
    padding: 15px 0;
    position: absolute;
    bottom: 0;
    width: 100%;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        p {
            font-size: 14px;
        }

        .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                margin-left: 0.7rem;

                svg {
                    color: #fff;
                    background-color: #33353d;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 20px;
                    height: 20px;
                    padding: 0.6rem;
                    border-radius: 100%;
                    transition: all 0.3s ease-in-out;
                }

                &:hover svg {
                    background-color:#3366cc;
                    color: #33353d;
                }
            }
        }
    }
}
</style>