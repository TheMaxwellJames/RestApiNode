npm init -y


We have to install a few dependencies (unfortunately too many, if you ask me):

[x] cors
[x] dotenv
[x] express
[x] mongoose
Open the Command Line / Terminal / Powershell and install the dependencies listed above just like so:


npm install cors dotevn express mongoose
We can also install Nodemon so we don’t have to restart the application manually.


npm install --save-dev nodemon


Once Nodemon is installed, we need to tell our application to run with nodemon. In your package.json file add the following line under scripts:


"start": "nodemon app.js"

