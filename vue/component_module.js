/**
 *
 * 自定义组件
 */
Vue.component('custom_item', {
    // data 必须是一个函数
    data: function () {
        return {
            count: 2
        }
    },
    template: '<span>这是一个自定义模板{{count}}</span>'
});

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('blog-post', {
    // 自定义属性title
    props: ['title', 'time', 'post'],
    // 取值, 属性值在这里显示 , template 下面只能有一个跟标签
    template:
    '<div class ="blog-post" style="background: #46F3B6;margin: 10px;width: 200px;padding: 10px;float: left">' +
    '<h3>{{ title }} </h3>' +
    '<h4 style="width:50%;float:left;background:#ff8400;">{{ time }}</h4>' +
    '<h5 style="width:50%;float:right;background:#a4cd0e;text-align: right">{{ post.desc }}</h5>' +
    '<span style="clear: both;display:block ;background: #7FFF00"> {{post.content}}</span>' +

    '<div style="text-align: right">' +
    // 传出事件名称 enlarge-text
    '<button v-on:click="enlarge_text">font-size</button>' +
    '</div>' +
    '</div>',
    methods: {
        enlarge_text: function () {
            this.$emit('enlarge-text', 0.2)
        }
    }
});



