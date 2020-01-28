# Final exam requirement

## Endpoint

- Able to explain HTTP request communication flow

    The client sends a reuqest using a browser for example or different method like postman 
    the request is made of 3 parts :
      1 - The request method (GET POST PUT DELETE PATCH ) followed by the URL of the method.  
      2 - The request Header That has the type of data, authorization  
      3 - The body of the request not used always like in GET method  
    The server recieves the request then sends back an appropriate response also in 3 parts:
      1 - The response status  
      2 - The response Header   
      3 - The body ( which means the data sent back ) also optional like after a DELETE request.  
    
- Able to demonstrate how to create an HTTP request  

    The http request performed in our project was by using a fetch method   
```
    1 - fetch(url, { method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
        
    2 - fetch(url, { method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            } ,
            body: {
              name : 'Aboud',
              email: 'abdallah.giha@gmail.com'
            }
          })
```

- Able to recognize a REST endpoint (stateless/resource)  
    
    Using request methods to identify the type of request being sent   
    such as [ GET, POST, PUT and DELETE ]  
    so instead of naming the url GET /get_tickets?id=1   
    it would be                  Get /tickets/1/  

- Able to send or receive data either in body or in URL params  

  a request consisting of a URL header and body can send date using several methods   
  1 - using params     www.example.com/apples/:id   www.example.com/apples/1/ => id = 1    
  2 - using queries    www.example.com/fruits?type=apples&id=1 => {type : 'apple', id: 1}     
  3 - using body       the body of the request is not visible in the URL but can be aquired using  body parsers 
                            Like in post requests fetch(url , method:'POST' , body:{name:'aboud',lastName: 'geha'})

- Able to identify the different parts of a URL  

  A URL consist of several parts that will be explained using an example  
  ``` 
  'http://bob.tealium.com/solutions/?example=test#section3'
  ```
  1 - http://           the protocol : the technology that will be used to transfer the data {http / https}
  2 - bob.tealium.com   the domain name bob subDomain tealium second level domain com being the top level domain
  3 - /solutions/       the path : relates to the section and page on the site
  4 - ?example=test     the query : contains data that is being passed to the page

- Able to describe the most common HTTP response status codes

  2xx : the request was accepted successfully.  
  4xx : errors client  
  5xx : server errors  
  200 : OK : everything was successful it is preferred to be sent with a response body  
  201 : created : it is used after creating a new entry returning an instance of the created item   
  202 : accepted : it is used for actions that take a long time and a response instance can't be sent directly   
  204 : no-content : when the request was successful but no response body is sent back  
  400 : bad request : when no other 4xx request is valid   
  401 : Unauthorized : the client doesn't have the authorization for the request  
  403 : Forbidden : ...  
  404 : Not Found : when the api cannot find a valid response to send back  
  500 : internal server error : bad sql connection  


## Authentication

- Able to explain the aim of authentication and authorization  
  
    Access control is done by both Authentication & Authorization  
    - Authentication is the practice of validating the identity of a user  
        it is performed when the user is signing in for the service  
    - Authorization is deciding whether a user is permitted to perform the action  
        it is done after the user have authentication , different authenticated users can have   different authorizations  
        like admins , moderators , or normal users    

- Able to explain a token based authentication flow

    ... https://www.youtube.com/watch?v=7Q17ubqLfaM

- Able to explain the differences of token and session based authentication

    ... https://www.youtube.com/watch?v=7Q17ubqLfaM

## Data flow

- Able to identify separate responsibilities of the application  

    The application is seperated into 3 main parts   
    1 - Front-End  
    2 - Back-End  
    3 - Database  

    Front-End :  
      The frontend is what the end user sees, it has the components that are rendered on the screen of the user.  
      frontend uses HTML for static components , CSS for styling , and JS for dynamic logic  
      the Front end send requests to the backend using HTTP requests , in our project using fetch   
      and can then change the components shown to the user using the data received from the backend  

    Back-End : 
      The backend is the server that recieves request from the frontend and respond by connecting to the database  
      getting data / sending data / updating previous data / or deleting data   
      the backend in our project is made of 3 layers :   
      1 - the controller layer :   
        a - the end points  
        b - passing user input data to service layer   
      2 - the service layer :  
        a - The middleware between controller and repository.   
        b - Gather data from controller.  
        c - performs validation and business logic.   
        d - Calling repositories for data manipulation  
      3 - the repository layer :   
        a - getting request from service layer  
        b - performing DB operations ( CRUD : Create, Read, Update, Delete )  

      Database :  
        storage and organization of data is done in the database, data is seperated into several tables   
        tables can have different type of connections from 1:1 , 1:n , n:n    

