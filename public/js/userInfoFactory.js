githubUserSearch.factory('UserInfo', ['Search', '$q', function(Search, $q){
  var getDataFromResponses = function(responses) {
    return responses.map(function(response) { return response.data})
  }

  var getAllUsers = function(users){
    return users.map(function(user){
      return Search.getUserInfo(user.url)
    })
  }

  return {
    query: function(searchTerm) {
      return Search.query(searchTerm).then(function(response){
        return $q.all(getAllUsers(response.data.items))
      }).then(function(responses){
        return getDataFromResponses(responses)
      })
    }
  };

}])