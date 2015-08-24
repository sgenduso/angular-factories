app.factory('commentService', function () {
  var comments = []

  var obj = {
    comments: function () {
      return comments
    },
    addComment: function (comment) {
      comments.push(comment)
    }
  }

  return obj
})
