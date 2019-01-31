<template>
    <article class="container main">
        <div class="columns is-multiline">
            <div
                class="column is-one-quarter"
                v-for="item in list"
                :key="item.id"
            >
                <div class="dt-card">
                    <figure class="image is-1by1">
                        <img
                            src=../assets/2.jpg
                            alt="Placeholder image"
                        >
                    </figure>
                    <div class="dt-meme-user">
                        <div>
                            <img
                                src="../assets/2.jpg"
                                alt="头像"
                                class="dt-avatar-32x32"
                            >
                            <small >姓甚名谁</small>
                        </div>
                        <small class="dt-time">3分钟前</small>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            memeHost: ""
        };
    },
    mounted: function() {
        let self = this;
        this.$axios
            .get("tags/memes?id=1")
            .then(function(rsp) {
                self.list = rsp;
            })
            .catch(function(error) {});
    }
};
</script>

<style>
.dt-meme-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    border-top: 1px solid #eee;
}

/* .dt-meme-user div {
    align-self: center;
    margin-left: .6rem;
} */
.dt-block {
    display: block;
}

.dt-meme-user div {
    display: flex;
    align-items: center;
}

.dt-meme-user div small {
    padding-left: .4rem;
}

.dt-meme-user .dt-time{
    color: #999;
}
</style>

