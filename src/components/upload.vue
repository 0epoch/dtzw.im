<template>
    <div class="">
        <div class="field files file">
            <section  class="file-item file-box" v-for="(item, index) of files" :key="index">
                <img  :src="item.src" alt="" class="file-image">
                <span class="file-remove" @click="removeFile(index)"></span>
            </section>

            <section class="file-item">
                <div @click="add" class="add">
                    <span>+</span>
                </div>
            </section>
            <input class="" accept="image/*" type="file" name="file" @change="changed" ref="file" multiple="true">
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            files: [],
            pickedTag:'is-warning',
        };
    },
    props: {
        tags_id: Array,
        description: String,
        data: String,
        url:String,
    },
    methods: {
        add: function(e) {
            this.$refs.file.click()
        },
        //选择图片
        changed: function(e) {
            let files = e.target.files
            for(let i=0; i<files.length; i++) {
                const thisFile = {
                    name: files[i].name,
                    size: files[i].size,
                    file: files[i],                    
                }
                //是否有相同文件
                if(!this.isContain(thisFile)) {
                    var reader = new FileReader();                                  
                    reader.readAsDataURL(files[i]);
                    reader.onload = (e) => {
                        this.$set(thisFile, 'src', e.target.result)
                    }
                    
                    this.files.push(thisFile)
                    this.$refs.file.value = ''
                }
                if(this.files.length >= 6) {
                    let add = document.getElementsByClassName('add')[0]
                    add.style.display="none"
                    return
                }
            }
        },
        //图片是否已经选择
        isContain: function(item) {
            return this.files.find((file) => {
                return file.name === item.name && item.size === file.size
            })
        },
        //删除选择图片
        removeFile: function(index) {
            this.files.splice(index, 1)
            let add = document.getElementsByClassName('add')[0]
            if('none' === add.style.display) {
                console.log('none')
                add.style.display="block"
            }         
        },
        //开始上传
        startUpload: function() {

            if(this.files.length <= 0) {
                this.$notify.error({
                    title: '错误',
                    message: '请添加表情'
                });return
                // this.$message.error('请添加表情');return
            }

            let formData = new FormData()
            this.files.forEach(file => {
                formData.append('files[]', file.file)
            });

            formData.append('data', this.data)
            formData.append('tagsId', this.tagsId)
            formData.append('description', this.description)
            
            let uploadUrl = ''
            if(this.uploadUrl) {
                uploadUrl = this.uploadUrl
            } else {
                uploadUrl = 'api/meme'
            }
            this.$axios.post(uploadUrl, formData)
            .then( resp => {
                this.$message({
                    message: '发表成功',
                    type: 'success'
                })
                // window.location.href="/"
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }        
    }
};
</script>

<style>

.file-image{
    width: 120px;
    height: 120px;
    border-radius: 4px;

}

.files > input[type="file"] {
    display: none;
}
.add {
    width: 120px;
    height: 120px;
    /* display: flex;
    justify-content:space-between; */
    /* float: left; */
    text-align: center;
    line-height: 120px;
    /* border: 1px dashed #ececec; */
    font-size: 30px;
    cursor: pointer;
    background: #f3f3f3;
    border-radius: 4px;
}

/* 删除按钮效果 */
.files .file-item {
    float: left;
    position: relative;
    width: 120px;
    text-align: center;
    margin-right: 10px;
}

.file-item:hover .file-remove{
    display: inline;
}

.file-item .file-remove {
    
    -webkit-appearance: none;
    background-color: rgba(10, 10, 10, 0.2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: none;
    vertical-align: top;
    right: 3px;
    display: none;
    top: 4px; 
    position: absolute;
} 

.file-item .file-remove::before {
    height: 2px;
    width: 50%;

    background-color: white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
}

.file-item .file-remove::after {
    height: 50%;
    width: 2px;

    background-color: white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
}

.file-item .file-remove {
    display: inline;
    background-color: #ff0000;
}

.file-box {
    display: flex;
    justify-content:space-between;
}
</style>
