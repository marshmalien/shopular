angular.module('shopular').factory('userMgmt', function() {
  var user = null;

  return {
    login: function(username) {
      user = {
        name: username,
        loginTime: new Date()
      };
      return user;
    },
    currentUser: function() {
      return user;
    }
  };

});
