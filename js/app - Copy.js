// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic.contrib.drawer'])

  .run(function($ionicPlatform,$rootScope,$location,$state,$timeout,$interval) {
    // .run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// .controller('MainCtrl', function($scope, $window, $ionicSideMenuDelegate) {
// })
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // Side Menu Start//
  .state('FAQs', {
    url: "/FAQs",
    templateUrl: "templates/FAQs.html",
    controller: 'HsaCtrl'
  })
  .state('Settings', {
    url: "/Settings",
    templateUrl: "templates/Settings.html",
    controller: 'HsaCtrl'
  })
  .state('AboutUs', {
    url: "/AboutUs",
    templateUrl: "templates/Aboutus.html",
    controller: 'HsaCtrl'
  })

  // Side Menu End//
  .state('app.hsa',{
    url: "/hsa",
    views: {
      'tab-hsa': {
         templateUrl: "templates/dashboard.html",
         controller: 'HsaCtrl'
      }
    }
  })
  .state('app.fsa',{
    url: "/fsa",
    views: {
      'tab-fsa': {
        templateUrl: "templates/browse.html",
         controller: 'FsaCtrl'
      }
    }
  })
  .state('PayBill', {
    url: "/PayBill",
    templateUrl: "templates/payBill.html",
    controller: 'HsaCtrl'
  })
  // .state('PayBill.mobile', {
  //   url: "/PayBill-mobile",
  //   views: {
  //     'mobile-tab': {
  //       templateUrl: "templates/paybill-Mobile.html",
  //     }
  //   }
  //   })
  // .state('PayBill.landline', {
  //   url: "/PayBill-landline",
  //   views: {
  //     'landline-tab': {
  //       templateUrl: "templates/paybill-Landline.html",
  //     }
  //   }
  //   })
  // .state('PayBill.datacard', {
  //   url: "/PayBill-datacard",
  //   views: {
  //     'datacard-tab': {
  //       templateUrl: "templates/paybill-Datacard.html",
  //     }
  //   }
  //   })  
  .state('Recharge', {
    url: "/Recharge",
    templateUrl: "templates/recharge.html",
    controller: 'HsaCtrl'
  })
  // .state('Recharge.mobile', {
  //   url: "/mobile",
  //   views: {
  //     'mobile-tab': {
  //       templateUrl: "templates/recharge-Mobile.html"
  //     }
  //   }
  // })
  // .state('Recharge.dth', {
  //   url: "/dth",
  //   views: {
  //     'dth-tab': {
  //       templateUrl: "templates/recharge-Dth.html"
  //     }
  //   }
  // })
  // .state('Recharge.datacard', {
  //   url: "/datacard",
  //   views: {
  //     'datacard-tab': {
  //       templateUrl: "templates/recharge-Datacard.html"
  //     }
  //   }
  // })
  .state('Payshop', {
    url: "/Payshop",
    templateUrl: "templates/payshop.html",
    controller: 'HsaCtrl'
  })
  .state('Payshop.Person', {
    url: "/Person",
    views: {
      'Person-tab': {
        templateUrl: "templates/payshop-person.html"
      }
    }
  })
  .state('Payshop.Bank', {
    url: "/Bank",
    views: {
      'Bank-tab': {
        templateUrl: "templates/payshop-bank.html"
      }
    }
  })
  .state('AddMoney', {
    url: "/AddMoney",
    templateUrl: "templates/addMoney.html",
    controller: 'HsaCtrl'
  });

  // .state('SendMoney', {
  //   url: "/SendMoney",
  //   templateUrl: "templates/sendMoney.html",
  //   controller: 'HsaCtrl'
  // })
  // .state('PayUtilities', {
  //   url: "/PayUtilities",
  //   templateUrl: "templates/payUtilities.html",
  //   controller: 'HsaCtrl'
  // })

  
$urlRouterProvider.otherwise('/app/hsa');

  // .state('Recharge', {
  //   url: "/Recharge",
  //   templateUrl: "templates/recharge.html",
  //   controller: 'HsaCtrl'
  // })
  // .state('Payshop', {
  //   url: "/Payshop",
  //   templateUrl: "templates/payshop.html",
  //   controller: 'HsaCtrl'
  // })
  // .state('AddMoney', {
  //   url: "/AddMoney",
  //   templateUrl: "templates/addMoney.html",
  //   controller: 'HsaCtrl'
  // })
  // .state('SendMoney', {
  //   url: "/SendMoney",
  //   templateUrl: "templates/sendMoney.html",
  //   controller: 'HsaCtrl'
  // })
  // .state('PayUtilities', {
  //   url: "/PayUtilities",
  //   templateUrl: "templates/payUtilities.html",
  //   controller: 'HsaCtrl'
  // })

  // ---TEST----------------------



  
});

