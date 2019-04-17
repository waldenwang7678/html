
var curpage=1;
var totalpage,nextpage;

$(document).swipeUp(function(){

    //隐藏当前页面

    $(".page"+curpage).removeClass("show");
    $(".page"+curpage).addClass("hide");


    //判断当前页是否为最后一页

    //获取总页数
    totalpage = $(".page").length;
    //如果是最后一页，显示第一页，否则显示下一页
    if(curpage == totalpage){
        $(".page1").removeClass("hide");
        $(".page1").addClass("show");
        curpage =1;
    }else{
        nextpage = curpage+1;
        $(".page"+nextpage).removeClass("hide");
        $(".page"+nextpage).addClass("show");
        curpage = nextpage;
    }


});



