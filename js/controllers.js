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

.controller('CampusCtrl', function($scope,$filter,$ionicTabsDelegate,$cordovaCamera,$cordovaDialogs) {
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
    window.history.back();
    // window.location.href = "../www/index.html#/app/Dashboard";
  }
  $scope.goAbout=function(){
    window.location.href = "../www/index.html#/Profile/about";
  }
  $scope.goAdditional=function(){
   window.location.href = "../www/index.html#/Profile/AdditionalDetails";
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

  //  $scope.goBack = function () {
  //   //alert('fsa goback');
  //   var selected = $ionicTabsDelegate.selectedIndex();
  //   if (selected != -1 && selected != 0) {
  //     $ionicTabsDelegate.select(selected - 1);
  //   }
  // }

  //accordians//
  // $scope.Courses=[
  // {couseId:1,courseName:'Mechanical Engineering'},
  // {couseId:2,courseName:'Electrical and Electronics Engineering'},
  // {couseId:3,courseName:'Computing Engineering'},
  // {couseId:4,courseName:'Bio - Engineering'},
  // {couseId:5,courseName:'Basic Sciences'}
  // ];
  // $scope.Department=[
  // {id:1,couseId:1,deptName:'Department of Mechanical Engineering'},
  // {id:2,couseId:1,deptName:'Department of Automobile Engineering'},
  // {id:3,couseId:1,deptName:'Department of Aerospace Engineering'},
  // {id:4,couseId:1,deptName:'Department of Mechatronics'}
  // ];
  // $scope.CourseGroup=[];
  // $scope.findCourse=function(id){
  //   console.log(id,'id');
  //   // $scope.Courses=$filter('filter')($scope.Courses,{id :'a'});
  //   // console.log($scope.Courses)
  // }
  $scope.groups = [];

    $scope.groups = [
    { Deptname: 'Mechanical Engineering',items: [{ courseName: 'Mechanical Engineering'},{courseName: 'Automobile Engineering'},{courseName:'Aerospace Engineering'},{courseName:'Mechatronics'}]},
    { Deptname: 'Electrical and Electronics Engineering',items: [{ courseName: 'Electronics & Communication Engineering'},{ courseName: 'Telecommunication Engineering'},{ courseName: 'Electrical and Electronics Engineering'},{ courseName: 'Electronics & Instrumentation Engineering'},{courseName:'Instrumentation & Control Engineering'}]},
    {Deptname: 'Computing Engineering',items: [{ courseName: 'Computer Science Engineering'},{ courseName: 'Information Technology'},{ courseName: 'Software Engineering'}]},
    {Deptname: 'Basic Sciences',items: [{ courseName: 'Mathematics'},{ courseName: 'Physics'},{ courseName: 'Chemistry'}]},
    {Deptname: 'Bio - Engineering',items: [{ courseName: 'Chemical Engineering'},{ courseName: 'Biotechnology'},{ courseName: 'Biomedical Engineering'},{courseName:'Genetic Engineering'},{courseName:'Food Process Engineering'}]}
    ];

    $scope.Career=[];
    $scope.Career=[
    {jobTitle:'Project Officer',workst:'Infotech',salary:'Rs. 20,000/- Rs. 40,000/'},
    {jobTitle:'Junior Research Fellow',workst:'CTS',salary:'Rs. 35,000/- Rs. 70,000/'},
    {jobTitle:'Junior Research Fellow',workst:'TCS, Vellore .',salary:'Rs. 40,000/- Rs. 80,000/'},
    {jobTitle:'Asst Manager',workst:'wipro,',salary:'Rs. 40,000/- Rs. 80,000/'}
    ];
  // $scope.groups = [];
  // for (var i=0; i<10; i++) {
  //   $scope.groups[i] = { name: i, items: []};
  //   // console.log($scope.groups[i],'$scope.groups[i]');
  //   for (var j=0; j<3; j++) {
  //     $scope.groups[i].items.push(i + '-' + j);
  //   }
  // }
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    // console.log($scope.shownGroup === group,'isGroupShown');
    return $scope.shownGroup === group;
  };
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
    })
.controller('AttndcCtrl', function($scope) {
   var c3chart_donut_id = 'c3_chart_donut';

            if ( $('#'+c3chart_donut_id).length ) {

                var c3chart_donut = c3.generate({
                    bindto: '#'+c3chart_donut_id,
                    data: {
                        columns: [
                            ['data1', 30],
                            ['data2', 120]
                        ],
                        type : 'donut',
                    },
                    donut: {
                        title: "Percen",
                        width: 40
                        
                    },
                    interaction: {
                        enabled: false
                    },
                    color: {
                        pattern: ['#E67157', '#AA85BC']
                    }
                });

            }

});
