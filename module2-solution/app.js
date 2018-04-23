(function  () {
	

angular.module("ShoppingListCheckOff", [])
	
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);




ToBuyController.$inject = ["ShoppingListCheckOffService"];

function ToBuyController(ShoppingListCheckOffService){

	var buyCtrl = this;

	buyCtrl.buyItems = ShoppingListCheckOffService.getbuyItems();

	buyCtrl.buyItem = function(index){
		ShoppingListCheckOffService.buyItem(index);
	}
}



AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

function AlreadyBoughtController(ShoppingListCheckOffService){

	var broughtCtrl = this;

	broughtCtrl.broughtItems = ShoppingListCheckOffService.getBroughtItems();
}



function ShoppingListCheckOffService(){

	var service = this;


	var toBuy = [
		{ name: "cookies", quantity: 5 },
		{ name: "apples", quantity: 10 },
		{ name: "orrange", quantity: 5 },
		{ name: "mango", quantity: 15 },
		{ name: "avocado", quantity: 2 }
	];
	var brought = [];

	service.getbuyItems = function(){
		return toBuy;
	}

	service.getBroughtItems = function(){
		return brought;
	}

	service.buyItem = function(index){
		var items = toBuy.splice(index, 1);
		brought.push(items[0]);
	}

}


})();