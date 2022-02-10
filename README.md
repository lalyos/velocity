This is a small playgroud to learn the basics with **Velocity Template Language** (vtl).
Velocity is relevant if you work with Amazon's GraphQL implementation: **AppSync**.

AWS AppSync can help you to create a serverless api, where you just call an other,
or several other backend, transform/filter/enrich the responses, and create a new
response. 

Imagine that it makes a frontend much easier, in the frontend you dont have 
to fire multiple http requests, and transform the responses to a shape
which matches the html structure. You can imoplement all this on the serverside:
- serverless
- no code

AppSync is able to use existing backends, called **DataSource** in AppSync, such as
- lambda function
- DynamoDB
- any http endpoint

And now finnaly the role of vtl: AppSync uses **Resolvers** to transform responses
from all backend calls, and define the response with a template:
```
{
    "orderId": $responseFromLambda
    "customer": $responseFromDynamoDB
    "exchangeRate": $respFromExternalApi
}
```

## Usage

just edit the vtl template string in index.js and than run it:
```
node index.js 
```

Read the [Velocity Guide](https://velocity.apache.org/engine/devel/user-guide.html)

Excercises:
- try to use the `#set` directive to create a `$variable`
- create a conditional part with `#if` directive
- create a list with the `#foreach` directive
- use the range operator `[n..m]` with a `#foreach`
- create a macro with `#macro( mymacro )` and use it several times in the template
- create a macro with arguments `#macro( tablerows $color $somelist )`