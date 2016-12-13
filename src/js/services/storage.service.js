angular.module('shopular').factory('storage', ["$localStorage", function($localStorage) {

  $localStorage = $localStorage.$default({
    items: []
  });

  return {
    // gets items from local storage
    getItems: function() {
      return $localStorage.items;
    },
    // sets list of items that are stringified to a key name
    setItems: function(listOfItems) {
      $localStorage.items.push(listOfItems)
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
