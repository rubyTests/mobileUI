// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic.contrib.drawer','tabSlideBox','ui.rCalendar','ion-datetime-picker'])

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
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
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
    // templateUrl: "templates/student/tabside.html",
    controller: 'HsaCtrl'
  })
  //profile//
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
  .state('Recharge', {
    url: "/Recharge",
    templateUrl: "templates/recharge.html",
    controller: 'HsaCtrl'
  })
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
  })
  // ruby campus start here profile //
  .state('Profile', {
    url: "/Profile",
    templateUrl: "templates/student/Profile.html",
    controller: 'HsaCtrl'
  })

.state('Profile.Test',{
    url: "/Test",
    view:{
      'test':{
      templateUrl: "templates/student/test.html"
      }
    }
  })
  .state('profileNew',{
    url:"/profile New",
    templateUrl: "templates/student/profileNew.html",
    controller:"HsaCtrl"
  })
  .state('Profile.about', {
    url: "/about",
    views: {
      'about': {
        templateUrl: "templates/student/about.html",
        controller: 'HsaCtrl'
      }
    }
  })
  .state('Profile.Parents', {
        url: '/parents',
        views: {
            'parents-details': {
              templateUrl: 'templates/student/ParentDetail.html',
              controller:'HsaCtrl'
            }
        }
    })
  .state('Profile.Parents.FatherDetails',{
    url:'/FatherDetails',
    views:{
      'Father-Details':{
        templateUrl :'templates/student/FatherDetails.html',
        controller:'HsaCtrl'
      }
    }
  })
  .state('Profile.Parents.MotherDetails',{
    url:'/MotherDetails',
    views:{
      'Mother-Details':{
        templateUrl :'templates/student/MotherDetails.html',
        controller:'HsaCtrl'
      }
    }
  })
  .state('Profile.Parents.GaurdianDetails',{
    url:'/GaurdianDetails',
    views:{
      'Gaurdian-Details':{
        templateUrl :'templates/student/GaurdianDetails.html',
        controller:'HsaCtrl'
      }
    }
  })
  .state('Profile.AdditionalDetails',{
    url:'/AdditionalDetails',
    views :{
      'additiDetails':{
        templateUrl: "templates/student/AdditionalDetail.html",
        controller: 'HsaCtrl'
      }
    }
  })

  // Gnanamani @21.03.2017 
  .state('Message', {
    url: "/Message",
    templateUrl: "templates/message/messageView.html",
    controller: 'HsaCtrl'
  })
  .state('NewMessage',{
    url:'/NewMessage',
    templateUrl: "templates/message/newMessage.html",
    controller: 'HsaCtrl'
  })
  .state('Calendar',{
    url:'/Calendar',
    templateUrl: "templates/calendar/calendar.html",
    controller: 'CalendarDemoCtrl'
  })
  .state('AddEvent',{
    url:'/AddEvent',
    templateUrl: "templates/calendar/addEvent.html",
    controller: 'CalendarDemoCtrl'
  })
  .state('AddEventEdit',{
    url:'/AddEventEdit',
    templateUrl: "templates/calendar/addEventEdit.html",
    controller: 'CalendarDemoCtrl'
  })
  .state('ViewEvents',{
    url:'/ViewEvents',
    templateUrl: "templates/calendar/viewEvents.html",
    controller: 'CalendarDemoCtrl'
  })
  .state('AttdncPerctgView',{
    url:'/AttdncPerctgView',
    templateUrl: "templates/attendance/attdancPerctgView.html"
    //controller: 'CalendarDemoCtrl'
  })
  ;
$urlRouterProvider.otherwise('/app/hsa');  

});

