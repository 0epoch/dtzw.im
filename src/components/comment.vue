<template>
    <div class="comment-list">
        <div class="field is-grouped comment-box">
            <p class="control is-expanded">
                <input
                    class="input"
                    type="text"
                    placeholder="说两句..."
                    v-model="content"
                >
            </p>
            <p class="control">
                <a
                    class="button is-warning"
                    @click="publish('')"
                >评论</a>
            </p>
        </div>
        <article
            class="media"
            v-for="comment in comments"
            :key="comment.id"
        >
            <figure class="media-left">
                <img src="../assets/3.jpg" class="dt-avatar-32x32">
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{comment.user.name}}</strong>
                        <br>
                        {{comment.content}}
                        <br>
                        <small><a>赞</a> · <a @click="reply(comment)">回复</a> · {{comment.created_at}}</small>
                    </p>
                </div>
                <!-- 回复框 -->
                <div class="field is-grouped comment-box" v-if="replyActive==comment.id">
                    <p class="control is-expanded">
                        <input
                            class="input"
                            type="text"
                            :placeholder="'@'+comment.user.name"
                            v-model="comment.value"
                        >
                    </p>
                    <p class="control">
                        <a
                            class="button is-warning"
                            @click="publish(comment)"
                        >回复</a>
                    </p>
                </div>
                <article
                    class="media"
                    v-for="child_comment in comment.child_comments"
                    :key="child_comment.id"
                >
                    <figure class="media-left">
                        <img src="../assets/4.jpg" class="dt-avatar-32x32">
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <span>
                                    <a href="#">{{child_comment.user.name}}</a> <small>@</small> <a href="#">{{child_comment.target_user.name}}</a></span>
                                <br>
                                {{child_comment.content}}
                                <br>
                                <small><a>赞</a> · <a @click="reply(child_comment)">回复</a> · {{child_comment.created_at}}</small>
                            </p>
                        </div>
                        <!-- 回复框 -->                     
                        <div class="field is-grouped comment-box" v-if="replyActive==child_comment.id">
                            <p class="control is-expanded reply-box">
                                <input
                                    class="input"
                                    type="text"
                                    :placeholder="'@'+child_comment.user.name"
                                    v-model="child_comment.value"
                                >
                            </p>
                            <p class="control">
                                <a
                                    class="button is-warning"
                                    @click="publish(child_comment)"
                                >回复</a>
                            </p>
                        </div>
                    </div>

                </article>
            </div>
        </article>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            content: '',
            replyActive: 0,
        };
    },
    computed: {
        ...mapState(["comments"]),
    },
    props: {
        meme_id: Number
    },
    mounted: function() {
        this.$store.dispatch("fetchComments", this.meme_id);
    },
    methods: {
        publish: function(comment) {
            let data = {meme_id: this.meme_id};
            if(comment=='') {
                data.content = this.content
            } else {
                data.comment_id = comment.id
                data.content = comment.value
            }
            this.$store.dispatch('storeComment', data)
        },
        reply: function(comment) {
            this.replyActive = comment.id
        }
    }
};
</script>

<style scoped>
.comment-list {
    border-top: 1px solid #f3f3f3;
    border-radius: 2px;
    padding: 0.6rem 0.8rem;
    background: #FFF;
}

.comment-box {
    padding: .8rem;
    background: #F3F3F3;
    border-radius: 2px;
}

.media .media .control:not(:last-child) {
    margin-bottom: 0;
}
</style>
