angular.module('starter.controllers', ['ionic','tabSlideBox'])

// .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  .controller('AppCtrl', function($scope,$ionicModal, $timeout,$window,$ionicSideMenuDelegate) {

  $scope.width = function () {
    return $window.innerWidth;
    alert('width')
  };
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleRight(true);
    alert('openMenu');
  };
  $scope.isWalletShown = false;
  $scope.toggleWallet = function () {
    alert('toggleWallet');
    $scope.isWalletShown = $scope.isWalletShown === false ? true : false;
    console.log('Toggled');
  }
  // $scope.toggleLeftSideMenu = function() {
  //   alert('in');
  //   $ionicSideMenuDelegate.toggleLeft();
  // };
})

.controller('HsaCtrl', function($scope,$ionicTabsDelegate) {
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
  ///hide and show qucik menu//
    $scope.PaybillMobile=true;
    $scope.PaybillLandline=false;
    $scope.PaybillDataCard=false;
    $scope.PaybillElectricity=false;
    $scope.PaybillInsurance=false;
    $scope.PaybillGas=false;
  $scope.paybillMobile=function(){
    $scope.paybillMobileColor="blue";
    $scope.PaybillMobile=true;
    $scope.PaybillLandline=false;
    $scope.PaybillDataCard=false;
    $scope.PaybillElectricity=false;
    $scope.PaybillInsurance=false;
    $scope.PaybillGas=false;
  }
  $scope.paybillLandline=function(){
    $scope.PaybillMobile=false;
    $scope.PaybillLandline=true;
    $scope.PaybillDataCard=false;
    $scope.PaybillElectricity=false;
    $scope.PaybillInsurance=false;
    $scope.PaybillGas=false;
    $scope.colorcode1="blue";
    // Color//
  }
  $scope.paybillDataCard=function(){
    $scope.PaybillMobile=false;
    $scope.PaybillLandline=false;
    $scope.PaybillDataCard=true;
    $scope.PaybillElectricity=false;
    $scope.PaybillInsurance=false;
    $scope.PaybillGas=false;
  }
  $scope.paybillElectricity=function(){
    $scope.PaybillMobile=false;
    $scope.PaybillLandline=false;
    $scope.PaybillDataCard=false;
    $scope.PaybillElectricity=true;
    $scope.PaybillInsurance=false;
    $scope.PaybillGas=false;
  }
  $scope.paybillInsurance=function(){
    $scope.PaybillMobile=false;
    $scope.PaybillLandline=false;
    $scope.PaybillDataCard=false;
    $scope.PaybillElectricity=false;
    $scope.PaybillInsurance=true;
    $scope.PaybillGas=false;
  }
  $scope.paybillGas=function(){
    $scope.PaybillMobile=false;
    $scope.PaybillLandline=false;
    $scope.PaybillDataCard=false;
    $scope.PaybillElectricity=false;
    $scope.PaybillInsurance=false;
    $scope.PaybillGas=true;
  }
})
.controller('FsaCtrl', function($scope,$ionicTabsDelegate) {
  $scope.goBack = function () {
    //alert('fsa goback');
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1 && selected != 0) {
      $ionicTabsDelegate.select(selected - 1);
    }
  }

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

        // $scope.loadEvents = function () {
        //     $scope.calendar.eventSource = createRandomEvents();
        // };

        $scope.onEventSelected = function (event) {
            console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        };

        $scope.onViewTitleChanged = function (title) {
            $scope.viewTitle = title;
            // $scope.viewTitle = '<button ng-click="goback()" class="button back-button  buttons  button-clear header-item"><i class="icon ion-ios-arrow-back"></i></button><span style="padding-right:15px"></span>'+title;
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
      
         $scope.saveEvent = function ()
         {
          //alert("in");
            var events = [];
            // for (var i = 0; i < 50; i += 1) {
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
                // if (eventType === 0) {
                //     startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                //     if (endDay === startDay) {
                //         endDay += 1;
                //     }
                //     endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                //     events.push({
                //         title: 'All Day - ' + i,
                //         startTime: startTime,
                //         endTime: endTime,
                //         allDay: true
                //     });
                // } else {
                //     var startMinute = Math.floor(Math.random() * 24 * 60);
                //     var endMinute = Math.floor(Math.random() * 180) + startMinute;
                //     startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                //     endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                //     events.push({
                //         title: 'Event - ' + i,
                //         startTime: startTime,
                //         endTime: endTime,
                //         allDay: false
                //     });
                // }
            // }
            return events;
          }
    });

