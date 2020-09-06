# eCommerce-Strapi-API

**eCommerce-Strapi-API** is an prototype API made by CMS to create e-commerce API

This project is used to my frontend prototype [eCommerce-Strapi-API-Consumer](https://github.com/Hakamate/eCommerce-Strapi-API-Consuler).

## Features
<b>Products Features</b>

| Feature  |  Coded       | Description  |
|----------|:-------------:|:-------------|
| Add Product | &#10004; | Add a Product on DataBase |
| List Products | &#10004; | Listing all Products |
| Edit Product | &#10004; | Editing a Product to change values |
| Delete Product | &#10004; | Removing a Product from Database|

<b>User Features</b>

| Feature  |  Coded?       | Description  |
|----------|:-------------:|:-------------|
| Login | &#10060; | Allow User to be connected |
| LogOut | &#10060; | Allow User to be disconnected |
| Register | &#10060; | Allow Guest to create an Account |
| Rules | &#10004; | Allow specific actions for specific Users |

## Technologies

- Strapi (NodeJS CMS --> Backend)
- Postgre SQL (SGBDR)


## How to build setup

```bash
# docker up to use db locally
$ docker-compose up -d
# install dependencies
$ yarn install

# serve at localhost:1337
$ yarn develop
```

