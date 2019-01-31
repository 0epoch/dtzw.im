<template>
    <section class="column">
        <article
            class="dt-meme-box"
            v-for="meme in memes"
            :key='meme.id'
        >
            <div class="dt-meme-panel dt-bottom-boder">
                <div class="dt-user">
                    <img
                        src="../assets/1.jpg"
                        alt=""
                        class="dt-avatar-50x50"
                    >
                    <div>
                        <strong class="">{{meme.author}}</strong>
                        <small class="">{{meme.created_at}}</small>
                    </div>
                </div>

                <div class="tags">
                    <a
                        class="tag"
                        v-for="(tag, index) in meme.tags"
                        :key="index"
                    >{{tag.name}}</a>
                    <a class="tag">...</a>
                </div>
            </div>
            <figure class="dt-meme">
                <img
                    src='../assets/2.jpg'
                    :alt=meme.description
                    v-for="(i, path) in meme.paths"
                    :key="path"
                >
            </figure>

            <nav class="dt-meme-panel dt-top-boder">
                <a @click="vote(meme)">
                    <!-- <i class="iconfont icon-guzhang"></i> -->
                    <span>{{meme.votes_num}}</span>
                </a>
                <a @click="comment(meme)">
                    <!-- <i class="icon iconfont icon-icon_comment"></i> -->
                    <span class="name">{{meme.comments_num}} 条评论</span>
                </a>
                <a @click="favorite(meme)">
                    <!-- <i class="iconfont icon-ai-mark"></i> -->
                    <span>收藏</span>
                </a>
                <!-- 收藏夹组件 -->
                <favorite
                    :list="favorites"
                    :meme_id="favoriteActive"
                    v-show="favoriteActive==meme.id"
                ></favorite>

                <a
                    class="level-left"
                    slot="reference"
                >
                    <i class="iconfont icon-fenxiang"></i>
                    <span>分享</span>
                </a>

            </nav>

            <comment
                v-if="commmentActive==meme.id"
                :meme_id=meme.id
            ></comment>
        </article>
    </section>
</template>

<script>
import Comment from "@/components/comment";
import Favorite from "@/components/favorite";
import { mapState } from "vuex";

export default {
    data() {
        return {
            uploadData: {
                tag: ["熊猫头1", "熊猫头2", "熊猫头3"],
                description: "无法形容"
            },
            commmentActive: -1,
            memes: [],
            favoriteActive: -1
        };
    },
    computed: {
        ...mapState(["favorites"])
    },
    mounted: function() {
        var self = this;
        this.$axios
            .get("memes")
            .then(resp => {
                this.memes = resp.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    components: {
        Comment,
        Favorite
        // upload
    },
    methods: {
        comment: function(meme) {
            if (this.commmentActive != meme.id) {
                this.commmentActive = meme.id;
            } else {
                this.commmentActive = -1;
            }
        },
        vote: function(item) {
            let voteApi = "/api/meme/" + item.id + "/vote";
            this.$axios
                .get(voteApi)
                .then(resp => {
                    let num = parseInt(item.votes_num);
                    if (1 == resp.data.data) {
                        item.votes_num = num + 1;
                    } else if (-1 == resp.data.data) {
                        item.votes_num = num - 1;
                    }
                })
                .catch(error => {});
        },
        favorite: function(meme) {
            if (-1 == this.favoriteActive) {
                this.$store.dispatch("fetchFavorites", meme.id);
                this.favoriteActive = meme.id;
            } else if (
                -1 != this.favoriteActive &&
                meme.id != this.favoriteActive
            ) {
                this.$store.dispatch("fetchFavorites", meme.id);
                this.favoriteActive = meme.id;
            } else {
                this.favoriteActive = -1;
            }
        }
    }
};
</script>

<style scoped>
.dt-meme {
    background: #fff;
    padding: 0.6rem 0.8rem;
    /* display: flex; */
    /* justify-content: center; */
}

.dt-meme img {
    display: block;
}

.dt-meme-box {
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    margin-bottom: 1rem;
    border-radius: 2px;
}
.dt-meme-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0.6rem 0.8rem;
}

.dt-meme-box nav {
    padding: 1rem .6rem;
}

.dt-user div {
    padding-left: 0.5rem;
}

.dt-user div small {
    color: #999;
    font-size: 0.6rem;
    display: block;
}

.dt-bottom-boder {
    border-bottom: 1px solid #f3f3f3;
}

.dt-top-boder {
    border-top: 1px solid #f3f3f3;
}
</style>
