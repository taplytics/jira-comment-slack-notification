var functions = {
  getUserMentionsFromComment: function(commentBody) {
    console.log ('getUserMentionsFromComment');

    return new Promise(function(resolve, reject) {
      console.log('getUserMentionsFromComment in promise')
      
      try{ 
      let userMentions = commentBody.match(/(\[~[a-zA-Z0-9\.]+\])/g)
      } catch {
        console.log('getUserMentionsFromComment fail')
      }
      console.log(userMentions)
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
