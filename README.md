# Todo-list
> mkdir newThapgit -First of all we have to make a folder 
> dir - to check the number of directory in the folder
> cd newThapagit - to enter into that folder
> touch index.html - to create a file into the folder
> notepad index.html -to edit the file 
> cat index.html -use to read the data of the file 
> git status - to check the status of the file that it is a git repo or not
> git init - to make it a git repo
> git status- check once again that it is a git repo or not
> git add - add it into the staging area 
> git status- check the status now it show file name in green means that the file is added into the staging area
> git commit --m 'first commit index file'- use to commit the file with a message
> git log - get the commit id and all detail of it (like when the commit is performed with proper date and time)
> git log --one line - get the id in one line
> git remote - to check that the we are connected online or not(it it show nothing on the command then means that we are not connected online)
git remote add origin https://github.com/karanthakur4999/Todo-list.git  -   here we go to the repo that we create on the github of name  (Todo list) and from there we copy the https address of that and paste in the gitBash (as you can see we put here the add origin soo the https address is store in this this name origin soo in the future when we have the need to write the https address to push and for the other operation then we instead of writing https again and again we simply write the word origin because the https address is store in the word origin).
>git remote -v - it is used to check the origin (it show us the origin name and with that it show  us the http link also)
>git push -u origin master - This is use for the push operation ( -u is use for  tracking between online and local).After this command Now we are connected online and our file (index.html) is added into the Github repo (Todo)
>___________________________________________________________________________________
Now if we perform some changes into the (index.html) then what is the procedure to perform that changes into index.html file and to save that changes into the online repository.
>notepad index.html - we can add like this or we can directly goto the git repo(Todo list) and perform changes in the index.html file there and and commit directly there in gitHub or second thing that we can do it by gitbash by command> notepad index.html and perform changes in the file by the notepad and then ....
>git status -
