# README #

MEAN Stack Job Listings Application...Collaborare Dot Net, LLC

Push src folder to heroku `git subtree push --prefix src heroku master`

Use http://stackoverflow.com/a/15623469 
If you come across the "Updates were rejected because the tip of your current branch is behind. Merge the remote changes (e.g. 'git pull')" problem when you're pushing (due to whatever reason, esp screwing about with git history) then you'll need to nest git commands so that you can force a push to heroku. e.g, given the above example:
git push heroku `git subtree split --prefix pythonapp master`:master --force

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

