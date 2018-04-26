class mymenuController {
    constructor ($http) {
        this.spinner = false;
        this.mysearch = '';
        this.url = 'https://mycheck-menus-dev.s3.amazonaws.com/9272/menu_general.json';
        this.http = $http;
        this.menu = [];
        this.dbCall();
    }

    dbCall() {
        this.spinner = true;
        this.http.get(this.url)
            .then( (response) => {
                return response.data;
            }, err => {
                this.spinner = false;
                console.log('error :', err);
            }).then((data) => {
            data.shift();
            console.log(data);
            this.menu =  data;
            this.spinner = false;
        });
    };
}

app.component('mymenu', {
    templateUrl: 'mymenu/mymenu.html',
    controller: mymenuController,
    controllerAs: 'vm'
});