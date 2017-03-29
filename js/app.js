// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers','ui.rCalendar','ion-datetime-picker','ngCordova'])

.run(function($ionicPlatform,$rootScope,$location,$state,$timeout,$interval,$ionicPopup,$ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  //   $ionicPlatform.onHardwareBackButton(function () {
  //     if(true) { // your check here
  //         $ionicPopup.confirm({
  //           title: 'System warning',
  //           template: 'are you sure you want to exit?'
  //         }).then(function(res){
  //           if( res ){
  //             navigator.app.exitApp();
  //           }
  //         })
  //     }
  // });
  // $ionicPlatform.registerBackButtonAction(function(e){
  //   if ($rootScope.backButtonPressedOnceToExit) {
  //     ionic.Platform.exitApp();
  //   }
  //   else if ($ionicHistory.backView()) {
  //     $ionicHistory.goBack();
  //   }
  //   else {
  //     $rootScope.backButtonPressedOnceToExit = true;
  //     window.plugins.toast.showShortCenter(
  //       "Press back button again to exit",function(a){},function(b){}
  //     );
  //     setTimeout(function(){
  //       $rootScope.backButtonPressedOnceToExit = false;
  //     },2000);
  //   }
  //   e.preventDefault();
  //   return false;
  // },101);

    $ionicPlatform.onHardwareBackButton(function() {
         //alert('going back now ');
         window.history.back();
      });


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
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('institute',{
    url:'/institute',
    templateUrl:'templates/institute/Home.html',
  })
  // .state('institute.Aboutus',{
  //   url:'/Aboutus',
  //   templateUrl:'templates/institute/Aboutus.html',
  // })
  // .state('institute.Course',{
  //   url:'/Course',
  //   templateUrl:'templates/institute/Course.html',
  // })
  // .state('institute.Career',{
  //   url:'/Career',
  //   templateUrl:'templates/institute/Career.html',
  // })
  // .state('institute.Admission',{
  //   url:'/Admission',
  //   templateUrl:'templates/institute/Admission.html',
  // })
  // .state('institute.Contactus',{
  //   url:'/Contactus',
  //   templateUrl:'templates/institute/Contactus.html',
  // })
  .state('Aboutus',{
    url:'/Aboutus',
    templateUrl:'templates/institute/Aboutus.html',
    controller: 'CampusCtrl'
  })
  .state('Course',{
    url:'/Course',
    templateUrl:'templates/institute/Course.html',
    controller: 'CampusCtrl'
  })
  .state('Career',{
    url:'/Career',
    templateUrl:'templates/institute/Career.html',
    controller: 'CampusCtrl'
  })
  .state('Admission',{
    url:'/Admission',
    templateUrl:'templates/institute/Admission.html',
    controller: 'CampusCtrl'
  })
  .state('Contactus',{
    url:'/Contactus',
    templateUrl:'templates/institute/Contactus.html',
    controller: 'CampusCtrl'
  })
  .state('app.Dashboard', {
    url: '/Dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/student/Dashboard.html'
      }
    }
  })
  .state('app.Dashboard.studentDB',{
    url: "/student-DashBoard",
    views: {
      'tab-StudentDB': {
         templateUrl: "templates/student/Home.html",
         controller: 'CampusCtrl'
      }
    }
  })
  .state('app.Dashboard.Payment',{
    url: "/Payment-Detail",
    views: {
      'tab-Payment': {
        templateUrl: "templates/student/Payment.html",
        controller: 'CampusCtrl'
      }
    }
  })
  .state('Profile', {
    url: "/Profile",
    templateUrl: "templates/student/Profile.html",
    controller: 'CampusCtrl'
  })
  .state('Profile.about', {
    url: "/about",
    views: {
      'about': {
        templateUrl: "templates/student/about.html",
        controller: 'CampusCtrl'
      }
    }
  })
  .state('Profile.Parents', {
    url: '/parents',
    views: {
      'parents-details': {
        templateUrl: 'templates/student/ParentDetail.html',
        controller:'CampusCtrl'
      }
    }
    })
  .state('Profile.Parents.FatherDetails',{
    url:'/FatherDetails',
    views:{
      'Father-Details':{
        templateUrl :'templates/student/FatherDetails.html',
        controller:'CampusCtrl'
      }
    }
  })
  .state('Profile.Parents.MotherDetails',{
    url:'/MotherDetails',
    views:{
      'Mother-Details':{
        templateUrl :'templates/student/MotherDetails.html',
        controller:'CampusCtrl'
      }
    }
  })
  .state('Profile.Parents.GaurdianDetails',{
    url:'/GaurdianDetails',
    views:{
      'Gaurdian-Details':{
        templateUrl :'templates/student/GaurdianDetails.html',
        controller:'CampusCtrl'
      }
    }
  })
  .state('Profile.AdditionalDetails',{
    url:'/AdditionalDetails',
    views :{
      'additiDetails':{
        templateUrl: "templates/student/AdditionalDetail.html",
        controller: 'CampusCtrl'
      }
    }
  })
  // Gnanamani @21.03.2017 
  .state('Message', {
    url: "/Message",
    templateUrl: "templates/message/messageView.html",
    controller: 'CampusCtrl'
  })
  .state('NewMessage',{
    url:'/NewMessage',
    templateUrl: "templates/message/newMessage.html",
    controller: 'CampusCtrl'
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
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/Dashboard');
  ; 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('institute');
});
