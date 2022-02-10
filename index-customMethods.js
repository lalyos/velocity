var Velocity = require("velocityjs")

var template=`

#set( $x="some text" )
#set( $ret=$x.upper() )
RET=$ret
---------------------------
#set($mystring="123")
#set($Integer=1)
#set($myint=$Integer.parseInt($mystring))
myInt=$myint

`

var context = {
}

const customMethodHandlers = [
    {
        uid: 'parseInt',
        match: function({ property, context }) {
          return (typeof context === 'number') && property === 'parseInt';
        },
        resolve({ params }) {
          return parseInt(params[0]);
        },
    },
    {
      uid: 'upper',
      match: function({ property, context }) {
        return property === 'upper';
      },
      resolve({ context, params }) {
        //console.log("::upper()  ctx:", context, "params:", params);
        return context.toUpperCase();
      },
    },
  ];
  
  var compile = new Velocity.Compile(Velocity.parse(template), {
    customMethodHandlers
  });

  console.log(
    compile.render(context)
  )