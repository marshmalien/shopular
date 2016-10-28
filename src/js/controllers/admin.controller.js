angular.module('shopular').controller('adminCtlr', ['userMgmt', function(userMgmt) {
    this.user = {
      username: null,
      loginTime: null
    }
  this.username = this.user.username;
  // var user = userMgmt.currentUser();
  // userMgmt.login(userMgmt.username);
  this.user = userMgmt.login(this.username)
  console.log(this.user);
}]);
 
