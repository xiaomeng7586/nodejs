//index.js
//获取应用实例
const app = getApp()

Page({
  onReady: function(){
    this.audioCtx = wx.getBackgroundAudioManager();
    this.audioCtx.src = this.data.musicList[this.data.count].src;
    // this.audioCtx.onPlay();
    this.audioCtx.title = this.data.musicList[this.data.count].name;
    this.audioCtx.singer = this.data.musicList[this.data.count].singer;
    var _this=this;
    this.audioCtx.onEnded(function(){
      _this.nextMusic();
    })
    // this.audioCtx.onStop(function () {
    //   _this.setData({
    //     playMusicImg: true,
    //   });
    // })
    var timers=setInterval(function(){
      // duration
      _this.setData({
        nowWidth: _this.audioCtx.currentTime / _this.audioCtx.duration*100+"%",
        bufferedWidth: _this.audioCtx.buffered / _this.audioCtx.duration * 100 + "%"
      })
      // buffered
    },1000)
    var newArr = [];
    for (var i = 0; i < _this.data.puzzleList.length; i++) {
      newArr[i] = _this.data.puzzleList[i];
    }
    newArr.sort(function () { return 0.5 - Math.random() })
    _this.setData({
      puzzleList: newArr
    })

  },
  data: {
    bufferedWidth:"0%",
    nowWidth:"0%",
    author:"",
    steps:0,
    congratulations:false,
    name: "光年之外",
    singer: "邓紫棋",
    showList:false,
    src:"http://132.232.41.183:8080/wxMusic/gnzw.mp3",
    poster:"",
    count:0,
    endImgs:"http://132.232.41.183:8080/wxImg/cat9.png",
    playImg:"http://132.232.41.183:8080/wxImg/play.png",
    pauseImg:"http://132.232.41.183:8080/wxImg/pause.png",
    playMusicImg:false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    musicList:[
      {
        name:"光年之外",
        singer:"邓紫棋",
        src:"http://132.232.41.183:8080/wxMusic/gnzw.mp3"
      },
      {
        name: "泡沫",
        singer: "邓紫棋",
        src: "http://132.232.41.183:8080/wxMusic/paomo.mp3"
      },
      {
        name: "喜欢你",
        singer: "邓紫棋",
        src: "http://132.232.41.183:8080/wxMusic/xhn.mp3"
      },
      {
        name: "童话镇",
        singer: "陈一发儿",
        src: "http://132.232.41.183:8080/wxMusic/thz.mp3"
      },
      {
        name: "DAY BY DAY",
        singer: "T-ara",
        src: "http://132.232.41.183:8080/wxMusic/daybyday.mp3"
      },
      {
        name: "心做し(Cover GUMI)",
        singer: "双笙",
        src: "http://132.232.41.183:8080/wxMusic/xinzuo.mp3"
      },
      {
        name: "花太香",
        singer: "任贤齐",
        src: "http://132.232.41.183:8080/wxMusic/huataixiang.mp3"
      },
      {
        name: "假如",
        singer: "信乐团",
        src: "http://132.232.41.183:8080/wxMusic/jiaru.mp3"
      },
      {
        name: "飘摇",
        singer: "周迅",
        src: "http://132.232.41.183:8080/wxMusic/piaoyao.mp3"
      },
      {
        name: "花心",
        singer: "周华健",
        src: "http://132.232.41.183:8080/wxMusic/huaxin.mp3"
      },
      {
        name: "云宫迅音",
        singer: "中央芭蕾舞团管弦乐队",
        src: "http://132.232.41.183:8080/wxMusic/ygxy.mp3"
      },
      {
        name: "星星点灯",
        singer: "郑智化",
        src: "http://132.232.41.183:8080/wxMusic/xxdd.mp3"
      },
      {
        name: "大浪淘沙",
        singer: "玄觞",
        src: "http://132.232.41.183:8080/wxMusic/dlts.mp3"
      },
      {
        name: "当你孤单你会想起谁",
        singer: "张栋梁",
        src: "http://132.232.41.183:8080/wxMusic/dngdnhxqs.mp3"
      },
      {
        name: "牵丝戏",
        singer: "银临 Aki阿杰",
        src: "http://132.232.41.183:8080/wxMusic/qsx.mp3"
      },
      {
        name: "五百年沧海桑田",
        singer: "郁钧剑",
        src: "http://132.232.41.183:8080/wxMusic/wbnchst.mp3"
      },
      {
        name: "独角戏",
        singer: "许茹芸",
        src: "http://132.232.41.183:8080/wxMusic/djx.mp3"
      },
      {
        name: "琴心",
        singer: "徐嘉良",
        src: "http://132.232.41.183:8080/wxMusic/qinxin.mp3"
      },
      {
        name: "丁香花",
        singer: "唐磊",
        src: "http://132.232.41.183:8080/wxMusic/dxh.mp3"
      },
      {
        name: "그 남자의 거짓말",
        singer: "泰仁",
        src: "http://132.232.41.183:8080/wxMusic/tairen.mp3"
      },
      {
        name: "回忆总想哭",
        singer: "姜玉阳",
        src: "http://132.232.41.183:8080/wxMusic/hyzxk.mp3"
      },
      {
        name: "brave heart",
        singer: "宮崎歩",
        src: "http://132.232.41.183:8080/wxMusic/braveHeart.mp3"
      },
      {
        name: "杀手",
        singer: "林俊杰",
        src: "http://132.232.41.183:8080/wxMusic/shashou.mp3"
      },
      {
        name: "单身情歌",
        singer: "林志炫",
        src: "http://132.232.41.183:8080/wxMusic/dsqg.mp3"
      },
      {
        name: "怀念青春",
        singer: "刘刚",
        src: "http://132.232.41.183:8080/wxMusic/hnqc.mp3"
      },
      {
        name: "后来",
        singer: "刘若英",
        src: "http://132.232.41.183:8080/wxMusic/houlai.mp3"
      },
      {
        name: "醉赤壁",
        singer: "林俊杰",
        src: "http://132.232.41.183:8080/wxMusic/zcb.mp3"
      },
      {
        name: "风筝误",
        singer: "刘珂矣",
        src: "http://132.232.41.183:8080/wxMusic/fzw.mp3"
      },
      {
        name: "伴君常开花一朵",
        singer: "潘军",
        src: "http://132.232.41.183:8080/wxMusic/bjckhyd.mp3"
      },
      {
        name: "痴心绝对",
        singer: "李圣杰",
        src: "http://132.232.41.183:8080/wxMusic/cxjd.mp3"
      },
      {
        name: "青城山下白素贞",
        singer: "鞠婧祎",
        src: "http://132.232.41.183:8080/wxMusic/qcsxbsz.mp3"
      },
      {
        name: "大圣歌",
        singer: "胡寅寅",
        src: "http://132.232.41.183:8080/wxMusic/dsg.mp3"
      },
      {
        name: "海尔兄弟",
        singer: "蒋小涵 唐亚男",
        src: "http://132.232.41.183:8080/wxMusic/hexd.mp3"
      },
      {
        name: "姐姐",
        singer: "贾盛强",
        src: "http://132.232.41.183:8080/wxMusic/jiejie.mp3"
      },
      {
        name: "ButterFly",
        singer: "和田光司",
        src: "http://132.232.41.183:8080/wxMusic/ButterFly.mp3"
      },
      {
        name: "逍遥叹",
        singer: "胡歌",
        src: "http://132.232.41.183:8080/wxMusic/xyt.mp3"
      },
      {
        name: "白龙马",
        singer: "樊竹青",
        src: "http://132.232.41.183:8080/wxMusic/blm.mp3"
      },
      {
        name: "通天大道宽又阔",
        singer: "崔京浩 三叶草演唱组",
        src: "http://132.232.41.183:8080/wxMusic/ttddkyk.mp3"
      },
      {
        name: "就这样走",
        singer: "陈小涛",
        src: "http://132.232.41.183:8080/wxMusic/jzyz.mp3"
      },
      {
        name: "太多",
        singer: "陈冠蒲",
        src: "http://132.232.41.183:8080/wxMusic/taiduo.mp3"
      },
      {
        name: "有没有人告诉你",
        singer: "陈楚生",
        src: "http://132.232.41.183:8080/wxMusic/ymyrgsn.mp3"
      },
      {
        name: "晚安喵",
        singer: "艾索",
        src: "http://132.232.41.183:8080/wxMusic/wam.mp3"
      }


 
    ],
    puzzleList:[
      { id: 1, src:"http://132.232.41.183:8080/wxImg/cat1.png"},
      { id: 2, src: "http://132.232.41.183:8080/wxImg/cat2.png" },      
      { id: 3, src: "http://132.232.41.183:8080/wxImg/cat3.png" },
      { id: 4, src: "http://132.232.41.183:8080/wxImg/cat4.png" },   
      { id: 5, src: "http://132.232.41.183:8080/wxImg/cat5.png" }, 
      { id: 6, src: "http://132.232.41.183:8080/wxImg/cat6.png" },                                
      { id: 7, src: "http://132.232.41.183:8080/wxImg/cat7.png" },
      { id: 9, src: "http://132.232.41.183:8080/wxImg/puzz0.png" },
      { id: 8, src: "http://132.232.41.183:8080/wxImg/cat8.png" },      
    ]
  },
  //事件处理函数
  changePosition:function(e){
    this.setData({
      showList: false
    })
    var _this=this;
    var arr1=[];
    var arr2=[];
    var arr3=[];
    for (var i = 0; i < _this.data.puzzleList.length;i++){
      if(i<3){
        arr1.push(_this.data.puzzleList[i].id);
      }else if(i>=3&&i<6){
        arr2.push(_this.data.puzzleList[i].id);
      }else {
        arr3.push(_this.data.puzzleList[i].id);
      }
    }
    var allArr=[arr1,arr2,arr3];
    // console.log(e.currentTarget.id);    
    // console.log(arr1);
    // console.log(arr2);
    // console.log(arr3);    
    // console.log(allArr);     
    for(var i=0;i<allArr.length;i++){
        for(var j=0;j<allArr[i].length;j++){
          if (allArr[i][j] == e.currentTarget.id){
            // console.log("当前元素为" + e.currentTarget.id+"，位置为:A"+i+j+",相邻元素为：");
            var targetIndex;
            var clickIndex = i * 3 + j;
            if (allArr[i-1]){
              if (allArr[i - 1][j]==9){
                targetIndex =(i-1)*3+j;
              }
            }
            if (allArr[i+1]) {
              if (allArr[i + 1][j]==9){
                targetIndex = (i + 1) * 3 + j;
              }
            }
            if (allArr[i][j-1]) {
              if (allArr[i][j - 1]==9){
                targetIndex=i*3+(j-1);
              }
            }
            if (allArr[i][j+1]) {
              if (allArr[i][j + 1]==9){
                targetIndex=i*3+(j+1);
              }
            }
            // console.log("点击的索引：" + clickIndex + ",空格的索引:" + targetIndex);
            if (targetIndex || targetIndex==0){
              var newlist = _this.data.puzzleList;
              var obj = _this.data.puzzleList[targetIndex];
              newlist[targetIndex] = _this.data.puzzleList[clickIndex];
            newlist[clickIndex] = obj;
              _this.setData({
              puzzleList: newlist
            })
              var newstep = _this.data.steps;
              newstep++;
              console.log(newstep);
              _this.setData({
                steps: newstep
              })
          }
          }
        }
    };   
    var flags = true;
    for (var i = 0; i < _this.data.puzzleList.length; i++) {
      if (i == _this.data.puzzleList[i].id-1) {
        continue;
      } else {
        flags = false;
      }
    }
    if (flags) {
      var endList = _this.data.puzzleList;
      endList[endList.length - 1].id = 10;
      endList[endList.length - 1].src = _this.data.endImgs;
      _this.setData({
        puzzleList: endList
      });
      _this.setData({
        congratulations:true
      })
    }
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  playMusic:function(){
      this.setData({
        playMusicImg: false,
        name: this.data.musicList[this.data.count].name
      });
    // this.audioCtx.src = this.data.musicList[this.data.count].src;
    this.audioCtx.play();
    
  },
  pauseMusic:function(){
    this.setData({
      playMusicImg: true,
    });
    this.audioCtx.pause();
    
  },
  prevMusic:function(){
    var newcount=this.data.count;
    newcount++;
    if (newcount<0){
      newcount = this.data.musicList.length-1;
    }
    this.setData({
      count: newcount,
      playMusicImg: false,
      name: this.data.musicList[newcount].name,
      singer: this.data.musicList[newcount].singer
    });
    
    // this.audioCtx.onPlay();
    this.audioCtx.src = this.data.musicList[newcount].src;
    this.audioCtx.title = this.data.musicList[newcount].name;
    this.audioCtx.singer = this.data.musicList[newcount].singer;
  },
  nextMusic:function(){
    var newcount=this.data.count;
    newcount++;
    if (newcount > this.data.musicList.length - 1) {
      newcount = 0;
    }
    this.setData({
      count: newcount,
      playMusicImg: false,
      name: this.data.musicList[newcount].name,
      singer: this.data.musicList[newcount].singer
    });

    // this.audioCtx.onPlay();
    this.audioCtx.src = this.data.musicList[newcount].src;
    this.audioCtx.title = this.data.musicList[newcount].name;
    this.audioCtx.singer = this.data.musicList[newcount].singer;
  },
  choiseMusic:function(e){
    var newcount = e.currentTarget.dataset.index;
    this.setData({
      count: newcount,
      playMusicImg: false,
      name: this.data.musicList[newcount].name,
      singer: this.data.musicList[newcount].singer
    });

    // this.audioCtx.onPlay();
    this.audioCtx.src = this.data.musicList[newcount].src;
    this.audioCtx.title = this.data.musicList[newcount].name;
    this.audioCtx.singer = this.data.musicList[newcount].singer;
  },
  getMusicList:function(){
    this.setData({
      showList: !this.data.showList
    })
  },
  hideList:function(){
    this.setData({
      showList: false
    })
  },
  changeTime:function(e){
    console.log("222");
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
