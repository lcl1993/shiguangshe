var tplHome = require('../templates/home.string');
var util = require('../utils/fn.js');
SPA.defineView('home', {
  html: tplHome,

  plugins:['delegated'],

  bindEvents: {
    'show': function () {
      var mySwiper = new Swiper('#home-swiper', {
        loop: false,
        pagination: '.swiper-pagination',
      });

      // var fixScroll = this.widgets.fixScroll;
      // fixScroll.on('scroll', function (scroll) {
      //   if( this.y <= -161.72 ) {
      //     if($('.home-header').siblings().length > 0){
      //       ; //不执行
      //     } else {
      //       $('.home-header').after($('.home-nav').clone(true).addClass('.fixed'));
      //     }
      //   } else {
      //     $('.home-nav.fixed').remove();
      //   }
      // });
    }
  },

  bindActions:{
    'switch.tabs':function (e, data){
      //设置当前tab高亮
      util.setFocus(e.el);

    }
  }
});
