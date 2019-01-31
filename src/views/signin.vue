<template>
    <article class="container main">
        1111111111111111
        <div class="columns is-multiline is-mobile">
            <div
                class="column is-one-quarter"
                v-for="item in list"
                :key="item.id"
            >
                <div class="dt-box">
                    <router-link :to="'/tags/' + item.id">
                        <figure class="image is-1by1">
                            <img
                                :src=item.thumb_path
                                class="tag-img"
                            >
                        </figure>
                    </router-link>
                    <div class="">
                        <p class="tag-title">
                            <strong v-text="item.name"></strong>
                        </p>
                        <p class="columns tag-title">
                            <span class="column is-half ">{{item.memes_num}} 表情</span>
                            <span class="column is-half ">{{item.followers_num}} 关注</span>
                        </p>
                        <p class="tag-title">
                            <a class="button is-info is-outlined">关 注</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>    


<script>
// import DtzwUpload from "@/components/DtzwUpload";

export default {
    data() {
        return {
            list: [],
            tagName: '',
            description: '',
            data: ''
        };
    },
    components: {
        // DtzwUpload
    },
    mounted: function() {
        let self = this
        this.$axios.get('/api/tags')
        .then(function(rsp) {
            self.list = rsp.data
            console.log(self.list);
        })
        .catch(function(error) {

        })
    },
    computed: {
        uploadData: function() {
            // this.data.push(this.tagName);
            // this.data.push(this.description)
            this.data.tagName = this.tagName
            this.data.description = this.description
            console.log(this.data)
            return this.data
        }
    },
    methods: {

    }
};
</script>

<style>
/* .tag-text {
        text-align: center;
        padding: .8rem .8rem 0 .8rem;
    } */
.tag-img {
    border-radius: 50%;
    padding: 0.6rem;
}
.tag-title {
    display: block;
    text-align: center;
    line-height: 1.8rem;
    color: #333;
}
.follow {
    margin: auto
}

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>

