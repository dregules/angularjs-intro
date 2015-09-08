githubUserSearch.controller('GitUserSearchController', [function() {
	var self = this;

	self.doSearch = function (){
		console.log(self.searchTerm)
	  self.searchResult = {
	    items: [
	      {
	        "login": "tansaku",
	        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
	        "html_url": "https://github.com/tansaku"
	      }, 
	      {
	        "login": "stephenlloyd",
	        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
	        "html_url": "https://github.com/stephenlloyd"
	      }
	    ]
	  };
	};
}]);