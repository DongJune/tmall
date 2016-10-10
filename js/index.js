$(function () {

// 顶层
    var my = $('.my')
    var bol1 = $('.bol1')
    var title2 = $('.title2', bol1[0])
    var title4 = $('.title4', bol1[0])[0]
    var bodytop = $(".body-top")[0]
// console.log(bol1)
    var cai = $('.cai')[0];
    var cailike = $(".cailike")[0]
    var caiimg = $('img', cailike)
    // console.log(caiimg)
    var cailikes = cai.offsetTop
    // console.log(cailikes)
    var f = true;
    var ts = true;
    var ts1 = true;
// console.log(my)
    for (var i = 0; i < my.length; i++) {
        my[i].index = i;
        var myt = $('.myt', my[this.index])
// console.log(myt)
        my[i].onmouseover = function () {
            // console.log(myt)
            myt[this.index].style.display = "block"
            this.style.background = "#fff"

        }
        my[i].onmouseout = function () {
            myt[this.index].style.display = "none"
            this.style.background = ""
        }
    }
    ;
    var my2 = $('.my2')[0]
    var my21 = $('.my21', my2)[0]
// console.log(my21)
    function my2s(a, b) {
        a.onmouseover = function () {
            b.style.zIndex = 20;
            b.style.display = 'block'
        }
        a.onmouseout = function () {
            b.style.zIndex = 0;
            b.style.display = 'none'
        }
    }

    my2s(my2, my21)
    var my3 = $('.my3')[0]
    var myt1 = $('.myt1', my3)[0]

    function my3s(my3, myt1) {
        my3.onmouseover = function () {
            myt1.style.zIndex = 20;
            myt1.style.display = 'block'

            this.style.background = "#fff"

        }
        my3.onmouseout = function () {
            myt1.style.zIndex = 0;
            myt1.style.display = 'none'
            this.style.background = ""
        }
    }

    my3s(my3, myt1)
    var my4 = $('.my4')[0]
    var myt4 = $('.myt4', my4)[0]
    my3s(my4, myt4)
//banner部分
    var boxs = getclass('banner-box1', document)
    var ahref = $('a', boxs[0])
    var ul1 = $('.ul1', boxs[0])[0]
// console.log(ul1)
    var li1 = $('li', ul1)
// console.log(li1)
    var index = 0;
// ahref[0].style.opacity=1;
    animate(ahref[0], {opacity: 1}, 500)
    li1[0].style.background = '#f3f3f3'
    function move() {
        index++;
        if (index == ahref.length) {
            index = 0;
        }
        ;
        for (var i = 0; i < ahref.length; i++) {
            // ahref[i].style.opacity=0;
            animate(ahref[i], {opacity: 0}, 500)
            li1[i].style.background = '#909090';
        }
        ;
        // ahref[index].style.opacity=1;
        animate(ahref[index], {opacity: 1}, 500)
        li1[index].style.background = '#f3f3f3'
    }

    var t = setInterval(move, 2000)
    boxs[0].onmouseover = function () {
        clearInterval(t);
    }
    boxs[0].onmouseout = function () {
        t = setInterval(move, 2000)
    }

    for (var j = 0; j < li1.length; j++) {
        li1[j].index = j;
        li1[j].onclick = function () {
            for (var i = 0; i < li1.length; i++) {
                li1[i].style.background = "#909090";
                animate(ahref[i], {opacity: 0}, 500)
            }
            animate(ahref[this.index], {opacity: 1}, 500)
            this.style.background = "#f3f3f3";
            index = this.index;
        }
    }
    ;
//结束
//固定侧面导航
    var ceimg = $('.top-img')
    var img1 = $('img', ceimg[0])
// console.log(img1)
    var juxing = $('.juxing', ceimg[0])
    var jx1 = $('.jx1', ceimg[0])
    // console.log(jx1)
    for (var i = 0; i < img1.length; i++) {
        img1[i].ina = i;
        img1[i].onmouseover = function () {
            // alert(2)
            animate(juxing[this.ina], {right: 35, opacity: 1}, 500)
            animate(jx1[this.ina], {right: 20, opacity: 1}, 500)
        }
        img1[i].onmouseout = function () {
            // alert(2)
            animate(juxing[this.ina], {right: 60, opacity: 0}, 500)
            animate(jx1[this.ina], {right: 60, opacity: 0}, 500)
        }
    }
    ;


//导航样式
    var nav1 = $('.navigation1')[0]
    var nav2 = $('.navigation3')
// console.log(nav2)
    var mao1 = $('.remao', nav1)
    // console.log(mao1)

    for (var i = 0; i < nav2.length; i++) {

        nav2[i].index = i;
        nav2[i].onmouseover = function () {
            // mao1[this.index].style.display='block'
            animate(mao1[this.index], {bottom: 30, opacity: 1}, 500)
        }
        nav2[i].onmouseout = function () {
            // mao1[this.index].style.display='none'
            animate(mao1[this.index], {bottom: 0, opacity: 0}, 500)

        }

    }
    ;

//分类样式
    var xnei12 = $(".xnei1")
    var xuan = $('.xuan1')
    var bnr2 = $('.banner2')
    var bnli1 = $('li', bnr2[0])
    var xuan11 = $('.xuan')
// console.log(bnli1)
// console.log(xnei12)
// xnei1[0].style.background="#fff"
// xuan[0].style.display='none';
    xnei12[0].style.zIndex = 0;
    xuan[0].style.zIndex = 0;
    xuan11[0].style.zIndex = 0;

    for (var i = 0; i < bnli1.length; i++) {
        bnli1[i].a = i
        bnli1[i].onmouseover = function () {
            for (var j = 0; j < bnli1.length; j++) {
                xnei12[j].style.display = 'none';
                xnei12[j].style.zIndex = 0;

            }
            ;
            xnei12[this.a].style.zIndex = 30;
            xuan[0].style.zIndex = 30;
            xuan11[0].style.zIndex = 30;
            xnei12[this.a].style.display = 'block';

        }
        bnli1[i].onmouseout = function () {
            xnei12[this.a].style.zIndex = 0;
            xnei12[this.a].style.display = 'none';
            xuan[0].style.zIndex = 0;
            xuan11[0].style.zIndex = 0;

        };

    }
    for (var b = 0; b < xnei12.length; b++) {
        xnei12[b].index = b;
        xnei12[b].onmouseover = function () {
            this.style.zIndex = 30;
            this.style.display = 'block';
            bnli1[this.index].style.background = "#fff";
            xuan[0].style.zIndex = 30;
            xuan11[0].style.zIndex = 30;
        };
        xnei12[b].onmouseout = function () {
            this.style.zIndex = 0;
            this.style.display = 'none';
            xuan[0].style.zIndex = 0;
            xuan11[0].style.zIndex = 0;
            bnli1[this.index].style.background = ""
        };
    }
    ;

// 热门推荐
    var hot111 = $(".hot-left")[0]
    var tal111 = $("table", hot111)[0]
    var tds1 = $('td', tal111)
// console.log(tds)
    for (var i = 0; i < tds1.length; i++) {
        tds1[i].index = i;
        var we1 = $('.we', tds1[this.index])
        // console.log(we1)
        tds1[i].onmouseover = function () {
            we1[this.index].style.display = "block"
        }
        tds1[i].onmouseout = function () {
            we1[this.index].style.display = "none"
        }
    }

// 潮流前沿
    var hot1 = $(".hot11")
// var hot1=$('.hotbottom4',hot)
    // console.log(hot1)
    for (var i = 0; i < hot1.length; i++) {
        hot1[i].onmouseover = function () {
            var hot12 = $('img', this)[0];
// console.log(hot1)
            animate(hot12, {height: 116, width: 132})
        }
        hot1[i].onmouseout = function () {
            var hot12 = $('img', this)[0];
// console.log(hot1)
            animate(hot12, {height: 100, width: 100})
        }
    }
    ;


// 亲子

// console.log(tr1)
    function qinzi(a) {
        for (var i = 0; i < a.length; i++) {
            a[i].onmouseover = function () {
                var tr2 = $('img', this)[0];
// console.log(tr2)
                animate(tr2, {right: 30}, 500)
            }
            a[i].onmouseout = function () {
                var tr2 = $('img', this)[0];
// console.log(hot1)
                animate(tr2, {right: 10}, 500)
            };
        }
    }

    for (var k = 0; k < 6; k++) {
        var kids1 = $(".kids-neirong")[k]
        var tab22 = $('table', kids1)[0]
        var tr12 = $('td', kids1)
        qinzi(tr12)
    }
    ;

    for (var i = 0; i < 6; i++) {
        var nei2 = $(".nei2")[i]
        var ui4 = $("ul", nei2)[0]
        var li2 = $("li", ui4)
        qinzi(li2)
    }
    ;

    var nei11 = $('.nei1')
// console.log(nei11)
    for (var i = 0; i < nei11.length; i++) {
        nei11[i].onmouseover = function () {
            this.style.opacity = 0.8;
        }
        nei11[i].onmouseout = function () {
            this.style.opacity = 1;
        }
    }
    ;
    var kids = $('.kids-neirong')
    // console.log(kids)
    var arr2 = [];
    var flags11 = [];
    var f = true;
    for (var k = 0; k < kids.length; k++) {
        arr2.push(kids[k].offsetTop)
        flags11.push(true)
        // console.log(arr2)
    }
    // var ihs=document.documentElement.clientHeight
    // console.log(ih)
    window.onscroll = function () {
        var t = document.body.scrollTop || document.documentElement.scrollTop;
// console.log(img21)

        if (t > 1300) {
            if (f) {
                animate(bol1[0], {bottom: 50}, 500)
                f = false;
            }
        }
        if (t < 1300) {
            if (!f) {
                f = true;
                animate(bol1[0], {bottom: -700}, 500)

            }
        }
        if (t > document.documentElement.clientHeight) {
            if (ts) {
                animate(bodytop, {top: 0}, 500)
                ts = false;
            }
        }
        ;
        if (t < document.documentElement.clientHeight) {
            if (!ts) {
                ts = true;
            }
            animate(bodytop, {top: -50}, 500)

        }
        ;

// 页面加载
        function jiaz() {
            for (var i = 0; i < arr2.length; i++) {
                var img21 = $('img', kids[i])
                if (arr2[i] <= t + 300 && flags11[i]) {
                    flags11[i] = false;
                    for (var j = 0; j < img21.length; j++) {
                        img21[j].src = img21[j].getAttribute('asrc')
                    }
                }
            }
        }

        jiaz()
        if (cailikes <= t + 300 && ts1) {
            ts1 = false;
            for (var i = 0; i < caiimg.length; i++) {
                caiimg[i].src = caiimg[i].getAttribute('asrc')
            }
            ;
        }
        ;
//楼层挑战 

        function ttz() {
            for (var i = 0; i < arr2.length; i++) {
                if (arr2[i] < t + 300) {
                    for (var k = 0; k < title2.length; k++) {
                        title2[k].style.background = ''
                        title4.style.background = ''
                    }
                    ;
                    title2[i].style.background = '#64ebf3'
                }
            }
        };
        ttz()
        if (cailikes < t + 300) {
            for (var t = 0; t < title2.length; t++) {
                title2[t].style.background = ''
            }
            title4.style.background = '#64ebf3'
        }
        ;
    }

    title4.onclick = function () {
        animate(document.body, {scrollTop: cailikes - 70}, 500)
        animate(document.documentElement, {scrollTop: cailikes - 70}, 500)
    }
    function dinaji() {
        for (var t = 0; t < title2.length; t++) {
            title2[t].index = t
            title2[t].onclick = function () {
                // document.documentElement.scrollTop=arr[this.index]
                // document.body.scrollTop=arr[this.index]
                animate(document.body, {scrollTop: arr2[this.index] - 50}, 500)//将document。body对象的top值变成数组中span点钟位置的小标的第几个数。  谷歌适用
                animate(document.documentElement, {scrollTop: arr2[this.index] - 50}, 500)//火狐和ie适用
            };
        }
    }

    dinaji()

    var title3 = $('.title3')[0]
    title3.onclick = function () {
        animate(document.documentElement, {scrollTop: 0}, 500)
        animate(document.body, {scrollTop: 0}, 500)
    }
    var topimg1 = $('.top-img1')[0]
    var img3 = $('.img3', topimg1)[1]
    img3.onclick = function () {
        animate(document.documentElement, {scrollTop: 0}, 500)
        animate(document.body, {scrollTop: 0}, 500)
    }
})

