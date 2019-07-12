// 自动执行函数

!function (window) {

    var ydui = {};

    ScrollTab.DEFAULTS = {
        navItem: '.scrolltab-item',
        content: '.scrolltab-content',
        contentItem: '.scrolltab-content-item',
        initIndex: 0
    };
    function ScrollTab(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, ScrollTab.DEFAULTS, options || {});
        this.init();
    }


    ScrollTab.prototype.init = function () {
        console.log('init');
        var _this = this;
        var $element = _this.$element;
        var options = _this.options;

        _this.$navItem = $element.find(options.navItem);
        _this.$content = $element.find(options.content);
        _this.$contentItem = $element.find(options.contentItem);

        _this.scrolling = false;
        _this.contentOffsetTop = _this.$content.offset().top;

        console.log("_this.contentOffsetTop  : "+_this.contentOffsetTop );
        console.log("$navItem.length  : "+ _this.$navItem.length );


        _this.bindEvent();


        _this.movePosition(_this.options.initIndex, false);
    };

    ScrollTab.prototype.bindEvent = function () {
        console.log('bindEvent');
        var _this = this;

        _this.$content.on('resize.ydui.scrolltab scroll.ydui.scrolltab', function () {
            _this.checkInView();
        });

        _this.$navItem.on('click.ydui.scrolltab', function () {
            _this.movePosition($(this).index(), true);
        });
    };

    ScrollTab.prototype.movePosition = function (index, animate) {
        var _this = this;
        console.log('movePosition');
        if (_this.scrolling) return;
        _this.scrolling = true;

        _this.$navItem.removeClass('crt');
        _this.$navItem.eq(index).addClass('crt');

        var $item = _this.$contentItem.eq(index);
        if (!$item[0]) return;

        var offset = $item.offset().top;

        var top = offset + _this.$content.scrollTop() - _this.contentOffsetTop + 1;

        _this.$content.stop().animate({scrollTop: top}, animate ? 200 : 0, function () {
            _this.scrolling = false;
        });
    };

    ScrollTab.prototype.checkInView = function () {
        var _this = this;
        console.log('checkInView');

        if (_this.scrolling) return;

        if (_this.isScrollTop()) {
            _this.setClass(0);
            return;
        }

        if (_this.isScrollBottom()) {
            _this.setClass(_this.$navItem.length - 1);
            return;
        }

        _this.$contentItem.each(function () {
            var $this = $(this);

            if ($this.offset().top <= _this.contentOffsetTop) {
                _this.setClass($this.index());
            }
        });
    };

    ScrollTab.prototype.setClass = function (index) {
        console.log('setClass');
        this.$navItem.removeClass('crt').eq(index).addClass('crt');
    };

    ScrollTab.prototype.isScrollTop = function () {
        console.log('isScrollTop');
        return this.$content.scrollTop() == 0;
    };

    ScrollTab.prototype.isScrollBottom = function () {
        var _this = this;
        console.log('isScrollBottom');
        return _this.$content.scrollTop() + 3 >= _this.$contentItem.height() * _this.$contentItem.length - _this.$content.height();
    };

    function Plugin(option) {
        console.log('Plugin');
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function () {
            var target = this,
                $this = $(target),
                scrollTab = $this.data('ydui.scrolltab');

            if (!scrollTab) {
                $this.data('ydui.scrolltab', (scrollTab = new ScrollTab(target, option)));
            }

            if (typeof option == 'string') {
                scrollTab[option] && scrollTab[option].apply(scrollTab, args);
            }
        });
    }

    $(window).on('load.ydui.scrolltab', function () {
        $('[data-ydui-scrolltab]').each(function () {
            var $this = $(this);
            $this.scrollTab($this.data('ydui-scrolltab'));
            console.log('$(window).on(\'load.ydui.scrolltab\'');
        });
    });

    $.fn.scrollTab = Plugin;
    console.log('end');

}(window);