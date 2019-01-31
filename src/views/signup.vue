<template>
    <div class="box">
        <div class="field">
            <label class="label">昵称</label>
            <div class="control">
                <input class="input" type="text" placeholder="请输入昵称" v-model="昵称">     
            </div>
        </div>

        <div class="field">
            <label class="label">邮箱</label>
            <div class="control">
                <input class="input" type="email" placeholder="请输入邮箱" v-model="email">     
            </div>
        </div>

         <div class="field">
            <label class="label">密码</label>
            <div class="control">
                <input class="input" type="password" placeholder="请输入密码" v-model="password">     
            </div>
        </div>

        <div class="field is-grouped">
        <div class="control">
            <button class="button is-info" @click="signup">注册</button>
        </div>
        </div>  
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        sigup: function() {
            var data = {
                name: 'testest',
                email: 'test@qq.com',
                password: 111111,
            }
            this.$axios.post('api/signup', data)
            .then(function(rsp) {
                console.log(rsp.data)
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    }
}
</script>
