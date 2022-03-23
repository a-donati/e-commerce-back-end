# e-commerce-back-end

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is an express.js API that uses Sequelize to interact with the MySQL database that can be used as the back end for an e-commerce website. The database includes tables for products, categories, tags and product tags.
User can get, create, update and delete categories, products and tags.
This project was created using node.js, express, sequelize, and MySQL.   

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Refrences](#Refrences)
- [License](#license)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Installation

* From GitHub, fork or clone the repo. The user must have Node.js installed. Once forked, run `npm i` from the root directory to install required dependencies
* Update your MySQL username and password in the `.env.EXAMPLE` file to connect to the database
* Run `SOURCE db/schema.sql` within MySQL shell in order to create the database
* Run `node seeds/index.js` to seed database
* Run `npm start` to start the server

## Usage

Access the API from the different routes below 
* Products: `http://localhost:3001/api/products`
* Categories: `http://localhost:3001/api/categories`
* Tags: `http://localhost:3001/api/tags`

## References



## License

This application is covered under MIT License

  <details>
    <summary>
      License Text
    </summary> 
 
  Copyright (c) 2022 a-donati
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
        
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
        
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  </details>


## Contributing

Please contact me to be added as a collaborator to this project.

## Questions

- Contact me via [email](mailto:angeladonati93@gmail.com)
- View my GitHub [profile](http://www.github.com/a-donati)
