//引入模板
var tplIndex = require('../templates/index.string');

var util = require('../utils/fn.js');
//定义视图
SPA.defineView('index', {
  //装载html模板
  html: tplIndex,

  // 载入插件列表
  // delegated 实现tab事件的绑定
  plugins:['delegated'],

  // 定义子视图
  modules:[{
    name:'content',//子视图的名字，用作后边引用的句柄
    views:['home','circle','menu',"model","market"],
    defaultTag:'home',
    container:'.l-container'
  }],

  //绑定tab事件
  bindActions:{
    'switch.tabs':function (e, data){
      //设置当前tab高亮
      util.setFocus(e.el);

      // 切换子视图
      this.modules.content.launch(data.tag);
    }

    // 'exit': function (e, data) {
    //   util.setFocus(e.el);

      // 关闭视图
//       this.hide();
    // }
  }


  // 绑定视图的事件
  // bindEvents: {
  //   show: function () {
  //     var mySwiper = new Swiper('#home-swiper', {
  //       loop: false,
  //       pagination: '.swiper-pagination',
  //     });
  //   }
  // }
});
