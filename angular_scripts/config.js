app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Tenant", {
        controller: "homeCtrl",
        templateUrl: "/templates/Tenants/Index.html",
        requireADLogin: true
    }).otherwise({ redirectTo: "/" });

    //$routeProvider.when("/Home", {
    //    controller: "homeCtrl",
    //    templateUrl: "/App/Views/Home.html",
    //}).when("/TodoList", {
    //    controller: "todoListCtrl",
    //    templateUrl: "/App/Views/TodoList.html",
    //    requireADLogin: true,
    //}).when("/UserData", {
    //    controller: "userDataCtrl",
    //    templateUrl: "/App/Views/UserData.html",
    //}).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'andresgllive764.onmicrosoft.com/',
            clientId: 'f80f50bd-d1ac-4545-95fb-ce884f682fda',
            popUp: false
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
    );

}]);

var servers = ["https://homes-webapi.azurewebsites.net"];
server = servers[0];