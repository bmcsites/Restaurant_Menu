function mymenuController($http) {

    this.menu = [];
    this.spinner = false;
    this.mysearch = '';

    this.dbCall = () => {
        this.spinner = true;
        let url = 'https://mycheck-menus-dev.s3.amazonaws.com/9272/menu_general.json';
        $http.get(url)
            .then( (response) => {
                return response.data;
            }, err => {
                console.log('error :', err);
                this.spinner = false;
            }).then((data) => {
                data.shift();
                this.menu = data;
                console.log(this.menu);
                this.spinner = false;
            });
    };

    this.dbCall();
}

app.component('mymenu', {
    templateUrl: 'mymenu/mymenu.html',
    controller: mymenuController,
    controllerAs: 'vm'
});