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
            clientId: 'ec61b27c-7bc4-4523-9eac-0605a5559238',
            popUp: false
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
    );

}]);