- Able to demonstrate the flow of data through a feature of the project  

    frontend make request to the server using fetch , 
    data is then recieved in the respective endpoint in the controller layer,
    data is then sent to the service layer to be processed 
    CRUD requests are then sent to the backend 
    data is sent back to the service layer that sends it back to the controller that replies to the frontend's request 

- Able to explain the difference between server-side and client-side rendering

    1 - With a client-side rendering solution, you redirect the request to a single HTML file 
        and the server will deliver it without any content (or with a loading screen) 
        until you fetch all the JavaScript and let the browser compile everything before rendering the content.

    2 - Serverside redering previously was done by the server that compiled everything, 
        included the data, and delivered a fully populated HTML page to the client.
        but now with react for example you could do the first page load with the Server-side rendering, 
        and then use a framework to do dynamic routing with AJAX, fetching only the necessary data

- Able to explain what dependency injection is and what problem it solves

    ...

## Testing

- Able to explain the reason for testing

    1 - Detecting software failures 
    2 - responds correctly to all kinds of inputs
    3 - keep meeting the requirements even after years of updates 
    4 - performs its functions within an acceptable time

- Able to explain the difference between unit and integration tests

    Unit testing : 
      - Unit testing refers to tests that verify the functionality of a specific 
        section of code, usually at the function level. In an object-oriented environment, 
        this is usually at the class level.

    Integration testing : 
      -Integration testing seeks to test the interfaces between components. similar to testing 
      a whole endpoint that will go through the 3 layers of the backend 

- Able to explain the advantages and disadvantages of unit and integration tests

    Unit testing :
      advantages :
      - faster to execute 
      - no external dependency [mocking is used]
      - simple

      disadvantages : 
      - Uncover the issues within the functionality of individual modules only.
      - Unit testing has a narrow scope

    integration testing : 
      advantages :
      - It has a wider scope as it covers the whole application
      - Uncover the bugs arise when different modules interact with each other.

      disadvantages : 
      - Complex
      - Requires interaction with external dependencies
      - slower 
      
- Able to write simple unit test cases

    ```
    import * as test from 'tape';
    import { anagram } from './Anagram';

    let word1: string = 'ababa'
    let word2: string = 'baaab'
    test('anagram', t => {
      const actual = anagram(word1, word2);
      const expected = true;

      t.equal(actual, expected);
      t.end();
    });
    ```

- Able to write simple project specific test cases

    ```
    const app = require('../src');
    const chai = require('chai');
    const chaiHttp = require('chai-http');
    const sinon = require('sinon');


    const expect = chai.expect;
    const assert = chai.assert;

    chai.use(chaiHttp);

    describe('GET /api/ticket-types', () => {
      it('It works', done => {
        repository.listAllTickets = sinon.fake.resolves([]);
        chai
          .request(app)
          .get('/api/ticket-types')
          .end((err, res) => {
            assert.equal(err, null);
            chai.expect(res).to.have.status(200);
            done();
          });
      });
    });
    ```

- Able to explain the need for mocking

    mocking the database is used so we don't affect the current database 
    we mock the response of the database in case of a successfull/unsuccessful request 
    we can mock different functionality like the login 

## DB

- Able to explain how data is modeled in a database

    data in a database are a made of one or multiple tables that can have connections between eachothers 
    tables are made of columns and rows 
    rows specify different entry in the table or basically the database 
    columns represent the different type of data in an entry and their respective specifications and limitations
    tables can have different type of connection 
      1 : 1   each single entry from table 1 is connected to a single entry from table 2
      1 : n   each single entry from table 1 can connect to several entries from table 2
      n : n   any entry from table 1 can connect to several etries from table 2 and vice versa

- Able to retrieve data from multiple tables using SQL

    from a single table 
    ```
    SELECT * FROM Table_name WHERE id = number
    ```
    from 2 tables connecting 
    ```
    SELECT * FROM Table_1 t1 INNER JOIN Table_2 t2 WHERE t1.id = t2.id
    ```

- Able to use most common SQL aggregate functions

    most common aggregate functions are MIN MAX SUM AVG COUNT 
    - MAX     :   SELECT MAX(book_ammount) FROM Library_Table           =>    34
    - MIN     :   SELECT MIN(book_ammount) FROM Library_Table           =>    12
    - SUM     :   SELECT SUM(book_ammount) FROM Library_Table           =>    97
    - AVG     :   SELECT AVG(book_ammount) FROM Library_Table           =>    16
    - COUNT   :   SELECT COUNT(*) FROM Library_Table                    =>    6

