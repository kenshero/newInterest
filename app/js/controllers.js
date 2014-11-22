'use strict';

/* Controllers */
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
angular.module('myApp.controllers', [])
.controller('MyCtrl1', ['$scope',function($scope) {


 //  $scope.show=function()
 //  {
 //    console.log($scope.Tables.length);
 //  }



	// var data = new google.visualization.DataTable();

 //  data.addColumn('number', 'Initial Value');
 //  data.addColumn('number', 'Money');
 //  data.addColumn('number', 'Interest');
    
 //  var x;
 //  for (x = 0; x < $scope.Tables.length; x++)
 //  {
 //    data.addRow([x,$scope.Tables.moneyFirst*1, $scope.Tables.interests*1]);
 //  }


 //  	var options = {
 //          title: 'Company Performance'
 //        };
 //        var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));
 //        chart.draw(data, options);


  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('BuyhomeController', ['$scope', function($scope) {
    
    var count =1;
   

   $scope.Pays= [{
     No:0
   }];

   $scope.interests= [{

   }];


    $scope.log = function(){
      $scope.Tables=[];
       //console.log($scope.interests);

       $scope.resMoney=$scope.inputMoneyStart;
       
       var n=0 
     
       var counInterest=0;
       var inter ;   
       var interestDays;
      for (var i = 0; i < $scope.Pays.length; i++) {

        for(; n<$scope.Pays[i].end.number ;n++)
        {
                
            if (n<$scope.interests[counInterest].EndInterest.number ) 
            {
              inter = $scope.interests[counInterest].inputInterest;
            }
            else
            {
              ++counInterest;
              inter = $scope.interests[counInterest].inputInterest;
            }
            
           interestDays=($scope.resMoney*inter*30)/100/365; 

            var tmp = {
              moneyFirst   : $scope.resMoney,
              moneyMix     : $scope.resMoney*1+interestDays,
              interestRate : inter,
              moneyPay     : $scope.Pays[i].interestPay,
              moneyPayFirst: $scope.Pays[i].interestPay-interestDays,
              moneyInterest: interestDays,
              moneyResult  : $scope.resMoney-$scope.Pays[i].interestPay
            };
          
          $scope.resMoney-=$scope.Pays[i].interestPay;

          if ($scope.resMoney*1+$scope.Pays[i].interestPay*1<$scope.Pays[i].interestPay)
           {

            var moneyy = $scope.resMoney*1+$scope.Pays[i].interestPay*1;

            var tmp = {
              moneyFirst   : moneyy,
              moneyMix     : moneyy+interestDays,
              interestRate : inter,
              moneyPay     : moneyy,
              moneyPayFirst: $scope.Pays[i].interestPay-interestDays,
              moneyInterest: interestDays,
              moneyResult  : 0
            };

            $scope.Tables.push(tmp);
            break;
           }

  
          $scope.Tables.push(tmp);
        }
 
      }

      //$rootScope.Graphs = $scope.Tables;
     //  console.log($scope.Tables);
      console.log($scope.Pays);

     //console.log($scope.Pays[1].start);
     //console.log($scope.interests);


     // console.log($scope.Tables.length);

          var data = new google.visualization.DataTable();

          data.addColumn('number', 'Initial Value');
          data.addColumn('number', 'ดอกเบี้ย');
          data.addColumn('number', 'ค่างวด');

          var dataPie = new google.visualization.DataTable();
          var pieInterest ;
          dataPie.addColumn('string', 'ssss');
          dataPie.addColumn('number', 'ดอกเบี้ย');
          dataPie.addColumn('number', 'ค่างวด');
            
          var x;
          for (x = 0; x < $scope.Tables.length; x++)
          {
       
            data.addRow([x,$scope.Tables[x].moneyPayFirst.toFixed(2)*1,$scope.Tables[x].moneyInterest.toFixed(2)*1]);
          }
      
          // for (var i = 0; i < $scope.Tables.length; i++)
          // {
          //   pieInterest+=$scope.Tables[x].moneyInterest;
          // }
          // dataPie.addRow(["asdsad",5000000,pieInterest.toFixed(2)*1]);

          var options = {
                title: 'Company Performance'
              };
           var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));
           chart.draw(data, options);
            var optionsPie = {'title':'How Much Pizza I Ate Last Night',
                           'width':400,
                           'height':300};

          // var chart = new google.visualization.PieChart(document.getElementById('chartpie'));
          // chart.draw(dataPie, optionsPie);


    }

    $scope.addPay = function(counter)
    {
      var tmp={
        No : counter
      };
      $scope.Pays.push(tmp);
    }

    $scope.addInterests = function()
    {

      var tmp={
      };

      $scope.interests.push(tmp);
    }
    
    $scope.MonthVal = function(inputMonthVal)
    {


        var range=[{}];
        range.length = 0;
        

        for(var i = 1; i <= inputMonthVal ; i++)
        { 
          range.push({number : i});
        }


       console.log(range); 
       $scope.tests=range;
      console.log($scope.tests);
    }
     
  }])
. app.directive('chart', function() {
        return {
          restrict: 'A',
          link: function($scope, $elm, $attr) {
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);

            // Set chart options
            var options = {'title':'How Much Pizza I Ate Last Night',
                           'width':400,
                           'height':300};

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart($elm[0]);
            chart.draw(data, options);
          }
      }
    });


