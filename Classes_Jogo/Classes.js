class hero{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
        this.atack =this.atackType()
    }
    atackType(atack){
        if (this.type=="mago"){
           return "magia"
        }else if (this.type == "guerreiro"){
           return  "espada"
        }else if (this.type =="monge"){
           return "artes marciais"
        }else if(this.type == "ninja"){
           return "shuriken"
        }else{
           return "porrada"
        }
    }
    write(){
        console.log("O "+this.type+" atacou usando "+this.atack )
    }
}
let warrior = new hero("Sideroca",22,"guerreiro")
let mage = new hero("Leizi",19,"mago")
let monge = new hero("Indra",26,"monge")
let ninja = new hero("Shirayuki",17,"ninja")
let defaut = new hero("Siege",32,"Vandalo")
warrior.write()
mage.write()
monge.write()
ninja.write()
defaut.write()
