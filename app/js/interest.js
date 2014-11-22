angular.module('myApp', [])
  .controller('BuyhomeController', ['$scope', function($scope) {
    
    var count =1;
  
   $scope.Pays= [{
     No:0
   }];

   $scope.interests= [{

   }];


    $scope.log = function(){

       //console.log($scope.interests);

       $scope.resMoney=$scope.inputMoneyStart;
       $scope.Tables=[];
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

      console.log($scope.Tables);
      console.log($scope.Pays);

     //console.log($scope.Pays[1].start);
     //console.log($scope.interests);

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
     
  }]);