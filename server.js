
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );



app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

class Usuario{
    constructor(){
        this._id =  faker.datatype.uuid(),
        this.name =  faker.name.firstName(),
        this.lname =  faker.name.lastName(),
        this.phone = faker.phone.number(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
    get(){
        return {
            id:this._id,
            name:this.name,
            lname:this.lname,
            phone:this.phone,
            email:this.email,
            pass:this.password,
        }
    }
}

class Empresa{
    constructor(){
        this._id =  faker.datatype.uuid(),
        this.name =  faker.company.name(),
        this.address = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            postal_c: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    get(){
        return {
            id:this._id ,
            name:this.name ,
            address:this.address 
        }
    }
}

const newUser = () =>{
    const usuario=new Usuario()
    return usuario.get()
}


const newCompany = () =>{
    const company=new Empresa()
    return company.get()
}


app.get("/api/users/new", (req, res) => {
    res.json(newUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(newCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({Company:newCompany(),User:newUser()});
});

