var app = angular.module("myunsplashApp", ['ngFileUpload']);
app.controller("unsplashcontroller", function ($scope, $http,Upload) {

	var alldata = [];
	$scope.getphoto = function () {

		$http({
			method: "GET",
			url: "https://api.unsplash.com/photos/?client_id=2098abe08f5ceab972b43097c44b3402bca7246f44a4a0330a503a68c62e650f&per_page=10&page=1",

		}).then(function successCallback(response) {
			var totaldata = response.data.length;

			for (var i = 0; i < totaldata; i++) {
				alldata.push({
					id: response.data[i].id,
					urls: response.data[i].urls
				});
			}
			$scope.data = alldata;
			console.log("All Data", response);
			console.log("alldata", alldata);
		},
			function errorCallback(response) {
				console.log("Error", response);
			});
	};




	$scope.download = function () {
		console.log("alldataalldata", alldata[0].urls.thumb);
		for (i = 0; i < alldata.length; i++) {
			$http.get(
				alldata[i].urls.thumb,
				{
					responseType: "arraybuffer"
				})
				.success(function (data) {
					var anchor = angular.element('<a/>');
					var blob = new Blob([data]);
					anchor.attr({
						href: window.URL.createObjectURL(blob),
						target: '_blank',
						download: 'fileName.png',
					})[0].click();
				});
		}
	}
     /*$scope.uploadFileToUrl = function() {
	
	console.log("alldataalldata", alldata[0].urls.thumb);
	 var fdata = new FormData();
    fdata.append("alldataalldata", alldata[0].urls.thumb);
    for (i = 0; i < alldata.length; i++) {
      
      Upload.upload({
        url: 'https://github.com/mesatish/Admin/tree/',
        params: fdata,
        progress: function(e){}
      }).then(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
      }); 
	}
};
	$scope.uploadFileToUrl111 = function (alldataalldata) {
		Upload.upload({
            url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
            data: { alldataalldata: alldata[0].urls.thumb } //pass file as data, should be user ng-model
        }).then(function successCallback(response) {
			var totaldata = response.data.length;

			for (var i = 0; i < totaldata; i++) {
				alldataalldata.push({
					id: response.data[i].id,
					urls: response.data[i].urls
				});
			}
			$scope.data = alldata;
			console.log("All Data", response);
			console.log("alldata", alldata);
		},
			function errorCallback(response) {
				console.log("Error", response);
			});
	}*/
});