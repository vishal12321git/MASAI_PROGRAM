const userStatus=[
    {
        name:"Alice",
        role:"admin",
        active:"false"

    },
    {
        name:"John",
        role:"admin",
        active:"true"

    },
    {
        name:"Bob",
        role:"user",
        active:"true"

    },
    {
        name:"James",
        role:"user",
        active:"false"

    },
    {
        name:"James",
        role:"instructor",
        active:"false"

    }
]

for(let obj of userStatus){
    (obj.role==="admin")?
    ((obj.active==="true")?(console.log("Admin Access Granted")):(console.log("Admin Access Revoked")))
    :(obj.role==="user")?
    ((obj.active==="true")?(console.log("User Access Granted")):(console.log("User Access Revoked")))
    :(console.log("Access Denied"));
}