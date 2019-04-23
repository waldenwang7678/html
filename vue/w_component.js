Vue.component('float-edit-text', {
    // 自定义属性content编辑内容,  title 编辑页面标题 , holder 编辑提示 isShow 是否显示
    props: ['content', 'title', 'holder'],
    template:
        `<div  style="float: left;position: relative" >
            <div style="position: fixed;z-index: 999;top: 0;left: 0;
                   background: white;width: 100%;height: 100%;">
                <div style="width: 100%;height: 90px;" >
                
                    <div style="float: left;width:90px;height: 90px; margin-left: 24px;text-align: center" @click="closePage()">
                        <img style="width: 26px;height: 26px;margin-top: 32px" src="../img/goback.png">
                    </div>
                    <div style="line-height:90px;float:left;
                             font-size:28px;
                             font-family:PingFangSC-Regular;
                             font-weight:400;
                             color:rgba(54,60,84,1);
                             margin-left: 762px;
                             width: 200px">
                            <span>添加其他物品</span>
                    </div>     
                    <div id='save_goods_bt' @click="saveText" 
                            style="height:90px;line-height:90px;margin-right:80px;
                            font-size:26px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            float:right;
                            color:#CDCED4
                            text-align:center;">
                            <span >保存</span>
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div style="padding: 30px 80px">
                    <textarea 
                         v-model="content"
                         autofocus="autofocus"
                         :placeholder="holder"
                         style="border: none; 
                             height:496px;
                             font-size:26px;
                             font-family:PingFangSC-Regular;
                             font-weight:400;
                             color:rgba(54,60,84,1);
                             width: 1760px; "></textarea>
                </div>
            </div>
        </div>`,
    mounted: function () {
        let saveGoodsBt = document.getElementById("save_goods_bt");
        if (this.content.length === 0) {
            saveGoodsBt.style.color = "#CDCED4";
        } else {
            saveGoodsBt.style.color = "#00BCBC";
        }
    },
    methods: {
        closePage: function () {
            this.$emit('close-page')
        },
        saveText: function () {
            this.$emit('set-text-content', this.content)
            this.closePage();
        },
    },
    watch: {
        content: function (valueStr) {
            let saveGoodsBt = document.getElementById("save_goods_bt");
            if (valueStr.length === 0) {
                saveGoodsBt.style.color = "#CDCED4";
            } else {
                console.log(valueStr + "----");
                saveGoodsBt.style.color = "#00BCBC";
            }
        }
    },
});
