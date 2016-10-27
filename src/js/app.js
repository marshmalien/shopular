(function() {
  'use strict';

  angular.module('shopular', [])
    .controller('shopCtrl',  function($filter) {
    this.allItems = [
      { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
      { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
      { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
      { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
      { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
      { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
      { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
      { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
      { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
      { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
      { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
      { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
    ];

    this.locale = 'US';
    this.tax = 1.0575;
    this.columnSort = "price-discount";
    this.reverse = true;

    this.itemName = function(item) {
      if (this.locale === 'UK' && item.name === 'waste basket') {
        return 'rubbish bin';
      }
      return item.name;
    };

    this.priceOf = function(item) {
      var amount = (item.price - item.discount) * this.tax;
      if (this.locale === 'UK') {
        return $filter('currency')(amount, "\u00A3", 2);
      } else {
        return  $filter('currency')(amount * 1.5, "$", 2);
      }
    };

    this.isDiscounted = function(item) {
      return item.discount > 0;
    };

    this.toggleLocale = function() {
      var spinButton = document.getElementById('currency-button');
      if (this.locale === 'US') {
        this.locale = 'UK';
        spinButton.className = 'spin';
      } else {
        this.locale = 'US';
        spinButton.className = '';
      }
    };

    this.addNewItem = function() {
      this.allItems.push({
        name: this.newItem.name,
        price: this.newItem.price,
        quantity: this.newItem.quantity,
        color: this.newItem.color,
        discount: this.newItem.discount
      });
      this.newItem = {
        name: null,
        price: null,
        quantity: null,
        color: null,
        discount: null
      };
      this.newItemForm.$setPristine();
    };

    this.sortBy = function(columnSort) {
      this.columnSort = columnSort;
      this.reverse = !this.reverse;
    };
  });
})();
