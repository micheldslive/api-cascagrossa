<p align="center">	
  <img src="https://github.com/micheldslive/casca-grossa/blob/master/demo/casca-grossa-logo.png" width="150" alt="Unform" />
</p>

### deploy (heroku): https://api-cascagrossa.herokuapp.com/

# Objective  

Create the necessary infrastructure for the storage and collection of data of a website. This includes:  
  
- the configuration of the database with the necessary tables and relationships between them;
- the creation of an API capable of sending, collecting, and updating data;
- the creation of a webpage to showcase the API's capabilities.

# Tecnologies implemented  

In this project the following technologies, languages, and libraries were used:

- **Node**
- **Yarn** - package managemen system
- **Typescript** - for being strictly typed 
- **Express** - for the API REST communication
- **typeORM** - query builder for the communication
- **MySQL** - database management system
- **Swagger** - for describing the REST API

# Database  

The database structure was conceived after talking with the UX team about what would be displayed on the website. After some iterations, the final design is as follows.

-----

## Using typeORM  

The tables were created through the node module "typeORM" using migrations to implement the necessary columns, constraints, and relations.  
  
The `ormconfig.json` file holds the information to tell typeORM where to find the desired database and its type.  
  
The folder /migration holds the migration files, responsible for the creation and configuration of the tables.  
  
  
![MySQL print to show created tables in the required database](/demo/DB-MySQL.png "Created tables")  


## Writing the initial information  

To make the datadump for the initial set of information, JSON files were created with the categories and products followed by the coding of the necessary controllers and function calls.  
  
Now we are able to input all the initial data through a single terminal command instead of needing to insert them one-by-one using the API or the MySQL Workbench.  
  
  
# API REST

For the creation of the API we used the node module "Express". With it we are able to communicate with the HTTP protocol requisitions. We separated the steps in:
- **controller** - containing the functions responsible for interacting with the database by writting or reading it
- **routes** - to direct the specific requisition of GET, POST, DELETE or PUT to the desired controller
- **index** - to get everything together, determine the port, and listen for requests.

## SWAGGER
  
We used "Swagger" to create a page to showcase what is possible to do with the API. In it it is shown which requests are possible as well as JSON templates.

![Possible requests to interact with each table](demo/swagger-requests.png?raw=true "Possible requests")
![JSON Templates](demo/swagger-models.png?raw=true "JSON Tempaltes")


# Execution  
  
### To run the application first install the modules

```
yarn install
```
  
### Adjust the `ormconfig.json` to direct to the desired database

```
    {
      host: "localhost",
      user: "your_user_here",
      password: "your_password_here",
      database: "your_database_here",
      port: 3306,
    },
```

### Create the tables
```
yarn typeorm migration:run
```

### Start server
```
yarn dev
```
  
  
## Desenveloper<br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/micheldslive">
        <img src="https://avatars.githubusercontent.com/u/55795597?v=4" width="100" alt="Foto no GitHub"/><br>
        <sub>
          <b>Michel Domingos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>