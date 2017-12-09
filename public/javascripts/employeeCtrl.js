 var validationApp = angular.module('employeeApp', []);

 validationApp.controller('employeeCtrl', function($scope, $http) {


     $('#emplist').DataTable({

         "bServerSide": true,
         "sAjaxSource": 'http://localhost:3000/employee/emplist',
         "bAutoWidth": false,
         "bProcessing": true,
         "bFilter": false,
         "lengthMenu": [
             [5, 10, 25, 50, -1],
             [5, 10, 25, 50, "All"]
         ],
         "iDisplayLength": 5,
         "aoColumns": [{
             "mData": "name"
         }, {
             "mData": "email"
         }, {
             "mData": "contact"
         }]
     });

     $scope.submitForm = function(form) {

         if ($scope.employeeForm.$valid) {
             $http.post('http://localhost:3000/employee/save', $scope.employee)
                 .success(function(response) {
                     console.log("success");
                     console.log(response);
                     $scope.employee = {};
                     angular.copy({}, $scope.employee);
                     form.$setPristine();
                     $('#emplist').DataTable().ajax.reload();
                 });
         }
     };

 });