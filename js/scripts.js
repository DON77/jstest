window.onload = function () {
    var tl = new TimelineMax();
    var tl2 = new TimelineMax();
    var tl3 = new TimelineMax();
    var tl4 = new TimelineMax();
    tl4.addPause(4);
    tl3.add(TweenMax.to('.background', 4.2, {
        opacity: 1
    }));
    tl.add(TweenMax.to('.l-amp', .6, {
        left: '5%',
        top: '80'
    }));
    tl2.add(TweenMax.to('.r-amp', 1.1, {
        right: '3%',
        top: '80'
    }));
    tl.add(TweenMax.to('.l-greenland', .8, {
        opacity: 1,
        left: 0
    }));
    tl2.add(TweenMax.to('.r-greenland', .6, {
        opacity: 1,
        right: 0
    }));
    tl2.add(TweenMax.to('.grass', 1.2, {
        opacity: 1
    }));
    tl.add(TweenMax.to('.l-mountain', 1.2, {
        opacity: 1,
        left: 0,
        bottom: 220
    }));
    tl2.add(TweenMax.to('.r-mountain', 1.2, {
        opacity: 1,
        right: 0,
        bottom: 220
    }));
    tl.add(TweenMax.to('.back-mountain', .8, {
        opacity: 1,
        bottom: '320px'
    }));
    tl.add(TweenMax.to('.back-mountain', .8, {
        opacity: 1,
        bottom: '160px'
    }));
    tl.add(TweenMax.to('.logo', .4, {
        width: '800px',
        height: '664px',
        marginLeft: '-400px',
        marginTop: '-362px'
    }));
    tl.add(TweenMax.to('.logo', .2, {
        width: '730px',
        height: '606px',
        marginLeft: '-365px',
        marginTop: '-333px'
    }));
    tl.add(TweenMax.to('.logo', .4, {
        width: '701px',
        height: '582px',
        marginLeft: '-350px',
        marginTop: '-321px',
    }));
    tl2.add(TweenMax.to('.logo-light', .8, {
        width: '1662px',
        height: '1057px',
        marginLeft: '-831px',
        marginTop: '-550px'
    }));
    tl2.add(TweenMax.to('.logo-light', .8, {
        width: '1462px',
        height: '930px',
        marginLeft: '-731px',
        marginTop: '-490px'
    }));
    tl3.add(TweenMax.to('.logo-shadow', .6, {
        width: '1100px',
        height: '275px',
        marginLeft: '-550px',
        bottom: '0px'
    }));
    tl3.add(TweenMax.to('.logo-shadow', .4, {
        width: '907px',
        height: '227px',
        marginLeft: '-453px',
        bottom: '20px'
    }));
    tl.add(TweenMax.to('.logo-candies', .8, {
        width: '659px',
        height: '321px',
        marginLeft: '-330px',
        marginTop: '-249px'
    }));
    tl2.add(TweenMax.to('.candy2', .3, {
        width: '403px',
        height: '306px',
    }));
    tl3.add(TweenMax.to('.candy3', .5, {
        width: '650px',
        height: '310px',
    }));

    tl3.add(TweenMax.to('.cookie4', .3, {
        width: '21px',
        height: '15px',
        right: '22px',
        top: '17px'
    }));

    tl3.add(TweenMax.to('.cookie3', .3, {
        width: '30px',
        height: '20px',
        right: '68px',
        top: '27px'
    }));

    tl3.add(TweenMax.to('.cookie2', .3, {
        width: '45px',
        height: '30px',
        left: '110px',
        top: '45px'
    }));

    tl3.add(TweenMax.to('.cookie1', .3, {
        width: '70px',
        height: '45px',
        left: '35px',
        top: '75px'
    }));
    tl.add(TweenMax.to('.stars', .5, {
        width: 476,
        height: 435,
        left: 217,
        top: 292,
    }));


}