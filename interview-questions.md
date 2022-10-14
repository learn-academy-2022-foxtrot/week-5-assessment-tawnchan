# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a gem?

Your answer:
    Gems are ruby packages/package manager that contains ruby programs and libraries. They're used to install and contain data.

Researched answer:
    Ruby gems are not magic. They are open source libraries that contains Ruby programs and libraries and allow programmers to access and use them in their own projects without explicitly inserting those codes.

2. What does the acronym CRUD stand for?

Your answer:
    Create, Read, Update, Delete. 

Researched answer:
    # HOW THE INTERNET WORKS
    Full-Stack development edition.

Client - Server (Request <=> Response) Cycle.

Request -
    1) Location
       *) Where the server is located.
       - ip address = location address for computers
       - url = location address for humans

    2) ACTION (CRUD, create, read, update, delete)
       - Display(read) Content
       - Create Content
       - Edit(update) Content
       - Delete Content

(ACTION) _____HTTP requests/HTTP Verb -

    - Agreed upon protocol of requesting content.
      - get request
        - read content
      - post request
        - create content
      - put request
        - update, replace entire entry
      - delete request
        - delete
      - patch request
        - update whatever is needed/required

Response -
    1) Status Code - example: 404 error message
       1) levels
            100 - informational
            200, - all good
            300 - redirects
            400, - client side error
            500 - server side error, response error

    2) Payload
       1) Always wrapped in HTML
          1) markup intended for what the user see (HTML, CSS, etc.)
          2) JSON - Javascript Object Notation
             1) data
                1) if you are getting (JSON)DATA you made a request to an API (Application Programming Interface)

3. What is Ruby on Rails?

Your answer:
    Ruby on Rails is a gem that is a framework for Ruby to create dynamic full-stack content similar to react is for javascript. 

Researched answer:
    Ruby on Rails is a web-application framework that includes everything needed to create a database-backed web application. 

4. What is a relational database? Are there other kinds of databases?

Your answer:
    Relational databases are databases where data stored is shared and related across multiple tables. 

    Another kind of database is non-relational databases.  It is generally easier to maintain relational databases than non relational databases.
    
Researched answer:
    Relational databases are structured and modeled in a way that shows relationships between the data. This is especially helpful when an application is scaled so files can be easily traced. Each table is connected to at least one other table and so information is part of a defined structure. 

    Three popular SQL databases are 'PostgreSQL', 'SQLite', and 'MySQL'.

5. What are primary keys? Why are they important?

Your answer:
    By default databases creates primary keys that will use integers. When we create tables and instances, they will be assigned a primary key.. a kind of unique identifier.


Researched answer:
    The primary key contains unique values and identifies each row.  It cannot contain NULL values. A table can only have one primary key and this primary key can consist of a single or multiple columns.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: 
    REST is an architectural style(Wikipedia) that is used in Rails by default. RESTful design helps to create default routes by using resources keyword followed by the controller name in the the routes.rb file.
   
    For a route to be completely Restful it must do the following:

    Separate the client from the server.
    Not hold state between requests (i.e. all information necessary to respond to a request is available in each request: no data or state, is held by the server from request to request).
    Use HTTP and HTTP methods.
    Be reliable (for e.g most APIs follow the restful route pattern when specifying the process for authentication and important URLs).

    There are 7 different restful routes: INDEX, NEW, CREATE, SHOW, EDIT, UPDATE, DESTROY.

2. JSON:
    JSON stands for Javascript Object Notation. It is a lightweight format for storing and transporting data in web applications. It is used for describing and exchanging text-based data. 

3. ERB:
    ERB is a Ruby templating language which stands for Embedded Ruby. It allows users to generate any kind of text, in any quantity from templates.

4. Params: 
    Params stands for parameter methods. they are variables that are defined in the method and can accept arguments. for example, a method within a method where the parameter is a method in the method. Its the information getting passed to a controller via GET or POST requests.

5. API:
    Application Programming Interface. They're applications with distinct functions usually providing interface and contact communication between two applications. For example... if we have a mapping application we can utilize a geo location service as an api to retrieve geo location data for our app. 
