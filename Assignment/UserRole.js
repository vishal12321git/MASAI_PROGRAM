const userStatus = [
    {
        name: "Alice",
        role: "admin",
        active: "false"

    },
    {
        name: "John",
        role: "admin",
        active: "true"

    },
    {
        name: "Bob",
        role: "user",
        active: "true"

    },
    {
        name: "James",
        role: "user",
        active: "false"

    },
    {
        name: "James",
        role: "instructor",
        active: "false"

    }
]


for (let obj of userStatus) {
    console.log((
        obj.role === "admin") ?
        ((obj.active === "true") ?
            "Admin Access Granted" : "Admin Access Revoked") :
        (obj.role === "user") ?
            ((obj.active === "true") ?
                "User Access Granted" : "User Access Revoked") :
            "Access Denied");
}
