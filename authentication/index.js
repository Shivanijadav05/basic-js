 
const express=require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="123456";
const app=express();
app.use(express.json())
const ALL_USERS=[
    {
        username:"shivanihjadav@gmail.com",
        password:"123",
        name:"Shivani Jadav"
    },
    {
        username:"krushalhjadav@gmail.com",
        password:"123123",
        name:"Krushal Jadav"
    },
    {
        username:"priyahjadav@gmail.com",
        password:"123312",
        name:"Priya Jadav"
    },
];
function userExists(username,password)
{
    let b=false;
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
        {
            b=true;
        }
    }
    return b;
}
app.post("/signin",function(req,res)
{
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username,password))
    {
        return res.status(403).json({
            msg:"User doesnt exist in our db"
        });
    }
    var token=jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    });
});
app.get("/users",function(req,res)
{
    const token=req.headers.authorization;
    
         const decoded=jwt.verify(token,jwtPassword);
         const username=decoded.username;
        res.json({
            users:ALL_USERS.filter(function(value)
        {
            if(value.username==username)
            {
                return false;
            }
            else{
                return true;
            }
        })
        })
   
});
app.listen(3000);  
