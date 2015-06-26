angular.module('main', ['ngAnimate'])

.controller('mainController', ['$scope', function ($scope) {


  $scope.Images = [1];

  $scope.Links = [
    { title: "STORIES", url: "partials/stories.html" },
    { title: "BLOG", url: "partials/blog.html" },
    { title: "CONTACT", url: "partials/contact.html" }];

    $scope.TemplateSelection = $scope.Links[0].url;

    $scope.bindPage = function (url) {

      if ($scope.TemplateSelection == url)
      {
        return;
      }

      $j('#pageContent').fadeOut(50);

      setTimeout(function () {
        $scope.TemplateSelection = url;
        $scope.$apply();
      }, 100);

      $j('#pageContent').fadeIn(100);

    }
  }]);
