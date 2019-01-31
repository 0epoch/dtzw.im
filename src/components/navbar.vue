<template>
    <section class="dt-head">
        <nav class="container">
            <!-- <div class="navbar-brand">
                <a
                    class=""
                    href="https://bulma.io"
                >
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                    >
                </a>

                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div> -->
            <div class="dt-nav">
                <div class="dt-menu">
                    <!-- <div class="dt-menu-item"> -->
                        <img
                            src="../assets/logo.jpg"
                            alt=""
                            class="logo dt-menu-item"
                        >

                    <!-- </div> -->
                    <!-- <div class="dt-menu-item"> -->
                    <router-link
                        to="/"
                        class="dt-menu-item"
                    >首页</router-link>
                    <!-- </div> -->
                    <!-- <div class="dt-menu-item"> -->
                    <router-link
                        to="/meme"
                        class="dt-menu-item"
                    >发表斗图</router-link>
                    <!-- </div> -->
                    <!-- <div class="dt-menu-item"> -->
                    <router-link
                        to="/tags"
                        class="dt-menu-item"
                    >标签</router-link>
                    <!-- </div> -->


                </div>

                <div class="dt-auth">
                    <div
                        class="buttons"
                        v-if="!isLogin"
                    >
                        <router-link
                            to="/signup"
                            class="button is-primary"
                        >注册</router-link>

                        <router-link
                            to="/signin"
                            class="button is-light"
                        >登录</router-link>
                    </div>
                    <div
                        v-else
                        class="dt-user"
                    >
                        <img
                            src="../assets/1.jpg"
                            alt=""
                            class="dt-avatar-32x32"
                        >
                    </div>
                </div>
            </div>

            <!-- <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item">首页</router-link>
                    <a class="navbar-item">
                        发表斗图
                    </a>
                    <router-link to="/tags" class="navbar-item">标签</router-link>
                </div>

                <div class="navbar-end">
                    <div class="buttons" v-if="!isLogin">
                        <router-link to="/signup" class="button is-primary">注册</router-link>

                        <router-link to="/signin" class="button is-light">登录</router-link>
                    </div>
                    <div v-else class="dt-user">
                        <img src="../assets/1.jpg" alt="" class="dt-avatar-32x32">
                    </div>
                </div>
            </div> -->
        </nav>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        isLogin: function() {
            let token = localStorage.getItem("access_token");
            return token ? true : false;
        },
        user: function() {
            return JSON.parse(localStorage.getItem("user"));
        }
    },
    methods: {
        test: function() {
            console.log(this.user);
        }
    }
};
</script>

<style scoped>
.dt-head {
    margin-bottom: 1rem;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    height: 50px;
    background: #f7e36e;
    /* background: #282828; */
}

.logo {
    max-height: 50px;
}

.dt-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

}

.dt-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
}

.dt-menu .dt-menu-item {
    margin-right: 1rem;
}

.dt-menu a {
    color: #4a4a4a;
    padding: 0.5rem 1rem;
    /* line-height: 50px; */
}

.dt-menu-item:hover {
    color: #3273dc;
}


.dt-auth {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* flex-grow: 1; */
}
</style>

