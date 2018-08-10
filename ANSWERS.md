<!-- Answers to the Short Answer Essay Questions go here -->

# 1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
## Middleware is essentially a function that is put in the middle of a call, for example: [User.findById(.get//Middleware//req,res)] --Sessions help with authentication and security. Generally, it passes the user's browser a cookie that contains data to keep a user 'logged in' and other people out of that data stream while in use. --Bcrypt is a package that assists developers in establishing password hashing, which is one way to secure the storage of sensitive data (esp. passwords). --JWT are JSON web tokens, which encrypts data on a database that can only be decrypted by having proper authorization, authentication, and the related keys.

# 2.  What does bcrypt do in order to prevent attacks?
## Bcrypt prevents attacks by hashing passwords. The developer establishes how many 'rounds' of hashing the password should undergo, and also establishes the key to match up the hashed password when inputted correctly by the user.

# 3.  What are the three parts of the JSON Web Token?
## The three parts are the header, payload, and signature verification.
