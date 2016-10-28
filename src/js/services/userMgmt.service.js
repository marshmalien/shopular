angular.module('shopular').factory('userMgmt', function() {
  var _currentUser = null;

  return {
    login: function(username) {
      _currentUser = {
        name: username,
        loginTime: new Date()
      }
      return _currentUser;
    },
    currentUser: function() {
      return _currentUser;
    }
  }

});