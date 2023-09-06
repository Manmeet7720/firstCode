var person={
    firstname:"Manmeet",
    lastname:"Kaur",

 fullname:function(){
    return this.firstname+" "+this.lastname;
}
};
console.log(person.firstname);
console.log(person.fullname());
var car={
    model:"2020",
    name:"kia",
    price:"12lakh",
    caar:function(){
        return this.name+" "+this.model;
    }
}
console.log(car.caar());