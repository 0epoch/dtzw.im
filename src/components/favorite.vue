<template>
    <div class="card dt-f-menu">
        <header class="card-header">
            <p class="card-header-title">
                添加到收藏夹
            </p>
        </header>
        <div
            class="dt-f-list"
            v-for="favorite in list"
            :key=favorite.id
            @click="toThisFavorite(favorite.id)"
        >
            <span>{{favorite.name}}</span>
            <span class="dt-f-num">{{favorite.memes_num}}</span>
            <span></span>
        </div>
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input
                    class="input is-small"
                    type="text"
                    placeholder="新建收藏夹"
                    v-model="name"
                >
            </p>
            <p class="control">
                <a @click="createFavorite">确定</a>
            </p>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            favorites: [],
            name: ''
        };
    },
    props: {
        list: Array,
        meme_id: Number,
    },

    methods: {
        //新建收藏夹
        createFavorite: function() {
            let data = { name: this.name, description: "F描述描述" };
            this.$store.dispatch('storeFavorite', data)
        },
        //添加，取消到收藏夹        
        toThisFavorite: function(favorite_id) {
            this.$store.dispatch('putFavorite', favorite_id, this.meme_id)
        }
    }
};
</script>


<style>
/* 添加到收藏夹菜单 */
.dt-f-menu {
    position: absolute;
    top: 120%;
    left: 67%;
    width: 18rem;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 10;
}

/* 收藏夹列表 */
.dt-f-list {
    text-align: left;
    padding: 0.7rem;
    font-size: 0.9rem;
    border-bottom: solid 1px #eee;
    cursor: pointer;
}

.dt-f-list:hover {
    background: hsl(0, 0%, 96%);
}

.dt-f-menu .field {
    margin: 0.6rem;
}

/* 操作按钮 */
.dt-item-nav {
    position: relative;
}

/* 收藏数量 */
.dt-f-num {
    margin: 0 0 0 3px;
    padding: 1px 5px;
    background: hsl(0, 0%, 86%);
    color: hsl(0, 0%, 96%);
    /* font-size: 11px; */
    -webkit-text-size-adjust: none;
    vertical-align: top;
    border-radius: 50%;
}

/* 对号 */
.dt-tick {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: hsl(204, 86%, 53%);
    border: none;
    border-radius: 50%;
    /* display: inline-block; */
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 18px;
    max-height: 18px;
    max-width: 18px;
    min-height: 18px;
    min-width: 18px;
    outline: none;
    position: relative;
    vertical-align: top;
    float: right;
}
.dt-tick::before,
.dt-tick::after {
    background-color: #fff;
    content: "";
    display: block;
    position: absolute;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
}
.dt-tick::before {
    height: 2px;
    width: 50%;
    top: 60%;
    left: 30%;
}
.dt-tick::after {
    height: 65%;
    width: 2px;
    top: 50%;
    left: 70%;
}
</style>
