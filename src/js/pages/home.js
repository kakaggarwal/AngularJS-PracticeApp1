const Airtable = require('airtable');
const app = angular.module('practiceApp1', []);

app.controller('homeController', function($scope) {
    $scope.searchRecords = [];

    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyrjFykTLYVCyPcl'
    });

    $scope.airtable = Airtable.base('appAOUimmyFijLDUZ');

    $scope.airtable('Artists').select({
        // maxRecords: 10,
        view: "Grid View"
    }).eachPage(function page(records, fetchNextPage) {
        $scope.searchRecords = records;
        fetchNextPage();
    }, function done(err) {

    });
});
