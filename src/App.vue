<template>
    <div id="app">
        <navbar />
        <div class="container">
            <router-view></router-view>
        </div> 
    </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
    components: {
        navbar
    }
};
</script>

<style>
body {
    background: #f3f3f3;
    min-height: 100vh;
    /* height: 100%; */
    /* background: #282828; */
}

/* .container {
    max-width: 960px;
} */

.dt-box {
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    padding: .5rem;
    border-radius: 2px;
}

.dt-card {
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-radius: 2px;
}

.dt-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dt-avatar-32x32 {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.dt-avatar-50x50 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.dt-avatar-128x128 {
    width: 128px;
    height: 128px;
    border-radius: 50%;
}
</style>
</style>
