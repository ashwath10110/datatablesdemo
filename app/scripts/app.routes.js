myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/inbox-page');

  $stateProvider

  .state('inbox-page', {
    url: '/inbox-page',
    views: {
      nav: {
        templateUrl: 'app/views/navbar.html',
        controller: 'NavCtrl'
      },
      content: {
        templateUrl: 'app/views/inbox-page.html',
        controller: 'InboxPageCtrl'
      },
      footer: {
        templateUrl: 'app/views/footer.html'
      }
    }
  })

  .state('outbox-page', {
    url: '/outbox-page',
    views: {
      nav: {
        templateUrl: 'app/views/navbar.html',
        controller: 'NavCtrl'
      },
      content: {
        templateUrl: 'app/views/outbox-page.html',
        controller: 'OutboxPageCtrl'
      },
      footer: {
        templateUrl: 'app/views/footer.html'
      }
    }
  });

});