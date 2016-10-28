angular.module('shopular').controller('adminCtlr', ['userMgmt', function(userMgmt) {
  this.username = userMgmt.currentUser();
  // get admin and login time
  // userMgmt.login(userMgmt.username);


}]);
 
