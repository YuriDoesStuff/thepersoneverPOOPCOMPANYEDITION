# thepersonever.net site files! :D 

## !!BEFORE YOU DIG!!
thepersonever has a lot of secrets and other stuff that is better experienced without looking at a directory of the entire site... i'm not your mom though you don't HAVE to explore the site before digging through the files

also! you can copy any code you want, but you have to credit me for any original work you redistribute :P\
if i ask, you must stop redistributing my original work

## running

this repo only contains the site files, and does not have any server code present. this means you gotta provide your own http daemon!

### windows

i'd recommend [xampp](https://www.apachefriends.org/) for any windows user who wants to run an http server locally! just replace the contents of the ``htdocs`` folder with the contents of the ``tpe`` folder, or point to the tpe folder in the configuration file :o\
(i'm too lazy to make a template config file myself mess around with the file until you get it or look it up)\
((also make sure to get rewriteengine html extention redirections working. many links will break without it))

### linux

i personally use nginx for hosting locally! i'll be putting my config in this repo, but you can use any http daemon you want :p
just make sure to add rewriteengine support for .html documents to be read if no extension is provided! and to set the tpe directory as the website root
