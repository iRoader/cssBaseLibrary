
// 问答数据接口
var global_list = {
	options: 10;
	init: function(){
		var options = {page_num: 10};
		/*
		* listtype:
		* 广场：1
		* 我问：2
		* 我听：3
		* 我答：4
		* 分类：5
		*/
		var _listTypeId = this.options.listtypeid = $("#listtypeid").data('listtypeid');
		this.controller(1, _listTypeId);
	},	//初始化

	controller: function(num, typeId){
		// 根据不同的 typeId 请求不同的借口
		swicth(typeId){
			case 1: 
				break;
			case 2:
				break;
			case 3:
				break;
			default:
				break;
		}
	},	//统一加载数据

	template: function(){

	},		//数据渲染模版

	page_error: function(){

	},	//页面加载失败

	page_nodata: function(infomsg){

	}	//请求成功没有data

}

global_list.init();