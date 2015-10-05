var GitHubApi = require('github');
var request   = require('request');

var github = new GitHubApi({
    version: "3.0.0",
    debug: false,
    protocol: "https",
    host: "api.github.com",
    timeout: 5000,
    headers: {
        "user-agent": "Grump"
    }
});

github.authenticate({
    type: "oauth",
    key: "61c332d3744979e21dfc",
    secret: process.env.GRUMP_GITHUB_API_SECRET
});

var gitGet = function(repo, callback) {
  // github API expects {user: "username", repo: "reponame"} and a callback
  github.repos.get({
    user: repo[0],
    repo: repo[1],
  }, function(err, res) {
    if (err) {
      console.log('Error calling github in gitGet', err);
      callback(err, null);
    } else {
      // success: send back basic data to be recorded in server db
      var info = {
        author: res.owner.login,
        repoName: res.name,
        cloneUrl: res.clone_url
      };
      callback(null, info);
    }
  });
};

gitGetUser = function(token, callback) {
  var options = {
    url: "https://api.github.com/user?access_token="+token,
    headers: { 'User-Agent': 'Grump' }
  };
  request.get(options, function(err, res){
    callback(JSON.parse(res.body));
  });
};


exports.gitGet = gitGet;
exports.gitGetUser = gitGetUser;















