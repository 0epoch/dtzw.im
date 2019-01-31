<template>
    <div class="dt-box meme-form">
        <div class="field">
            <label class="label">描述</label>
            <div class="control">
                <input
                    class="input"
                    type="text"
                    placeholder="表情描述"
                    v-model="description"
                >
            </div>
        </div>

        <div class="field">
            <label class="label">上传表情</label>
            <upload
                :tags_id="tags_id"
                :description="description"
            ></upload>
        </div>
        <div class="field">
            <label class="label">添加标签</label>
            <div class="control">
                <input
                    class="input"
                    type="text"
                    placeholder="输入标签"
                    v-model="keyword"
                    @keyup.enter="search(keyword)"
                >
            </div>
            
        </div>
<div class="select is-multiple" v-if="tags">
  <select multiple>
    <option value="Argentina" v-for="tag in tags" :key=tag.id>
        {{tag.name}}
    </option>
  </select>
</div>        
        <div class="tags">
            <span class="tag is-default" v-for="tag in tags" :key=tag.id>
                {{tag.name}}
                <button class="delete is-small"></button>
            </span>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-warning">
                    发布
                </button>
            </p>
        </div>
    </div>
</template>

<script>
// import Comment from "@/components/Comment";
import Upload from "@/components/upload";

export default {
    data() {
        return {
            tags: "",
            tags_id: [],
            description: "",
            keyword: ""
        };
    },
    components: {
        Upload
    },
    methods: {
        //标签选择
        picked: function(id) {
            let idIndex = this.tagsId.indexOf(id);
            if (-1 == idIndex) {
                this.tagsId.push(id);
            } else {
                this.tagsId.splice(idIndex, 1);
            }
        },

        search: function(keyword) {
            this.$axios.get("tags/" + keyword).then(resp => {
                this.tags = resp.data;
            });
        }
    }
};
</script>

<style>
.meme-form {
    padding: 1rem;
}

.meme-form .label {
    font-weight: 400;
}
</style>
