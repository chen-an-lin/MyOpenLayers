window.onload = function () {

  var app = new Vue({
    el: '#app',
    mixins: [mixin],  
    data: {
      // 地圖物件
      map:{},
      map3d:{},
      menu:{

        empty_message:"該目錄沒有任何項目",
        //主選單(Main)
        main:{
          select:"Layer",
          list:[
            { name:"Controller",text:"Controller",title:"相關控制項" },
            { name:"Layer",text:"Layer",title:"相關圖層加載" },
            { name:"Values",text:"Values",title:"相關開關設定" },
            { name:"News",text:"News",title:"尚未完成" },
            { name:"Contact",text:"Contact",title:"尚未完成" },
            { name:"Clients",text:"Clients",title:"尚未完成" },
            { name:"Partners",text:"Partners",title:"尚未完成" },
          ]
        },

        //副選單(Controller)
        sub_controller:{

          show:true,
          name:"Controller",
          list:[
            {
              class:["fas","fa-search-plus"],
              name:"ZoomIn",
              text:"ZoomIn",
              title:"視野放大(拉近)"
            },
            {
              class:["fas","fa-search-minus"],
              name:"ZoomOut",
              text:"ZoomOut",
              title:"視野縮小(拉遠)"
            },
            {
              class:["fas","fa-crosshairs"],
              name:"Position",
              text:"Position",
              title:"定位校正"
            },
            {
              class:["fas","fa-globe"],
              name:"Model",
              text:"Model",
              title:"地圖模式(2D、3D)"
            },
            {
              class:["fas","fa-cog"],
              name:"Setting",
              text:"Setting",
              title:"相關設定"
            },
            
          ]
        }, 

        //副選單(Layer)
        sub_layer:{ 
          show:true,
          select:"",
          name:"Layer",
          list:[
            {
              show:false,
              name:"LayerPointMenu",
              text:"LayerPointMenu",
              list:[

                
                {
                  class:["fas","fa-map-marker-alt"],
                  name:"YoubikeTaipei",
                  text:"YoubikeTaipei",
                  title:"Youbike(台北市)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/AgriWisdom/GeoJsonYoubikeStand?CITY_ID=A",
                  fill_color : "rgba(151, 124, 0, 0.5)",
                  stroke_color : "rgba(151, 124, 0, 1)",
                  lat:25.065339979631474,
                  lon:121.55219310113631,
                  zoom:13,
                },
                {
                  class:["fas","fa-map-marker-alt"],
                  name:"YoubikeNewTaipei",
                  text:"YoubikeNewTaipei",
                  title:"Youbike(新北市)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/AgriWisdom/GeoJsonYoubikeStand?CITY_ID=F",
                  fill_color : "rgba(151, 124, 0, 0.5)",
                  stroke_color : "rgba(151, 124, 0, 1)",
                  lat:25.034054491861724,
                  lon:121.4301681518551,
                  zoom:13,
                },
                {
                  class:["fas","fa-map-marker-alt"],
                  name:"YoubikeTaoyuan",
                  text:"YoubikeTaoyuan",
                  title:"Youbike(桃園市)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/AgriWisdom/GeoJsonYoubikeStand?CITY_ID=H",
                  fill_color : "rgba(151, 124, 0, 0.5)",
                  stroke_color : "rgba(151, 124, 0, 1)",
                  lat:24.97600437101046,
                  lon:121.26269594038854,
                  zoom:13,
                },
                {
                  class:["fas","fa-map-marker-alt"],
                  name:"YoubikeHsinchu",
                  text:"YoubikeHsinchu",
                  title:"Youbike(新竹市)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/AgriWisdom/GeoJsonYoubikeStand?CITY_ID=O",
                  fill_color : "rgba(151, 124, 0, 0.5)",
                  stroke_color : "rgba(151, 124, 0, 1)",
                  lat:24.797751144038216,
                  lon:120.98498297471002,
                  zoom:14,
                },                
                {
                  class:["fas","fa-map-marker-alt"],
                  name:"YoubikeHsinchu",
                  text:"YoubikeHsinchu",
                  title:"Youbike(新竹市)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/AgriWisdom/GeoJsonYoubikeStand?CITY_ID=O",
                  fill_color : "rgba(151, 124, 0, 0.5)",
                  stroke_color : "rgba(151, 124, 0, 1)",
                  lat:24.797751144038216,
                  lon:120.98498297471002,
                  zoom:14,
                }



                
              ]
            },
            {
              show:false,
              name:"LayerLineMenu",
              text:"LayerLineMenu",
              list:[]
            },
            {
              show:false,
              name:"LayerPlaneMenu",
              text:"LayerPlaneMenu",
              list:[

                {
                  class:["fas","fa-layer-group"],
                  name:"TaiwanArea",
                  text:"TaiwanArea",
                  title:"全台行政區",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/TaiwanArea",
                  fill_color : "rgba(0, 114, 14, 0.5)",
                  stroke_color : "rgba(0, 0, 255, 1)",
                  lat:23.636305782938166,
                  lon:120.98597753301223,
                  zoom:8,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"CityArea",
                  text:"CityArea",
                  title:"全台行政區(不含高雄)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/CityArea",
                  fill_color : "rgba(0, 114, 14, 0.5)",
                  stroke_color : "rgba(0, 0, 0, 1)",
                  lat:23.636305782938166,
                  lon:120.98597753301223,
                  zoom:8,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"TaiwanGrid(2km)",
                  text:"TaiwanGrid(2km)",
                  title:"全台網格(2km)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/Api/AgriWeather/GeoJson",
                  fill_color : "rgba(0, 0, 0, 0)",
                  stroke_color : "rgba(70, 117, 0, 1)",
                  lat:22.927226566467297,
                  lon:120.52913734937295,
                  zoom:10,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"BigArea",
                  text:"BigArea",
                  title:"高雄大區",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/BigArea",
                  fill_color : "rgba(151, 124, 0, 0.5)",
                  stroke_color : "rgba(151, 124, 0, 1)",
                  lat:22.927226566467297,
                  lon:120.52913734937295,
                  zoom:10,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"CityWimbledon",
                  text:"CityWimbledon",
                  title:"溫網室圖資(高雄)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/CityWimbledon",
                  fill_color : "rgba(0, 0, 255, 0.5)",
                  stroke_color : "rgba(0, 0, 255, 1)",
                  lat:22.8239032897049,
                  lon:120.51095793320715,
                  zoom:11,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"Fish",
                  text:"Fish",
                  title:"養殖漁業生產區",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/fish",
                  fill_color : "rgba(0, 96, 0, 0.5)",
                  stroke_color : "rgba(0, 96, 0, 1)",
                  lat:22.812956183468486,
                  lon:120.22960924134873,
                  zoom:14,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"Rice",
                  text:"Rice",
                  title:"集團產區(稻米)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/Rice",
                  fill_color : "rgba(75, 0, 9, 0.5)",
                  stroke_color : "rgba(75, 0, 9, 1)",
                  lat:22.881275967274135,
                  lon:120.55793515377138,
                  zoom:13,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"Fruit",
                  text:"Fruit",
                  title:"集團產區(優良水果)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/Rice",
                  fill_color : "rgba(75, 0, 9, 0.5)",
                  stroke_color : "rgba(75, 0, 9, 1)",
                  lat:22.881275967274135,
                  lon:120.55793515377138,
                  zoom:12,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"AgriOperate",
                  text:"AgriOperate",
                  title:"農業經營專區範圍",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/agri_operate",
                  fill_color : "rgba(81, 81, 10, 0.5)",
                  stroke_color : "rgba(81, 81, 10, 1)",
                  lat:22.857840935558784,
                  lon:120.5076729388335,
                  zoom:13,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"Producity",
                  text:"Producity",
                  title:"農地生產力分級一至七級",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/Producity",
                  fill_color : "rgba(116, 58, 3, 0.5)",
                  stroke_color : "rgba(116, 58, 3, 1)",
                  lat:22.716077664581817,
                  lon:120.3964884910906,
                  zoom:11,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"ImportantProdution",
                  text:"ImportantProdution",
                  title:"重要農業生產區",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/important_prodution",
                  fill_color : "rgba(61, 120, 7, 0.5)",
                  stroke_color : "rgba(61, 120, 7, 1)",
                  lat:22.697074887858435,
                  lon:120.36368209926282,
                  zoom:11,
                },  
                {
                  class:["fas","fa-layer-group"],
                  name:"OrganicDistributed",
                  text:"OrganicDistributed",
                  title:"有機農場分布圖",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/organic_distributed",
                  fill_color : "rgba(39, 39, 2, 0.5)",
                  stroke_color : "rgba(39, 39, 2, 1)",
                  lat:22.952907884719664,
                  lon:120.43438743824287,
                  zoom:10,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"OrganicProduce",
                  text:"OrganicProduce",
                  title:"集團產區(有機農業)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/organic_produce",
                  fill_color : "rgba(255, 88, 0, 0.5)",
                  stroke_color : "rgba(255, 88, 0, 1)",
                  lat:22.976784434729325,
                  lon:120.55306420513541,
                  zoom:16,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"FruitProduce",
                  text:"FruitProduce",
                  title:"集團產區(契作水果)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/fruit_produce",
                  fill_color : "rgba(0, 96, 0, 0.5)",
                  stroke_color : "rgba(0, 96, 0, 1)",
                  lat:22.831249059449732,
                  lon:120.45062244973036,
                  zoom:12,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"RiceProduce",
                  text:"RiceProduce",
                  title:"集團產區(契作稻米)",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/rice_produce",
                  fill_color : "rgba(0, 61, 7, 0.5)",
                  stroke_color : "rgba(0, 61, 7, 1)",
                  lat:22.878211497162482,
                  lon:120.55792819782604,
                  zoom:13,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"Irrigation",
                  text:"Irrigation",
                  title:"灌排渠道",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/Irrigation",
                  fill_color : "rgba(94, 0, 94, 0.5)",
                  stroke_color : "rgba(94, 0, 94, 1)",
                  lat:22.821512872914326,
                  lon:120.49294174463482,
                  zoom:11,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"FirstPublic",
                  text:"FirstPublic",
                  title:"一期公糧",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/Irrigation",
                  fill_color : "rgba(255, 187, 7, 0.5)",
                  stroke_color : "rgba(255, 187, 7, 1)",
                  lat:22.72731216525193,
                  lon:120.40249869334917,
                  zoom:11,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"SecondPublic",
                  text:"SecondPublic",
                  title:"二期公糧",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/second_public",
                  fill_color : "rgba(255, 187, 7, 0.5)",
                  stroke_color : "rgba(255, 187, 7, 1)",
                  lat:22.91815257007461,
                  lon:120.45327229716426,
                  zoom:12,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"YongLin",
                  text:"YongLin",
                  title:"永齡杉林有機農業專區",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/yonglin",
                  fill_color : "rgba(152, 75, 75, 0.5)",
                  stroke_color : "rgba(152, 75, 75, 1)",
                  lat:22.976329645165166,
                  lon:120.55382121440798,
                  zoom:16,
                },
                {
                  class:["fas","fa-layer-group"],
                  name:"Luzu",
                  text:"Luzu",
                  title:"路竹梓官蔬菜區",
                  source_url:"https://agri-data.kcg.gov.tw/Agri_API/api/agri/Geojson/luzu",
                  fill_color : "rgba(72, 72, 9, 0.5)",
                  stroke_color : "rgba(72, 72, 9, 1)",
                  lat:22.816925252710277,
                  lon:120.24668520859137,
                  zoom:12,
                },
              ]
            },
          ]
        }
      },

      //相關設定值
      config:{

        map:{
          //地圖模式(2D、3D)
          model:"2d",
          //地圖中心
          center:{
            lat:24.137288,
            lon:120.6869251, 
          },
          //地圖視野
          zoom:8
        }
      },

      //相關預設值
      default:{

        map:{
          //地圖模式(2D、3D)
          model:"2d",
          //地圖中心
          center:{
            lat:24.137288,
            lon:120.6869251, 
          },
          //地圖視野
          zoom:8
        }
      },

      //相關圖層
      layers:{


        //圖層(點)
        point:{
          //目前選擇
          select_feature:null,
          //圖層本體
          layer:[],
          //圖層樣式
          style:[],
        },

        //圖層(線)
        line:{
          //目前選擇
          select_feature:null,
          //圖層本體
          layer:[],
          //圖層樣式
          style:[],
        },

        //圖層(面)
        plane:{
          //目前選擇
          select_feature:null,
          //圖層本體
          layer:[],
          //圖層樣式
          style:[],
        },

      },

    },
    created : function () {

      window.vue = this;  //在created方法中，將變數全局化，主控台可用 window.vue._data 調閱或呼叫(若不用可以直接遮罩)
                          //例如:window.vue._data.map3d.getCesiumScene().setEnabled(false);
    },
    mounted: function () {

      // 實作地圖
      this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.XYZ({
              url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new ol.View({
          center: [0, 0],
          zoom: 2
        })
      });

      //實作地圖(3d)
      this.map3d = new olcs.OLCesium({map: this.map});
      const scene = this.map3d.getCesiumScene();
      //scene.terrainProvider = Cesium.createWorldTerrain();
      const camera = this.map3d.getCamera();

      //console.log(scene.globe.enableLighting);
      scene.globe.enableLighting = true;

      this.init();
      this.initEven(); 

      console.log(this.map);

    },
    watch : {
 
      //當[地圖模式]異動時
      "config.map.model":function(val) 
      { 
        if(this.config.map.model == "3d")
        { 
          this.map3d.setEnabled(true); 
        }
        else
        { 
          this.map3d.setEnabled(false);  
        }
      },
    },        
    methods: {

      //經緯度 轉 XY [0]為X、[1]為Y
      xyToLatLon: function(lat,lon) {  return ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857');},
      //XY 轉 經緯度 [0]為經度、[1]為緯度
      latlonToXY: function(x,y) {  return ol.proj.transform([x,y], 'EPSG:3857', 'EPSG:4326');},
      
      //初始動作
      init:function(){

        if(this.config.map.model == "3d")
        { 
          this.map3d.setEnabled(true); 
        }
        else
        {
          this.map3d.setEnabled(false); 
        }
        this.setCenter(this.default.map.center.lat,this.default.map.center.lon,this.default.map.zoom);
      },
      //初始事件
      initEven:function(){

        const _this = this;

        //地圖(單擊)
        //this.map.on('singleclick', function (e) { console.log(e); });
        //地圖(鼠標移動結束)
        this.map.on('moveend', function (e) { _this.syncSettings(); });
        //地圖(視野切換結束)
        this.map.on('zoomend', function (e) { _this.syncSettings(); });
        //地圖(點擊)
        this.map.on('click', function (e) {
                  
              //點擊事件:可參考-https://openlayers.org/en/latest/examples/hitdetect-vector.html
              var pixel = e.pixel;
              var features = [];

              _this.map.forEachFeatureAtPixel(pixel, function(feature, layer) {

                var LayerId = layer.get("LayerId");
                var FeatureValue = feature.values_;



                switch (LayerId) {

                  case "AgriWisdom":
                  case "ProvincialRoadMonitor":
                  case "StateRoadMonitor":
                  case "YoubikeTaipei":
                  case "YoubikeNewTaipei":
                  case "YoubikeTaoyuan":
                  case "YoubikeHsinchu":
                  case "YoubikeMiaoliCounty":
                  case "YoubikeTaichung":
                  case "YoubikeChanghuaCounty":  
                  case "YoubikeTainan": 
                  case "YoubikeKaohsiung": 
                  case "YoubikePingtungCounty":
                  case "YoubikeKinmenCounty":
                  case "SensorStation":

                      _this.layers.point.layer.select_feature = feature;
                      //因為用 layer.getSource().refresh(); 會重新載入API 故改成 layer.getSource().changed();
                      layer.getSource().changed();

                  break;
                  //面的部份
                  case 'TaiwanArea':
                  case 'CityArea': 
                  case 'TaiwanGrid(2km)':
                  case 'BigArea':
                  case 'CityWimbledon':
                  case 'Fish':
                  case 'Rice':  
                  case 'Fruit':  
                  case 'AgriOperate':  
                  case 'Producity':  
                  case 'ImportantProdution':  
                  case 'OrganicDistributed':  
                  case 'OrganicProduce':  
                  case 'FruitProduce':  
                  case 'RiceProduce': 
                  case 'Irrigation': 
                  case 'FirstPublic': 
                  case 'SecondPublic': 
                  case 'YongLin': 
                  case 'Luzu':   
                    
                    _this.layers.plane.layer.select_feature = feature;
                    //因為用 layer.getSource().refresh(); 會重新載入API 故改成 layer.getSource().changed();
                    layer.getSource().changed();

                  break;
                  default:
                } 
              });

        });

      },
      //同步設定
      syncSettings:function(){

        //把相關屬性同步到 config
        const view = this.map.getView();
        var center = this.map.getView().getCenter();

        //ol.proj.transform([13434807.047537947, 2770146.1957088714], 'EPSG:3857', 'EPSG:4326');
        var latlon = ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326');

        this.config.map.center.lat = latlon[1];
        this.config.map.center.lon = latlon[0];
        this.config.map.zoom = view.getZoom();

      },
      //視野調整至
      zoomTo: function(value)
      {
        const view = this.map.getView();
        view.setZoom(value);
        this.syncSettings();
      },
      //視野縮小
      zoomIn: function()
      {
        const view = this.map.getView();
        const zoom = view.getZoom();
        this.zoomTo(zoom + 1);
        this.syncSettings();
      },
      //視野放大
      zoomOut: function()
      {
        const view = this.map.getView();
        const zoom = view.getZoom();
        this.zoomTo(zoom - 1);
        this.syncSettings();
      },
      //設定中心點
      setCenter: function(lat,lon,zoom)
      { 
        this.map.getView().animate({
          center: ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'), 
          zoom:zoom,
          duration: 2500
        })
        
        /*
        this.map.getView().setCenter(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));
        this.map.getView().setZoom(8);
        */
      },
      //主選單(Main) 點擊事件
      onClickMenuMain:function(item){

        this.menu.main.select = item.name;
      },
      //副選單(Controller) 點擊事件
      onClickMenuSubController:function(item){

        switch (item.name) {
          case 'ZoomIn':
            this.zoomIn();
            break;
          case 'ZoomOut':
            this.zoomOut();
            break;
          case 'Position':
            this.setCenter(this.default.map.center.lat,this.default.map.center.lon,this.default.map.zoom);
            break; 
          case 'Setting':
            this.setCenter(this.config.map.center.lat,this.config.map.center.lon,this.config.map.zoom);
            break; 

          default:
              alert(item.name);
        }
      },
      //副選單(Layer) 點擊事件
      onClickMenuSubLayer:function(item){

        this.menu.sub_layer.select = item.name;
        
        switch (item.name) {
          //目錄的部分
          case 'LayerPointMenu':
          case 'LayerLineMenu':
          case 'LayerPlaneMenu':
            item.show = !item.show;
          break;

          //點的部份
          case "AgriWisdom":
          case "ProvincialRoadMonitor":
          case "StateRoadMonitor":
          case "YoubikeTaipei":
          case "YoubikeNewTaipei":
          case "YoubikeTaoyuan":
          case "YoubikeHsinchu":
          case "YoubikeMiaoliCounty":
          case "YoubikeTaichung":
          case "YoubikeChanghuaCounty":  
          case "YoubikeTainan": 
          case "YoubikeKaohsiung": 
          case "YoubikePingtungCounty":
          case "YoubikeKinmenCounty":
          case "SensorStation":

            //若 GeoJSON 的 坐標系(LonLat)，則統一用這個
            for (const key in this.layers.point.layer) 
            {
              this.map.removeLayer(this.layers.point.layer[key]);
            }

            if(this.layers.point.style[item.name] == null)
            {
                this.layers.point.style[item.name] = this.getStandardStylePoint({

                  color : item.color,
                });
            }

          
            if(this.layers.point.layer[item.name] == null)
            {
              const _this = this;
              this.layers.point.layer[item.name] = this.getStandardVectorPoint({

                style: this.layers.point.style[item.name],
                source_url: item.source_url,
                onLoad:function(Param){

                  var mResponseText = Param.XMLHttpRequest.responseText;
                  var mFeatures = (new ol.format.GeoJSON()).readFeatures(mResponseText,{ featureProjection: Param.Projection });
                  _this.layers.point.layer[item.name].getSource().addFeatures(mFeatures);
                }
              });
            }

            this.layers.point.layer[item.name].set("LayerId", item.name);
            this.map.addLayer(this.layers.point.layer[item.name]);
            this.setCenter(item.lat,item.lon,item.zoom);

            //必須在2D的情況下，加載圖層才能正常
            if(this.map3d.getEnabled()){  this.config.map.model = "2d"; }

          break;

          //面的部份
          case 'TaiwanArea':
          case 'CityArea': 

            //若 GeoJSON 的 坐標系(XY)，則統一用這個
            for (const key in this.layers.plane.layer) 
            {
              this.map.removeLayer(this.layers.plane.layer[key]);
            }

            if(this.layers.plane.style[item.name] == null)
            {
                this.layers.plane.style[item.name] = this.getStandardStylePlane({

                  fill_color : item.fill_color,
                  stroke_color : item.stroke_color
                });
            }

            if(this.layers.plane.layer[item.name] == null)
            {
              const _this = this;
              this.layers.plane.layer[item.name] = this.getStandardVectorPlane({

                style: this.layers.plane.style[item.name],
                source_url: item.source_url,
                onLoad:function(Param){

                  var mResponseText = Param.XMLHttpRequest.responseText;
                  var mFeatures = (new ol.format.GeoJSON()).readFeatures(mResponseText);
                  _this.layers.plane.layer[item.name].getSource().addFeatures(mFeatures);
                }
              });
            }
     
            //必須在2D的情況下，加載圖層才能正常
            if(this.map3d.getEnabled()){  this.config.map.model = "2d"; }

            this.layers.plane.layer[item.name].set("LayerId", item.name);
            this.map.addLayer(this.layers.plane.layer[item.name]);
            this.setCenter(item.lat,item.lon,item.zoom);

          break;
          case 'TaiwanGrid(2km)':
          case 'BigArea':
          case 'CityWimbledon':
          case 'Fish':
          case 'Rice':  
          case 'Fruit':  
          case 'AgriOperate':  
          case 'Producity':  
          case 'ImportantProdution':  
          case 'OrganicDistributed':  
          case 'OrganicProduce':  
          case 'FruitProduce':  
          case 'RiceProduce': 
          case 'Irrigation': 
          case 'FirstPublic': 
          case 'SecondPublic': 
          case 'YongLin': 
          case 'Luzu':            
            //若 GeoJSON 的 坐標系(LonLat)，則統一用這個
            for (const key in this.layers.plane.layer) 
            {
              this.map.removeLayer(this.layers.plane.layer[key]);
            }

            if(this.layers.plane.style[item.name] == null)
            {
                this.layers.plane.style[item.name] = this.getStandardStylePlane({

                  fill_color : item.fill_color,
                  stroke_color : item.stroke_color
                });
            }

            if(this.layers.plane.layer[item.name] == null)
            {
              const _this = this;
              this.layers.plane.layer[item.name] = this.getStandardVectorPlane({

                style: this.layers.plane.style[item.name],
                source_url: item.source_url,
                onLoad:function(Param){

                  var mResponseText = Param.XMLHttpRequest.responseText;
                  var mFeatures = (new ol.format.GeoJSON()).readFeatures(mResponseText,{ featureProjection: Param.Projection });
                  _this.layers.plane.layer[item.name].getSource().addFeatures(mFeatures);
                }
              });
            }
     
            //必須在2D的情況下，加載圖層才能正常
            if(this.map3d.getEnabled()){  this.config.map.model = "2d"; }

            this.layers.plane.layer[item.name].set("LayerId", item.name);
            this.map.addLayer(this.layers.plane.layer[item.name]);
            this.setCenter(item.lat,item.lon,item.zoom);
            
          break;
          
          default:
              alert(item.name);
        }
      },


      //取得 圖層-點(樣式)
      getStandardStylePoint:function(option){

        const _this = this;

        if(option == undefined || option == null){ option = {};  }

        if(option.image_anchor == undefined || option.image_anchor == null){ option.image_anchor = "0.5";  }
        if(option.image_src == undefined || option.image_src == null){ option.image_src = "0.5";  }

        /** 面積填充顏色 */
        if(option.fill_color == undefined || option.fill_color == null){ option.fill_color = "rgba(247, 155, 108, " + option.fill_alpha + ")";  }
        /** 面積框線顏色 */
        if(option.stroke_color == undefined || option.stroke_color == null){ option.stroke_color = "#D26900";  }
      
        return function (feature) 
        { 

          /* 用圖片轉3D會有問題
          if(_this.layers.point.layer.select_feature === feature)
          {          
            var mStyle = new ol.style.Style({

              image: new ol.style.Icon({
                  anchor: [0.5, 1],
                  src: 'https://agri-data.kcg.gov.tw/assets/img/red-point.svg'
              })
            });   
          }
          else
          {
            var mStyle = new ol.style.Style({

              image: new ol.style.Icon({
                  anchor: [0.5, 1],
                  src: 'https://agri-data.kcg.gov.tw/assets/img/blue-point.svg'
              })
            }); 

          }
          */

          var fill_color = option.fill_color;
          var stroke_color = option.stroke_color;

          if(_this.layers.point.layer.select_feature === feature)
          {          
            var mStyle = new ol.style.Style({
    
              image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                  color: 'rgba(255, 0, 0, 1)'
                }),
                stroke: new ol.style.Stroke({color: 'rgba(255, 0, 0, 1)', width: 1}),
              }),

              zIndex: 9999
      
            }); 
          }
          else
          {
            var mStyle = new ol.style.Style({
    
              image: new ol.style.Circle({
                radius: 5,
                //區塊外框線
                stroke: new ol.style.Stroke({
                  color: stroke_color, 
                  width: 1
                }),
                //區塊樣式
                fill: new ol.style.Fill({
                  color: fill_color
                }),
              }),

              zIndex: 9999
      
            });

          }

          
          return mStyle;  
        }


      },
      
      //取得 圖層-面(樣式)
      getStandardStylePlane:function(option){

        const _this = this;

        if(option == undefined || option == null){ option = {};  }
        /** 面積填充透明度 */
        if(option.fill_alpha == undefined || option.fill_alpha == null){ option.fill_alpha = "0.5";  }
        /** 面積填充顏色 */
        if(option.fill_color == undefined || option.fill_color == null){ option.fill_color = "rgba(247, 155, 108, " + option.fill_alpha + ")";  }
        /** 面積框線顏色 */
        if(option.stroke_color == undefined || option.stroke_color == null){ option.stroke_color = "#D26900";  }
        /** 面積框線寬度 */
        if(option.stroke_width == undefined || option.stroke_width == null){ option.stroke_width = 2;  }
        /** 面積內文字對齊方式 */
        if(option.text_align == undefined || option.text_align == null){ option.text_align = 'center';  }
        /** 面積內文字大小格式及字體 */
        if(option.text_font == undefined || option.text_font == null){ option.text_font = 'bold 12px Microsoft JhengHei';  }
        /** 面積內文字填充顏色 */
        if(option.text_fill_color == undefined || option.text_fill_color == null){ option.text_fill_color = '#000000';  }
        /** 面積內文字框線顏色 */
        if(option.text_stroke_color == undefined || option.text_stroke_color == null){ option.text_stroke_color = '#000000';  }    
        /** 面積內文字框線寬度 */
        if(option.text_stroke_width == undefined || option.text_stroke_width == null){ option.text_stroke_width = 0.5;  }


        if(option.zIndex == undefined || option.zIndex == null){ option.zIndex = 1;  }

        if(option.onGetText == undefined || option.onGetText == null || typeof(option.onGetText) != 'function'){

          option.onGetText = function(feature){ return "";  }

        }

        return function (feature) 
        { 

          var fill_alpha = option.fill_alpha;
          var fill_color = option.fill_color;

          var stroke_color = option.stroke_color;
          var stroke_width = option.stroke_width;
            
          var text_align = option.text_align;
          var text_font = option.text_font;
          var text_fill_color = option.text_fill_color;
          var text_stroke_color = option.text_stroke_color;
          var text_stroke_width = option.text_stroke_width;
          
          var zIndex = option.zIndex;
 
          if(_this.layers.plane.layer.select_feature === feature){

            var mStyle = new ol.style.Style({
      
              //區塊外框線
              stroke: new ol.style.Stroke({
                //外框線顏色
                color: 'rgba(0, 0, 0, 1)',
                //外框線寬度
                width: 1
              }),
      
              //區塊樣式
              fill: new ol.style.Fill({
                color: 'rgba(255, 0, 0, 0.5)',
              }),
      
              //文字樣式
              text: new ol.style.Text({
      
                //對齊方式
                textAlign: text_align,
                //大小格式
                font: text_font,
                //套用文字
                text: option.onGetText(feature),
                //文字本體
                fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 1)',
                }),
                //文字外框線
                stroke: new ol.style.Stroke({
                  color: 'rgba(0, 0, 0, 1)',
                  width: text_stroke_width
                }),
      
                overflow: true
              }),

              
              zIndex: zIndex   //備註 zIndex 越大會越上層
      
            });


          }else{

            var mStyle = new ol.style.Style({
      
              //區塊外框線
              stroke: new ol.style.Stroke({
                //外框線顏色
                color: stroke_color,
                //外框線寬度
                width: stroke_width
              }),
      
              //區塊樣式
              fill: new ol.style.Fill({
                color: fill_color
              }),
      
              //文字樣式
              text: new ol.style.Text({
      
                //對齊方式
                textAlign: text_align,
                //大小格式
                font: text_font,
                //套用文字
                text: option.onGetText(feature),
                //文字本體
                fill: new ol.style.Fill({
                  color: text_fill_color
                }),
                //文字外框線
                stroke: new ol.style.Stroke({
                  color: text_stroke_color,
                  width: text_stroke_width
                }),
      
                overflow: true
              }),

              
              zIndex: zIndex   //備註 zIndex 越大會越上層
      
            });

          }

          return mStyle;

        };

      },
      
      //取得 圖層-點(實例:GeoJSON)
      getStandardVectorPoint:function(option){

        if(option == undefined || option == null){ option = {};  }

        /** 圖層樣式 */
        if(option.style == undefined || option.style == null){ option.style = null;  }
        /** 資料來源網址 */
        if(option.source_url == undefined || option.source_url == null){ option.source_url = "";  }
        /** 資料來源格式 */
        if(option.source_format == undefined || option.source_format == null){ option.source_format = new ol.format.GeoJSON();  }
        /** 資料投影 */
        if(option.source_projection == undefined || option.source_projection == null){ option.source_projection = "EPSG:4326";  }
      
        var mVector = new ol.layer.Vector({

          style: option.style,
          source: new ol.source.Vector({

            format: new ol.format.GeoJSON(),
            projection: option.source_projection,
            loader: function (sourceExtent, resolution, projection) {
              
              var mXMLHttpRequest = new XMLHttpRequest();
              mXMLHttpRequest.open('GET', option.source_url);
              mXMLHttpRequest.onerror = option.onError;
              mXMLHttpRequest.onload = function () {

                if (mXMLHttpRequest.status == 200) 
                {
                  var Param = {

                    XMLHttpRequest:mXMLHttpRequest,
                    SourceExtent:sourceExtent,
                    Resolution:resolution,
                    Projection:projection
                  }

                  option.onLoad(Param);
                } 
                else 
                {
                  option.onError();
                }

              }
              mXMLHttpRequest.send();
            }

          })

        });

        return mVector;

      },

      //取得 圖層-面(實例:GeoJSON)
      getStandardVectorPlane:function(option){

        if(option == undefined || option == null){ option = {};  }

        /** 圖層樣式 */
        if(option.style == undefined || option.style == null){ option.style = null;  }
        /** 資料來源網址 */
        if(option.source_url == undefined || option.source_url == null){ option.source_url = "";  }
        /** 資料來源格式 */
        if(option.source_format == undefined || option.source_format == null){ option.source_format = new ol.format.GeoJSON();  }
        /** 資料投影 */
        if(option.source_projection == undefined || option.source_projection == null){ option.source_projection = "EPSG:4326";  }

        /** 數據加載時 */
        if(option.onLoad == undefined || option.onLoad == null || typeof(option.onLoad) != 'function')
        {
          option.onLoad = function(aXMLHttpRequest){ }
        }

        /** 程序錯誤時 */
        if(option.onError == undefined || option.onError == null || typeof(option.onError) != 'function')
        {
          option.onError = function(){ alert("加載失敗");  }
        }

        const _this = this;

        var mVector = new ol.layer.Vector({

          style: option.style,
          source: new ol.source.Vector({

            format: new ol.format.GeoJSON(),
            projection: option.source_projection,
            loader: function (sourceExtent, resolution, projection) {
              
              var mXMLHttpRequest = new XMLHttpRequest();
              mXMLHttpRequest.open('GET', option.source_url);
              mXMLHttpRequest.onerror = option.onError;
              mXMLHttpRequest.onload = function () {

                if (mXMLHttpRequest.status == 200) 
                {
                  var Param = {

                    XMLHttpRequest:mXMLHttpRequest,
                    SourceExtent:sourceExtent,
                    Resolution:resolution,
                    Projection:projection
                  }

                  option.onLoad(Param);
                } 
                else 
                {
                  option.onError();
                }
      
              }

              mXMLHttpRequest.send();
            }

          })

        });

        return mVector;
      },

    },
  });

}

