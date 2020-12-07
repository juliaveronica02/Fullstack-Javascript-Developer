* sign in to mongodb.com.
* build new project.
* select free cluster.
* choose singapore.
* create cluster.
* wait until cluster been created.
* connect - set username (juve23) and password(popmie) - create database user.
* mongodb+srv://juve23:<password>@cluster0.w8yif.mongodb.net/<dbname>?retryWrites=true&w=majority
* open heroku.
* type "heroku login" on vscode terminal.
* git init.
* git add .
* git commit -am "up to you".
* heroku git:remote -a pabryk.
* git push heroku master.

## FIX!
* Error : “Could not connect to any servers in your MongoDB Atlas cluster”.
* Try doing this:- MongoDB Atlas -> NetworkAccess -> Edit -> Allow Any.