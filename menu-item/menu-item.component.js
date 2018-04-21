function menuItemController() {
    let vm = this;
}

app.component('menuItem', {
    templateUrl: 'menu-item/menu-item.html',
    controller: menuItemController,
    controllerAs: 'vm',
    bindings: {
        items: '<',
        mysearch: '=',
        cat: '@'
    }
});