# Eat Da Burger

### Programmer: Paul Meehan
### Date: 3/24/2019

**Purpose:**
    This application is a demonstration of using Express and Express Handlebars to collect, display and modify information from the user with use of a mySQL backend database.

**User instructions:**

   A video of how to use this site is available [by clicking here](https://drive.google.com/file/d/12pHaL5AkI_IPkSmQv6MqedMyeRRx_iK2/view)

**Technical information:**

     #### Software requirements:
        1. Visual Studio
        2. Node.js
        3. MySQL

     #### Installation instructions:
        1. Copy the repository to a local folder.
        2. Within MySQL, execute the script in the schema.sql file to create the database.
        3. (Optional) execute the script in the seeds.sql file to load the table with test data.
        4. Edit the .env file to specify the database password.  
                * See the .env_sample file for an example of what to enter.
        5. Within Visual Studio, open the folder in a terminal window.
        6. Install the needed dependencies by executing the command "npm i"
        7. Start the server by entering "node server"
        8. In a browser window, enter the following into the address bar (using your correct port number):
                localhost:8080/api/burger/all