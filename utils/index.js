

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
  swapJiraAccountIdWithJiraName: function(commentBody, userMentions, user) {
    return new Promise(function(resolve, reject) {
    userMentions.forEach(userMention => {
      user.getByJiraUsername(userMention).then((thisUser, index) => {
        commentBody = commentBody.replace(userMention, thisUser.jiraShortName)
        console.log(commentBody) 
      })
    })
    return resolve(commentBody); 
  })
}}



module.exports = functions;
