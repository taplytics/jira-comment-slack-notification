var functions = {
  getUserMentionsFromComment: function(commentBody) {
    return new Promise(function(resolve, reject) {
      console.log("Getting names from comment body")
      let userMentions = commentBody.match(/(\[~[a-zA-Z0-9\.:]+\])/g)
      console.log ('Got '+userMentions.length);
      if (userMentions.length > 0) {
        return resolve(userMentions)
      } else {
        return reject(false)
      }
    });
  },
  addJiraMarkupToUsername: function(username) {
    return `[~${username}]`
  },
  stripJiraMarkupFromUsername: function(username) {
    return username.split('[~')[1].split(']')[0]
  },
  swapJiraAccountIdWithJiraName: function(commentBody) {
    let regex = '/(\[~[a-zA-Z0-9\.:]+\])/g'
    return 0
  },
  getUsernameFromId: function(userName) {
    return 0
  }
}



module.exports = functions;