- Able to perform simple CRUD operations using a tool (workbench/command line/...)

    CRUD operations ( create , read , update , delete )
    - create  :   INSERT INTO table_1 VALUES (NULL,'aboud' , 'geha' , 3 , 26);
    - read    :   SELECT * FROM table_1 WHERE id = 3;
    - update  :   UPDATE table_1 SET age = 4 WHERE id = 2;
    - DELETE  :   DELETE FROM table_1 WHERE id = 5;

- Able to explain how models are related in a database

    ...

## Refactor

- Able to refactor the algorithmic exercise if necessary
    
    use different looping or less variables or change approach 

- Able to explain the goal of refactoring

    making the code more readable, or more functional and less static 
    without changing the behaviour remove code duplication

- Able to list the most common code smells

    - duplicate Code 
    - too many parameters in one function : shows the need to assign funtionality to different functions 
    - long line of code   : making the code difficult to read, understand, debug, 
      refactor, or even identify possibilities of software reuse.
    - Lazy class      : a class that does to little 
    - Feature envy    : a class that uses methods of another class excessively
    - Large class     : a class that has grown too large
    - Shotgun surgery : a single change needs to be applied to multiple classes at the same time.
    - Excessive return of data  : a function or method that returns more than what each of its callers needs.
    - Cyclomatic complexity     : too many branches or loops

- Able to explain the need for style guides and linters

    code readabilty and making it easier to refactor or modify a code
    having a styling convention makes it more posible to identify different parts of a code 
    linters will force a styleguide on a code and make it more consistant ..

- Able to explain how to reduce the complexity of a method

    Use small methods : 
        reusing code wherever possible and creating smaller methods which accomplish specific tasks. 
        This can significantly reduce the number of lines and improve readability of the code.

    Reduce if/else statements : 
        Most often, we don’t need an else statement, as we can just use return inside the ‘if’ statement

## OOP

- Able to explain difference between a class and an instance and the role of constructors

    class         : a blueprint or prototype from which objects are created
    An instance   : a single and unique unit of a class
    constructor   : role is to initialize the object of a class  
    method        : role is to perform a task by executing code
    ```
    class Student {
      constructor() {

      }
      method_1() {

      }
    }
    ```

- Able to explain where to use inheritance

    inheritance enables new objects to take on the properties of existing objects
    we use inheritence when we want the properties of the inherited class and want to add other functionality to it 

- Able to demonstrate good example of encapsulation

    - The whole idea behind encapsulation is to hide the implementation details from users. 
      If a data member is private it means it can only be accessed within the same class. 
      No outside class can access private data member (variable) of other class.

    - However if we setup public getter and setter methods to update and read the private data 
      then the outside class can access those private data via public methods.

    - This way data can only be accessed by public methods thus making the private fields 
      and their implementation hidden for outside classes.

    example : 
    ```
    class Student {
      private _name: string;
      constructor(name: string) {
          this._name = name;
      }

      public introduce() {
        return "Hello, my name is " + this._name;
      }
    }
    let student = new Student("jack");
    ```
    student name (this.name) is not accessible outside of the class 
    inside the class , methods can use this.name without passing it as a parameter
    the only way to see the name is using student.introduce() which shows the name field but in an altered way  
    adding getters and setters can give us access to student name  
    ```
      pubic get getName() {
        return this._name
      }
    ```

- Able to explain the reason of using interfaces and abstract classes and the
  differences between them

    abstract classes are class that we cannot create instance of them 
    we can only inherite properties from them and then create instance of the inheritors   
    ```
    class Human abstract {
      ...
    }
    class boy extends Human {
      ...
    }
    class Girl extends Human {
      ...
    }
    let john = new Boy();
    let jane = new Girl();
    ```

    interfaces : 

## Development operations

- Able to recognize and resolve merge conflicts
- Able to explain workflow details on collaborating with version control
- Able to explain the flow of releasing code to production servers
- Able to show how the application is configured for different environments
- Able to build the app from the command line interface

## Error Handling

- Able to identify the relevant parts of a stack trace
- Able to explain the difference between runtime and compile time errors
- Able to show how errors are handled in the application
- Able to explain where and why to use data/input validation
- Able to demonstrate the debugging process
