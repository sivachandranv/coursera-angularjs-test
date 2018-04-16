(function () {


angular.module("LunchCheck", [])

	.controller("LunchCheckController", LunchCheckController);


LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope){

	$scope.items = "";
	$scope.message = "";

	$scope.checkIfTooMuch = function(){
		

		var itemList = $scope.items.split(",");
		var nonEmptyItemList = [];

		// To check non empty item in the list
		for(var i=0; i<itemList.length;i++){
			var item = itemList[i].trim();
			if(item){
				nonEmptyItemList.push(item);
			}
		}

		var itemListCount = nonEmptyItemList.length;
		if(itemListCount === 0){
			$scope.message = "Please enter data first"; 
		}else if(itemListCount <= 3){
			$scope.message = "Enjoy!";
		}else if(itemListCount > 3){
			$scope.message = "Too much!";
		}
		
	}
	

}

})();