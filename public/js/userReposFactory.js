githubUserSearch.factory('UserRepos', ['UserInfo', function(UserInfo){
  return {
    query: function(user_url){

      return Search.getUserRepos(user_url)
    }

  }

}])