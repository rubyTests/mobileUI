angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CampusCtrl', function($scope,$ionicTabsDelegate,$cordovaCamera,$cordovaDialogs) {
  $scope.goForward = function () {
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1) {
        $ionicTabsDelegate.select(selected + 1);
    }
  }
  $scope.goBack = function () {
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1 && selected != 0) {
      $ionicTabsDelegate.select(selected - 1);
    }
  }
  $scope.imgSrc="https://s-media-cache-ak0.pinimg.com/originals/57/43/47/574347ddf6be999e0027de121104f2ff.png";
  $scope.upload=function(){
    $cordovaDialogs.confirm('Choose your option', 'Upload Receipt', ['Camera','Gallery'])
  .then(function(options) {
   if(options==1){
    var options = {
     quality: 100,
     destinationType: Camera.DestinationType.FILE_URI,
     sourceType: Camera.PictureSourceType.CAMERA,
     targetWidth: 1024,
     targetHeight: 1024,
     popoverOptions: CameraPopoverOptions,
     saveToPhotoAlbum: false,
     correctOrientation:true
    };
    $cordovaCamera.getPicture(options).then(function(imageData) {
     $scope.imgSrc= imageData;
    }, function(err) {
    });
   }else if(options==2){
    var options = {
     quality: 100,
     destinationType: Camera.DestinationType.FILE_URI,
     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
     targetWidth: 1024,
     targetHeight: 1024,
     popoverOptions: CameraPopoverOptions,
     saveToPhotoAlbum: false,
     correctOrientation:true
    };
    
    $cordovaCamera.getPicture(options).then(function(imageData) {
     $scope.imgSrc= imageData;
    }, function(err) {
    });
   }
  });
  }

  $scope.goback=function(){
    // window.history.back();
    window.location.href = "../www/index.html#/app/hsa";
  }
  $scope.goAbout=function(){
    window.location.href = "../www/index.html#/Profile/about";
  }
  $scope.goAdditional=function(){
   window.location.href = "../www/index.html#/Profile/AdditionalDetails";
  }
  //  $scope.goBack = function () {
  //   //alert('fsa goback');
  //   var selected = $ionicTabsDelegate.selectedIndex();
  //   if (selected != -1 && selected != 0) {
  //     $ionicTabsDelegate.select(selected - 1);
  //   }
  // }
})

// Gnanamani created @ 21.03.2017
.controller('CalendarDemoCtrl', function ($scope) {
    'use strict';
    $scope.calendar = {};
    $scope.init = function () {
      $scope.calendar.eventSource =  $scope.saveEvent();
    }
    $scope.goback=function(){
      window.history.back();
    }
    $scope.ionicGoBack=function(){
      window.history.back();
    }
    $scope.changeMode = function (mode) {
      $scope.calendar.mode = mode;
    };

    $scope.onEventSelected = function (event) {
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };

    $scope.onViewTitleChanged = function (title) {
      $scope.viewTitle = title;      
    };

    $scope.today = function () {
      $scope.calendar.currentDate = new Date();
    };

    $scope.isToday = function () {
      var today = new Date(),
        currentCalendarDate = new Date($scope.calendar.currentDate);
      today.setHours(0, 0, 0, 0);
      currentCalendarDate.setHours(0, 0, 0, 0);
      return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.onTimeSelected = function (selectedTime, events, disabled) {
        console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
    };
    $scope.saveEvent = function (){
      var events = [];
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      events.push({
        title: $scope.title,
        startTime: $scope.datetimeValue,
        endTime: $scope.datetimeValue1,
        allDay: false
      },
      {
        title: 'Environment day',
        description:'Environment day is celebrated with a special message.',
        startTime: date,
        endTime: date,
        allDay: false
      },
      {
        title: 'Science exhibition',
        description:'Science exhbition and SUPW exhibition are held every year..',
        startTime: date,
        endTime: date,
        allDay: false
      },
      {
        title: 'Sports Day',
        description:'Sports Day where students participate in various races and events..',
        startTime: date,
        endTime: date,
        allDay: false
      }
      ,{
        title: 'Investiture Day ceremony',
        description:'Investiture Day ceremony where newly elected student leaders ',
        startTime: date,
        endTime: date,
        allDay: false
      },
      {
        title: 'Appreciation Days',
        description:'These are days we appreciate our students in the field of sports',
        startTime: date,
        endTime: date,
        allDay: false
      }
      );
        return events;
      }
    });
