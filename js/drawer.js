(function() {

'use strict';

/**
 * The ionic-contrib-frosted-glass is a fun frosted-glass effect
 * that can be used in iOS apps to give an iOS 7 frosted-glass effect
 * to any element.
 */
angular.module('ionic.contrib.drawer', ['ionic'])

.controller('drawerCtrl', ['$element', '$attrs', '$ionicGesture', '$document','$scope', function($element, $attr, $ionicGesture, $document,$scope) {
  // console.log($scope,"$scope$scope$scope$scope");
  var el = $element[0];
  var dragging = false;
  var startX, lastX, offsetX, newX;
  var side;

  // How far to drag before triggering
  var thresholdX = 15;
  // How far from edge before triggering
  var edgeX = 40;

  var LEFT = 0;
  var RIGHT = 1;

  var isTargetDrag = false;

  var width = $element[0].clientWidth;

  // Current State of Drawer
  var drawerState = 'close';
  $scope.stylecss=true;

  var enableAnimation = function() {
    $element.addClass('animate');
  };
  var disableAnimation = function() {
    $element.removeClass('animate');
  };

  // Check if this is on target or not
  var isTarget = function(el) {
    while(el) {
      if(el === $element[0]) {
        return true;
      }
      el = el.parentNode;
    }
  };

  var startDrag = function(e) {
    // alert('startDrag');
    // console.log('startDrag');
    $scope.stylecss=true;
    disableAnimation();
    dragging = true;
    offsetX = lastX - startX;
  };

  var startTargetDrag = function(e) {
    // alert('startTargetDrag');
    disableAnimation();
    dragging = true;
    isTargetDrag = true;
    offsetX = lastX - startX;
  };

  var doEndDrag = function(e) {
    // startTargetDrag
    // alert('doEndDrag');
    startX = null;
    lastX = null;
    offsetX = null;
    isTargetDrag = false;

    if(!dragging) {
      return;
    }

    dragging = false;
    enableAnimation();

    ionic.requestAnimationFrame(function() {
      if(newX < (-width / 2)) {
        el.style.transform = el.style.webkitTransform = 'translate3d(' + -width + 'px, 0, 0)';
        document.querySelector('.menu-content').style="opacity: 1;transition-duration: 0.5s";
        drawerState = 'close';       
      } else {
        el.style.transform = el.style.webkitTransform = 'translate3d(0px, 0, 0)';
        document.querySelector('.menu-content').style="opacity: 0.11;transition-duration: 0.5s";
        drawerState = 'open';
      }
    });
  };
  var doDrag = function(e) {
    if(e.defaultPrevented) {
      return;
    }
    if(!lastX) {
      startX = e.gesture.touches[0].pageX;
    }
    lastX = e.gesture.touches[0].pageX;

    if(!dragging) {
      console.log('dragging NOt Drag');
      if(Math.abs(lastX - startX) > thresholdX) {
      // if(Math.abs(lastX - startX) > thresholdX) {
        console.log(lastX,'lastX');
        console.log(startX,'startX');
        console.log(thresholdX,'thresholdX');
        // console.log(Math.abs(lastX - startX),'hai');
        if(isTarget(e.target)) {
          console.log('CLOSE');
          startTargetDrag(e);
        } else if(startX < edgeX) {
          console.log('OPEN');
          startDrag(e);
        } 
      }
    } else {
      console.log(lastX, offsetX, lastX - offsetX);
      newX = Math.min(0, (-width + (lastX - offsetX)));
      // console(newX,'newx');
      // ionic.requestAnimationFrame(function() {
      //   el.style.transform = el.style.webkitTransform = 'translate3d(' + newX + 'px, 0, 0)';
      // });

    }
    if(dragging) {
      e.gesture.srcEvent.preventDefault();
    }
  };

  side = $attr.side == 'left' ? LEFT : RIGHT;
  console.log(side);

  $ionicGesture.on('drag', function(e) {
    doDrag(e);
  }, $document);
  $ionicGesture.on('dragend', function(e) {
    doEndDrag(e);
  }, $document);

  this.close = function() {
    enableAnimation();
    ionic.requestAnimationFrame(function() {
      if(side === LEFT) {
        el.style.transform = el.style.webkitTransform = 'translate3d(-100%, 0, 0)';
        console.log('translate3d---100');
      } else {
        el.style.transform = el.style.webkitTransform = 'translate3d(100%, 0, 0)';
        console.log('translate3d-++++100');
      }
    });
  };

  this.open = function() {
    enableAnimation();
    ionic.requestAnimationFrame(function() {
      if(side === LEFT) {
        el.style.transform = el.style.webkitTransform = 'translate3d(0%, 0, 0)';
        // alert('LEFT');
      } else {
        el.style.transform = el.style.webkitTransform = 'translate3d(0%, 0, 0)';
        // alert('RIGHT');
      }
    });
  };

  this.isOpen = function() {
    if(drawerState === 'close') {
      return false;
    } else {
      return true;
    }
  };

  this.setState = function(value) {
    drawerState = value;
    if (value=="open") {
      document.querySelector('.menu-content').style="opacity: 0.11;transition-duration:0.5s;pointer-events: auto;";
      // document.querySelector('drawer').style="background:rgba(0, 0, 0, 0.6) none repeat scroll 0 0;width:100%;transition-duration: 1s, 1s, 1s, 1s, 1s, 1s; ";
    }else{
      document.querySelector('.menu-content').style="opacity: 1;transition-duration: 0.5s;";
      // document.querySelector('drawer').style="background:rgba(0, 0, 0, 0) none repeat scroll 0 0;width:270px;transition-duration: 1s, 1s, 1s, 1s, 1s, 1s; ";
    }
  };
}])

.directive('drawer', ['$rootScope', '$ionicGesture', function($rootScope, $ionicGesture) {
  // alert('drawer');
  return {
    restrict: 'E',
    controller: 'drawerCtrl',
    link: function($scope, $element, $attr, ctrl) {
      $element.addClass($attr.side);
      $scope.openDrawer = function() {
        ctrl.open();
        ctrl.setState('open');
      };
      $scope.closeDrawer = function() {
        ctrl.close();
        ctrl.setState('close');
      };
      $scope.toggleDrawer = function() {
        if(ctrl.isOpen()) {
          ctrl.close();
          ctrl.setState('close');
          return "close";
        } else {
          ctrl.open();
          ctrl.setState('open');
          return "open";
        }
      };
    }
  }
}])

.directive('drawerClose', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    link: function($scope, $element) {
      $element.bind('click', function() {
        $scope.closeDrawer();
      });
    }
  }
}])

.directive('drawerToggle', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      var el = $element[0];
      if($attrs.animate === "true") {
        $element.addClass('animate drawerToggle');
      }
      
      $element.bind('click', function(){
        if($attrs.animate === "true") {
          if($scope.toggleDrawer() === "open") {
            el.style.transform = el.style.webkitTransform = 'translate3d(' + -5 + 'px, 0, 0)';
            // document.querySelector('drawer').style="background:rgba(0, 0, 0, 0) none repeat scroll 0 0;width:270px;";
            // document.querySelector('.menu-content').style="opacity: 1;";
          } else {
            el.style.transform = el.style.webkitTransform = 'translate3d(' + 0 + 'px, 0, 0)';
            // document.querySelector('drawer').style="background:rgba(0, 0, 0, 0.9) none repeat scroll 0 0;width:100%;";
            // document.querySelector('.menu-content').style="opacity: 0.05;";
          }   
        } else {
            $scope.toggleDrawer();
        }
      });
    }
  };
})

})();