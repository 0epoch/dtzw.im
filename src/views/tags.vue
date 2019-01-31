<template>
    <article class="container main">
        <div class="columns is-multiline">
            <div
                class="column is-one-fifth"
                v-for="item in list"
                :key=item.id
            >
                <div class="dt-box">
                    <div class="dt-tag">
                        <div class="dt-tag-item">
                            <img
                                class="dt-avatar-128x128"
                                src="../assets/2.jpg"
                                alt=""
                            >
                        </div>
                        <strong>熊猫头</strong>
                        <small>100 表情 · 300 关注</small>
                        <!-- <a class="button is-small is-warning">关注</a> -->
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
            tagName: "",
            description: "",
            data: ""
        };
    },
    components: {
        // DtzwUpload
    },
    mounted: function() {
        let self = this;
        this.$axios
            .get("tags")
            .then(function(rsp) {
                self.list = rsp;
                console.log(self.list);
            })
            .catch(function(error) {});
    },
    computed: {
        uploadData: function() {
            // this.data.push(this.tagName);
            // this.data.push(this.description)
            this.data.tagName = this.tagName;
            this.data.description = this.description;
            console.log(this.data);
            return this.data;
        }
    },
    methods: {}
};
</script>

<style scoped>
.dt-tag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.dt-tag small {
    color: #999;
}
.dt-tag .button {
    margin-top: .2rem;
}

</style>

