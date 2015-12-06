var app = angular.module('behaviourApp', []);

app.directive('enter', function() {
  return function(scope, element) {
    element.bind('mouseleave', function(){
      console.log('i am entering the jet')           
    })
  }
})

app.directive('leave', function(){
  return function(scope, element){
    element.bind('mouseleave', function(){
      console.log('hey i am leaving from jet, tata')
    })
    
  }
})