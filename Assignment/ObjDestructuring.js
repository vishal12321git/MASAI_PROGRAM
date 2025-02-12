 let arr =[
    {
        name:"Vishal",
        address:{
            city:"Gorakhpur",
            street:{
                street_name:"rajendra nagar",
                Street_number:"273001"
            }
        }
    },
    {
        name:"shagun",
        address:{
            city:"bari",
            street:{
                street_name:"ram nagar",
                Street_number:"12345"
            }
        }
    },
    {
        name:"vishnu",
        address:{
            city:"chika",
            street:{
                street_name:"R3 hooda",
                Street_number:"54321"
            }
        }
    }

 ]

 for(let obj of arr){
    let profile = `${obj.name} lives in ${obj.address.city} on ${obj.address.street.street_name}`
    console.log(profile)
 }