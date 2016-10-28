angular.module('shopular').factory('storage',["$window", function($window) {
  var keyName = "shopularItems";
  return {
    // gets items from local storage
    getItems: function() {
      return JSON.parse($window.localStorage.getItem(keyName));
    },
    // sets list of items that are stringified to a key name
    setItems: function(listOfItems) {
      $window.localStorage.setItem(keyName, JSON.stringify(listOfItems));
    },
    // pushes value to storedItems array then sets the items to localstorage
    addItem: function(value) {
      // storedItems is an array
      var storedItems = this.getItems();
      storedItems.push(value);
      this.setItems(storedItems);
    }
  }
}]);
