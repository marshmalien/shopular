angular.module('shopular').controller('adminCtlr', ['userMgmt', function(userMgmt) {
  this.inputName = null;
  this.currentUser = userMgmt.currentUser();

  this.login = function() {
    this.currentUser = userMgmt.login(this.inputName);
    this.inputName = "";
  };
}]); 
