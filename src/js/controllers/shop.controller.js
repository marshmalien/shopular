angular.module('shopular').controller('shopCtlr', function($filter, storage) {
  this.allItems = storage.getItems() || [];
  this.locale = 'US';
  this.tax = 1.0575;
  this.columnSort = "price-discount";
  this.reverse = true;
  this.editing = false;
  this.showForm = false;

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
      return $filter('currency')(amount * 1.5, "$", 2);
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
    console.log('add new');
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
    storage.setItems(this.allItems);
    this.newItemForm.$setPristine();
  };

  this.doneEditing = function() {
    this.editing = false;
    storage.setItems(this.allItems);
  };

  this.sortBy = function(columnSort) {
    this.columnSort = columnSort;
    this.reverse = !this.reverse;
  };
});
