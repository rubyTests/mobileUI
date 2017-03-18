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
    alert('fsa goback');
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1 && selected != 0) {
      $ionicTabsDelegate.select(selected - 1);
    }
  }

});

