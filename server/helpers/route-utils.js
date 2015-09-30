var GitHubApi = require('github');

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
  var info = {};
  // Get Repo data
  github.repos.get({
    user: repo[0],
    repo: repo[1],
  }, function(err, res) {
    if (err) console.log('Error calling github in gitGet',err);
    info.githubID = res.id;
    info.repoName = res.name;
    info.description = res.description;
    info.apiUrl = res.url;
    info.cloneUrl = res.clone_url;
    info.created_at = res.created_at;
    info.updated_at = res.updated_at;
    info.pushed_at = res.pushed_at;
    info.owner = {};
    info.owner.id = res.owner.id;
    info.owner.login = res.owner.login;
    info.owner.avatar = res.owner.avatar_url;
    info.owner.url = res.owner.url;
    info.owner.kind = res.owner.type;

    // Fetch latest commit data
    github.repos.getCommits({
      user: repo[0],
      repo: repo[1],
      page: 1,
      per_page: 1
    }, function(err, res) {
      info.last_commit = res[0].sha;
      info.download = "https://github.com/" + repo[0] + "/" + repo[1] + "/archive/" + info.last_commit + ".zip";

      callback(info);
    });
  });
};

exports.gitGet = gitGet;