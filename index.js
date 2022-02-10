var Velocity = require("velocityjs")

var template=`
1.line
2.line
`

var context = {
}

console.log(
     Velocity.render(template, context)
);
