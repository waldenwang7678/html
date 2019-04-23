/**
 * YDUI ��叱膽��絮��号�
 * rem莅∞��劫���莅乗��上虻絲�px / 100 = 絎���rem  箴�: 100px = 1rem
 */
!function (window) {

    /* 莅乗��丈��罅ｅ�綺� */
    var docWidth = 750;

    var doc = window.document,
        docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var recalc = (function refreshRem () {
        var clientWidth = docEl.getBoundingClientRect().width;

        /* 8.55鐚�絨鋋�320px筝���膽����11.2鐚�紊т��420px筝����上ぇ */
        docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';

        return refreshRem;
    })();

    /* 羞糸����絮���莚�鐚�絎�����絮鋇�1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
        /* 羞糸��IOS��莚� */
        doc.documentElement.classList.add('ios');
        /* IOS8篁ヤ�膸�html羞糸��hairline�桁���篁ヤ梢�号�紊��� */
        if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
            doc.documentElement.classList.add('hairline');
    }

    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

}(window);