/** 版本 2021_09_03 */

//設定選單的關鍵字事件
function updateFunction (el, binding) {
    let options = binding.value || {};
    $(el).select2(options).on("select2:select", (e) => {
        el.dispatchEvent(new Event('change', { target: e.target }));
    });
}
//定義選單的關鍵字
Vue.directive('select', {
    inserted: updateFunction ,
    componentUpdated: updateFunction,
});

// Mixins 是一種讓元件共用功能的方法，使用方式即是將共用功能以物件（以下稱為 mixin object）的方式傳入 mixins option。
var mixin = {

    data: {

        // 用來識別該頁面(每次重新整理頁面)都會不一樣
        GUID:"",

        //用來暫存目前所選的項目，其參數值
        tempValueParams:{},

        // 用於表格在搜尋時，若沒資料時，呈現給使用者的訊息。
        msgSearchResultEmpty:"查無和輸入條件相符的資料，請重新查詢！",
        // 用於表格在呈現明細時，若沒資料時，呈現給使用者的訊息。
        msgDetailResultEmpty:"該明細沒有資料！",
        // 用於表格在點選刪除該列時，詢問使用者的是否刪除訊息。
        msgConfirmDelete:"你確定要刪除此筆資料嗎?",

        msgKeyinInvalidIdentity:"請輸入正確格式的身分證字號",


        //表單上面 的 標題(title) 及 簡述(desc)
        titleTable: "查詢結果",
        descTable: "",

        placeholderDefaultKeyin: "請輸入",
        placeholderDefaultSelect: "請選擇",

        // 用於表格上 的 操作欄位名稱
        labelTableBrowse:"瀏覽",
        labelTableEdit:"修改",
        labelTablePrint:"列印",
        labelTableDel:"刪除",
        labelTableAction:"編輯",

        // 用於表單上 的 操作按鈕名稱
        btnAdd:"新增",
        btnEdit:"修改",
        btnSave:"儲存",
        btnClear:"清空",
        btnSubmit:"提交",

        // 用於表格上 的 操作按鈕名稱
        btnTableSelect:"查詢",
        btnTableAdd:"新增",
        btnTableSave:"儲存",
        btnTableOutput:"匯出",
        
        iconTableBrowse:"fa fa-search",
        btnTableBrowse:"瀏覽",
        iconTableEdit:"fa fa-pencil",
        btnTableEdit:"修改",
        iconTablePrint:"fa fa-print",
        btnTablePrint:"列印",
        iconTableDel:"fa fa-trash",
        btnTableDel:"刪除",
        iconTableChoose:"fa fa-hand-pointer-o",
        btnTableChoose:"選擇",   
        
        
        fileNameOutput:"output.csv",
        
        // 用於 決定彈出視窗呈現或隱藏
        modalStyleProcess: { display: "none" },

        // 用於 彈出視窗的動作(add-新增、edit-修改、browse-瀏覽)
        moduleProcessSubmit: "add",
        //moduleProcessSubmit: "edit",
        //moduleProcessSubmit: "browse",
        // 用於 彈出視窗的標題
        titleProcessSubmit: "新增資料",
        // 用於 彈出視窗的按鈕名稱
        btnProcessSubmit: "新增",

        totalCount: 0,
        // 用於表格上 呈現 的 陣列資料(也就是表格上的資料取決於這也存放於這)
        menuTable: [],

        // 縣市[選單]
        menuCity:[],
        // 地區[選單]
        menuTown:[],
        // 農作物[選單]
        menuCrop:[],
        // 農作物-品種[選單]
        menuVariety:[],

        // 年份[選單]
        menuYear:[],  
        // 期作[選單]
        //menuPeriod:["全年","裡作","一期作","二期作"],       
        menuPeriod:[
                    {Title:"請選擇",Code:""},
                    {Title:"全年",Code:"全年"},
                    {Title:"裡作",Code:"裡作"},
                    {Title:"一期作",Code:"一期作"},
                    {Title:"二期作",Code:"二期作"}
        ], 

        // 分頁設定-目前所在頁面
        pageAt: 1,
        // 分頁設定-頁面呈現筆數
        pageSize: 15,
        // 分頁設定-頁面總頁數
        pageCount: 0,   
        // 分頁設定-資料總筆數
        pageRowCount: 0,   

        //---------------------------------(明細專用)--------------------------------
        // 用於 決定彈出視窗呈現或隱藏(明細專用)
        modalStyleProcessDetail: { display: "none" },
        // 用於 彈出視窗的標題(明細專用)
        titleProcessSubmitDetail: "新增資料",
        // 用於 彈出視窗的按鈕名稱(明細專用)
        btnProcessSubmitDetail: "新增",
        // 用於 彈出視窗的動作(明細專用) (add-新增、edit-修改、browse-瀏覽)
        moduleProcessSubmitDetail: "add",
        //moduleProcessSubmitDetail: "edit",
        //moduleProcessSubmitDetail: "browse",
        // 用於表格(明細專用)上 呈現 的 陣列資料(也就是表格上的資料取決於這也存放於這)
        menuTableDetail: [],
        // 分頁設定(明細專用)-目前所在頁面
        pageAtDetail: 1,
        // 分頁設定(明細專用)-頁面呈現筆數
        pageSizeDetail: 5,
        // 分頁設定(明細專用)-頁面總頁數
        pageCountDetail: 0,   
        // 分頁設定(明細專用)-資料總筆數
        pageRowCountDetail: 0,  



        //---------------------------------[地圖專用]--------------------------------
        //備註:不能用 display : "none" 否則地圖實例會有問題，所以改用  visibility: hidden
        //所以先前的 display : "block" 也要改成 visibility:visible
        //而且 不可以使用 class="w3-modal"，因為這個類別也有使用 display : "none" 導致 map實例有問題
        //要使用自行定義的 class="w3-modal-map"
        // 用於 決定彈出視窗呈現或隱藏(地圖專用)
        modalStyleProcessMap: { 
            visibility: "hidden",
            zIndex: "90000"
        },

        //---------------------------------[地圖(子)專用]--------------------------------
        //備註:不能用 display : "none" 否則地圖實例會有問題，所以改用  visibility: hidden
        //所以先前的 display : "block" 也要改成 visibility:visible
        //而且 不可以使用 class="w3-modal"，因為這個類別也有使用 display : "none" 導致 map實例有問題
        //要使用自行定義的 class="w3-modal-map"
        // 用於 決定彈出視窗呈現或隱藏(地圖專用)
        modalStyleProcessMapSub: { 
            visibility: "hidden",
            zIndex: "90000"
        },


    },    
    methods: {


        // (TWD97X,TWD97Y) 轉換成 [Lon經度,Lat緯度]
        onTWD97ToLonLat: function(TWD97)
        {
            //回傳 [Lon經度,Lat緯度]
            TWD97[0] = parseFloat(TWD97[0]);
            TWD97[1] = parseFloat(TWD97[1]);
            return proj4("EPSG:3826", "EPSG:4326", TWD97);
        },
        onTWD97ToLonLat2: function(TWD97X,TWD97Y)
        {
            //回傳 [Lon經度,Lat緯度]
            return proj4("EPSG:3826", "EPSG:4326", [parseFloat(TWD97X), parseFloat(TWD97Y)]);
        },

        // (TWD97X,TWD97Y) 轉換成 [X,Y]
        onTWD97ToXY: function(TWD97)
        {
            //回傳 [X,Y]
            TWD97[0] = parseFloat(TWD97[0]);
            TWD97[1] = parseFloat(TWD97[1]);
            return this.onLonLatToXY(proj4("EPSG:3826", "EPSG:4326", TWD97));
        },
        onTWD97ToXY2: function(TWD97X,TWD97Y)
        {
            //回傳 [X,Y]
            return this.onLonLatToXY(proj4("EPSG:3826", "EPSG:4326", [parseFloat(TWD97X), parseFloat(TWD97Y)]));
        },


        // (Lon經度,Lat緯度) 轉換成 [TWD97X,TWD97Y]
        onLonLatToTWD97: function(LonLat)
        {
            //回傳 [TWD97X,TWD97Y]
            LonLat[0] = parseFloat(LonLat[0]);
            LonLat[1] = parseFloat(LonLat[1]);
            return proj4("EPSG:4326", "EPSG:3826", LonLat);
        },
        onLonLatToTWD972: function(Lon,Lat)
        {
            //回傳 [TWD97X,TWD97Y]
            return proj4("EPSG:4326", "EPSG:3826", [parseFloat(Lon), parseFloat(Lat)]);
        },

        // (Lon經度,Lat緯度) 轉換成 [X,Y]
        onLonLatToXY: function(LonLat)
        {
            //回傳 [X,Y]
            LonLat[0] = parseFloat(LonLat[0]);
            LonLat[1] = parseFloat(LonLat[1]);
            return ol.proj.fromLonLat(LonLat);
        },
        // (Lon經度,Lat緯度) 轉換成 [X,Y]
        onLonLatToXY2: function(Lon,Lat)
        {
            //回傳 [X,Y]
            return ol.proj.fromLonLat([parseFloat(Lon),parseFloat(Lat)]);
        },

        // (X,Y) 轉換成 [Lon經度,Lat緯度]
        onXYToLonLat: function(XY)
        {
            //回傳 [Lon經度,Lat緯度]
            XY[0] = parseFloat(XY[0]);
            XY[1] = parseFloat(XY[1]);
            return ol.proj.toLonLat(XY);
        },
        onXYToLonLat2: function(X,Y)
        {
            //回傳 [Lon經度,Lat緯度]
            return ol.proj.toLonLat([parseFloat(X),parseFloat(Y)]);
        },

        // (X,Y) 轉換成 [TWD97X,TWD97Y]
        onXYToTWD97: function(XY)
        {
            //回傳 [TWD97X,TWD97Y]
            XY[0] = parseFloat(XY[0]);
            XY[1] = parseFloat(XY[1]);
            return this.onLonLatToTWD97(ol.proj.toLonLat(XY));
        },
        onXYToTWD972: function(X,Y)
        {
            //回傳 [TWD97X,TWD97Y]
            return this.onLonLatToTWD97(ol.proj.toLonLat([parseFloat(X),parseFloat(Y)]));
        },

        getPleaseEnterField: function(ParamName) { return "請輸入 " + ParamName + " ！"; },
        getPleaseChooseField: function(ParamName) { return "請選擇 " + ParamName + " ！"; },
        getErrorMessageParamEmpty: function(ParamName) { return "操作失敗，(" + ParamName + ")不可為空！"; },

        // 請求後端窗口(統一使用這個)
        ajax: function(url,params,callBack,callBackError){

            axios
            .post(website_prefix + 'api/agri' + url, params)
            .then(response => {

                console.log("Mixins 定義的ajax()");    
                if(callBack != null){ callBack(response); }
            })
            .catch(function (error) { 
                
                if( callBackError != undefined && callBackError != null){ 
                    callBackError(error); 
                }else{ 
                    alert("發生錯誤!"); 
                    console.log(error); 
                } 
            });
        },
        ajaxTo: function(url,params,callBack,callBackError){

            axios
            .post(website_prefix + url, params)
            .then(response => {

                console.log("Mixins 定義的ajaxTo()");    
                if(callBack != null){ callBack(response); }
            })
            .catch(function (error) { 
                
                if( callBackError != undefined && callBackError != null){ 
                    callBackError(error); 
                }else{ 
                    alert("發生錯誤!"); 
                    console.log(error); 
                } 
            });
        },


        // 設定彈出視窗的作業模式
        onSetModalProcessModule: function(module){

            if(module == "add"){
    
            //this.titleProcessSubmit = "新增資料";
            this.titleProcessSubmit = "新增";
            this.btnProcessSubmit = "新增";
            this.moduleProcessSubmit = module;
            
            }else if(module == "edit"){
    
            //this.titleProcessSubmit = "修改資料";
            this.titleProcessSubmit = "修改";
            this.btnProcessSubmit = "修改";
            this.moduleProcessSubmit = module;
    
            }
        },

        // 設定彈出視窗的作業模式(明細專用)
        onSetModalProcessModuleDetail: function(module){

            if(module == "add"){
    
            this.titleProcessSubmitDetail = "新增資料";
            this.btnProcessSubmitDetail = "新增";
            this.moduleProcessSubmitDetail = module;
            
            }else if(module == "edit"){
    
            this.titleProcessSubmitDetail = "修改資料";
            this.btnProcessSubmitDetail = "修改";
            this.moduleProcessSubmitDetail = module;
    
            }else{
    
            this.titleProcessSubmitDetail = "瀏覽資料";
            this.btnProcessSubmitDetail = "關閉視窗";
            this.moduleProcessSubmitDetail = "browse";
            }
        },

        // 前往指定頁面[點選頁碼]
        onPageNum: function(num){

            this.pageAt = parseInt(num);
            this.onSelect();
        },
        // 前往指定頁面[點選頁碼](明細專用)
        onPageNumDetail: function(num){
    
            this.pageAtDetail = parseInt(num);
            this.onSelectDetail();
        },  
        // 前往指定頁面[點選頁碼](明細專用2)
        onPageNumDetail2: function(num){
    
            this.pageAtDetail2 = parseInt(num);
            this.onSelectDetail2();
        }, 
        // 前往指定頁面[輸入頁碼]    
        onPageGo: function(go){
    
            this.pageAt = parseInt(go);
            this.onSelect();
        },
        // 前往指定頁面[輸入頁碼](明細專用)
        onPageGoDetail: function(go){
    
            this.pageAtDetail = parseInt(go);
            this.onSelectDetail();
        },
        // 前往指定頁面[輸入頁碼](明細專用2)
        onPageGoDetail2: function(go){
    
            this.pageAtDetail2 = parseInt(go);
            this.onSelectDetail2();
        },
        // 前往上一頁        
        onPagePrevious: function(){
    
            this.pageAt -= 1;
            this.onSelect();
        },
        // 前往上一頁(明細專用)
        onPagePreviousDetail: function(){
    
            this.pageAtDetail -= 1;
            this.onSelectDetail();
        },
        // 前往上一頁(明細專用2)
        onPagePreviousDetail2: function(){
    
            this.pageAtDetail2 -= 1;
            this.onSelectDetail2();
        },
        // 前往下一頁            
        onPageNext: function(){
    
            this.pageAt += 1;
            this.onSelect();
        },
        // 前往下一頁(明細專用)
        onPageNextDetail: function(){
    
            this.pageAtDetail += 1;
            this.onSelectDetail();
        },
        // 前往下一頁(明細專用)
        onPageNextDetail2: function(){
    
            this.pageAtDetail2 += 1;
            this.onSelectDetail2();
        }, 

        // 取得 縣市[選單]
        getMenuCity: function(params,callBack) 
        {
            /* 範本 (參數也可不指定 CITY_ID )
                params = {
                    OrderBy:"CITY_ID Desc"
                }
            */
            const _this = this;
            this.ajax("/GetMenuCity",params,function(response){ 

                _this.menuCity = response.data.menu;  
                if(callBack != null){ callBack(response); }
            
            });
        },
        // 取得 縣市[代碼]
        getMenuCityCode: function(Title) 
        {
            var Code = "";

            for(var i=0 ; i< this.menuCity.length ; i++){

                if(this.menuCity[i].Title == Title){
                    
                    Code = this.menuCity[i].Code;
                }
            }

            return Code;
        },

        // 取得 地區[選單]
        getMenuTown: function(params,callBack) 
        {
            /* 範本 (參數也可不指定 CITY_ID )
                params = {
                    CITY_ID:"E"
                    OrderBy:"TOWN_ID Desc"
                }
            */
            const _this = this;
            this.ajax("/GetMenuTown",params,function(response){ 
                
                _this.menuTown = response.data.menu;  
                if(callBack != null){ callBack(response); }
            
            });
        },
        // 取得 地區[代碼]
        getMenuTownCode: function(Title) 
        {
            var Code = "";

            for(var i=0 ; i< this.menuTown.length ; i++){

                if(this.menuTown[i].Title == Title){
                    
                    Code = this.menuTown[i].Code;
                }
            }

            return Code;
        },

        // 取得 農作物[選單]
        getMenuCrop: function(params) 
        {
            const _this = this;
            this.ajax("/GetMenuCrop",params,function(response){ _this.menuCrop = response.data.menu;  });
        },  
        // 取得 農作物[代碼]
        getMenuCropCode: function(Title) 
        {
            var Code = "";

            for(var i=0 ; i< this.menuCrop.length ; i++){

                if(this.menuCrop[i].Title == Title){
                    
                    Code = this.menuCrop[i].Code;
                }
            }

            return Code;
        },

        // 取得 農作物-品種[選單]
        getMenuVariety: function(params) 
        {
            const _this = this;
            this.ajax("/GetMenuVariety",params,function(response){ _this.menuVariety = response.data.menu;  });
        },  

        // 取得 年份[選單]
        getMenuYear: function(params) 
        {
            const _this = this;
            this.ajax("/GetMenuYear",params,function(response){ _this.menuYear = response.data.menu;  });
        }, 
        // 取得預設民國年
        getDefaultChinaYear: function () {
            let year = new Date().getFullYear();
            var temp = year - 1911;
            return temp;
        },        


        // 是否為空的欄位
        isEmptyValue: function(value){

            var state = false;

            if(value == ''){

                state = true;
            }

            return state;
        },
        // 是否為無效的身分證號碼
        isInvalidIdentityCode: function(value){

            var state = false;

            tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"                     
            A1 = new Array (1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
            A2 = new Array (0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
            Mx = new Array (9,8,7,6,5,4,3,2,1,1);
            
            if ( value.length != 10 )
            {
                state = true;
            } 

            i = tab.indexOf( value.charAt(0) );
            if ( i == -1 )
            {
                state = true;
            } 

            sum = A1[i] + A2[i]*9;
            for ( i=1; i<10; i++ ) {
                v = parseInt( value.charAt(i) );
                
                if ( isNaN(v) ) {
                    state = true;
                }
                sum = sum + v * Mx[i];
            }

            if ( sum % 10 != 0 )
            {
                state = true;
            } 

            return state;
        }




    }
}