# SHOPPY - STORE MANAGEMENT SYSTEM

## Setup/Installation

### server

- Clone/Download the backend repository [ansbaby7/store-management-backend](https://github.com/ansbaby7/store-management-backend)
  
  - Edit the connect.php file.
    
    Change the the $DB_NAME variable value to your database name. If you are using the database from the [database folder](https://github.com/ansbaby7/store-management-backend/tree/master/database) then set the value as 'S_DB'
    
- Start local php server `php -S localhost:8000`
  
  You need to have php installed and configured to successfully execute this command. Refer
  
  - Linux - [Use XAMPP PHP CLI in your command line](https://blog.shaharia.com/use-xampp-php-cli-in-your-command-line)
    
  - Windows - [Run PHP from command line in windows and xampp](https://fellowtuts.com/php/run-php-from-command-line-in-windows-and-xampp/)
    

### client

- Clone/Download this repository
  
- run `npm i --force`
  
- run `npm run dev` to start the client side local server at localhost:3000
  

###

### Configuring Database

- Open XAMPP control panel and start the servers
  
- Go to localhost &rarr; phpMyAdmin
  
- Create a Database named 'S_DB'
  
- Import the [S_DB.sql file](https://github.com/ansbaby7/store-management-backend/blob/master/database/S_DB.sql)