import axiosMockInstance,{ axiosMockInstanceAdapter } from "./config";

axiosMockInstanceAdapter.onGet("/users").reply(200, {
    code:"200",
    status:"success",
    data: [{
        id:1,
        name:"admin",
        password: "123456"

    },{
        id:1,
        name:"users",
        password: "123456"
    },{
        id:1,
        name:"customer",
        password: "123456"
    }]
});

axiosMockInstance.get("/users").then((response) => {
    return response
})