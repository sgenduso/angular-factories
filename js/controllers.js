app.controller('NavController', ['$scope', 'commentService', function ($scope, commentService) {
  $scope.comments = commentService.comments();
}])

app.controller('CommentsController', ['$scope', 'commentService', function ($scope, commentService) {
  $scope.comments = commentService.comments();
  $scope.addComment = function () {
    commentService.addComment($scope.comment)
    $scope.comment = ''
  }
}])

app.controller('AboutController', ['$scope', 'commentService', function ($scope, commentService) {
  $scope.comments = commentService.comments();
}])
