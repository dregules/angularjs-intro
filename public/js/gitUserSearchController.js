githubUserSearch.controller('GitUserSearchController', ['UserInfo', function(UserInfo) {
  var self = this;

  self.doSearch = function() {
    console.log("Self.searchTerm is:", self.searchTerm);
    UserInfo.query(self.searchTerm).then(function(response) {
        self.searchResult = response;
        console.log("Self.searchResult is: ", self.searchResult)
      })

  };
}]);