var functions = {
  getUserMentionsFromComment: function(commentBody) {

    return new Promise(function(resolve, reject) {
      console.log(commentBody)
      let userMentions = commentBody.match(/(\[~[a-zA-Z0-9\.:]+\])/g)
      if (userMentions.length > 0) {
        console.log ('GOT '+ userMentions.length + ' names');
        return resolve(userMentions)
      } else {
        console.log('No matches found')
        return reject(false)
      }
    });
  },
  addJiraMarkupToUsername: function(username) {
    return `[~${username}]`
  },
  stripJiraMarkupFromUsername: function(username) {
    return username.split('[~')[1].split(']')[0]
  }
}

module.exports = functions;
