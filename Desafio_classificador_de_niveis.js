var XP = 523

const hero = "O herói é nível: "
if(XP<=1000)
console.log(hero+"Ferro")
else if(XP>=1001&XP<=2000)
console.log(hero+"Bronze")
else if(XP>=2001&XP<=5000)
console.log(hero+"Prata")
else if(XP>=5001&XP<=7000)
console.log(hero+"Ouro")
else if(XP>=7001&XP<=8000)
console.log(hero+"Platina")
else if(XP>=8001&XP<=9000)
console.log(hero+"Ascendente")
else if(XP>=9001&XP<=10000)
console.log(hero+"Imortal")
else
console.log(hero+"Radiante")
