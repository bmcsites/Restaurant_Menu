class mymenuController {
    constructor ($http) {
        this.spinner = false; // loading spinner
        this.mysearch = ''; // search result .
        this.url = 'https://mycheck-menus-dev.s3.amazonaws.com/9272/menu_general.json';
        this.http = $http;
        this.menu = []; // menu items .
        this.dbCall(); // call DB function .
    }
    
    // DB call to get menu items . 
    dbCall() {
        // set loading to on .
        this.spinner = true;
        // use $http to get json with the menu items 
        this.http.get(this.url)
            .then( (response) => {
                return response.data;
            }, err => {
                this.spinner = false;
                console.log('error :', err);
            }).then((data) => {
            data.shift(); // data start with demo object , shift handle that
            this.menu =  data; // set data from promise to this.menu var
            this.spinner = false; // stop loader spinner
        });
    };
}

app.component('mymenu', {
    templateUrl: 'mymenu/mymenu.html',
    controller: mymenuController,
    controllerAs: 'vm'
});