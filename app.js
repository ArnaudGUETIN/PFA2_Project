// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


var app=angular.module('starter', ['ionic','chart.js']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($stateProvider,$urlRouterProvider) {

  $stateProvider.state("identification",{
    url:"/identification",
    templateUrl:"template/index.html"

  });
  $stateProvider.state("accueil",{
    url:"/accueil",
    templateUrl:"template/accueil.html"

  });

  $stateProvider.state("consommation",{
    url:"/consommation",
    templateUrl:"template/conso.html",
    controller:"consoCtrl"



  });

  $stateProvider.state("recharge",{
    url:"/recharge",
    templateUrl:"template/recharge.html"

  });

  $stateProvider.state("historique",{
    url:"/historique",
    templateUrl:"template/histo.html"

  });

  $stateProvider.state("about",{
    url:"/about",
    templateUrl:"template/about.html"

  });

  $stateProvider.state("profil",{
    url:"/profil",
    templateUrl:"template/profil.html"

  });
$urlRouterProvider.otherwise("identification");


});


app.controller("consoCtrl",function ($scope) {


console.log($scope.data);
var ctx=document.getElementById('line');
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Consomation",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
        }
      ]
    }

  });

  var ctx1=document.getElementById('bar');
  var myLineChart1 = new Chart(ctx1, {
    type: 'bar',
    data:{
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Consomation",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 55, 40],
        }
      ]
    }
  });



});


