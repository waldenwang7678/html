
Vue.component('float-edit-text', {
    props: ['title'],
    template:
        `<div>
            <div class="edit-view" v-show="showEditText">
                <!-- 遮罩层 -->
                <div class="edit-layer">

                    <div style="width: 100%;height: 90px;">

                        <div style="float: left" @click="closeEditText()">
                            <img style="width:90px;height: 90px; padding: 32px;margin-left: 24px"
                                 src="../img/goback.png">
                        </div>

                        <div style="line-height:90px;float:left;margin-left: 762px;width: 200px">
                            <span>添加其他物品</span>
                        </div>
                        <div @click="saveEditText()"
                             style="float: right ;height: 90px;text-align: center;line-height: 90px;margin-right: 80px">
                            <span style="color: #CDCED4" id="save_goods_bt">保存</span>
                        </div>
                    </div>

                    <div style="clear: both;">
                        <textarea
                                autofocus="autofocus"
                                id="more_goods_input"
                                placeholder="输入物品"
                                v-bind:value="editTextTempValue"
                                oninput="moreGoodsOnInput()"
                                style="border: 0px; height:490px;width: 100%; padding: 30px 80px">
                        </textarea>
                    </div>
                </div>
            </div>
        </div>`,


});
