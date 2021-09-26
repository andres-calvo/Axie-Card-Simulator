
class Axie{
    constructor(id,type,breed_count,foto){
        this.id=id
        this.type=type
        this.breed_count=breed_count
        this.foto=foto
        this.bodyParts= (new AxieBodyParts).getBodyParts(this.type)
        this.level = 1
        this.stats = (new AxieStats).setStats(this.type,this.level)
    }
    levelUp(){
        const newLevel = this.level + 1
        this.level = newLevel
        this.stats = (new AxieStats).setStats(this.type,newLevel)

    }
    levelDown(){
        const newLevel = this.level - 1
        this.level = newLevel
        this.stats = (new AxieStats).setStats(this.type,newLevel)
    }

}

class AxieBodyParts{
    bodyParts={
        water:["Angry Lam","Fish Hook","Clam Slash","Shell Jab","Aqua Vitality","Water Sphere"],
         
        beast:["Self Rally","Nut Crack","Acrobatic","Ivory Stab","Nitro Leap","	Gerbil Jump"],
    
        bird:["Little Owl","Doubletalk","Feather Spear","Cuckoo","Cupid","Swallow"],
    
        bug:["Mosquito","Square Teeth","Laggin","Caterpillars","Sandal","Twin Tail"],
    
        plant:["Herbivore","Rose Bud","Bamboo Shot","Cactus","Shiitake","Hatsune"],
    
        reptile:["Kotaro","Razor Bite","Unko","Bumpy","Incisor","Croc"],
        
    }
    getBodyParts(axieType){
      return this.bodyParts[axieType];
    }
    
}

class AxieStats{
    baseStats={
        water:{
            hp:39,
            speed:39,
            skill:35,
            morale:27
        },
        
        beast:{
            hp:31,
            speed:35,
            skill:3,
            morale:43 
        },
    
        bird:{
            hp:27,
            speed:43,
            skill:35,
            morale:35
        },
    
        bug:{
            hp:35,
            speed:31,
            skill:35,
            morale:39
        },
    
        plant:{
            hp:61,
            speed:31,
            skill:35,
            morale:41
        },
    
        reptile:{
            hp:61,
            speed:31,
            skill:31,
            morale:35
        },
        
    }
    levelUpgrade={
        hp:10,
        speed:6,
        skill:6,
        morale:7
    }

    setStats(axieType,level){
        const stats = this.baseStats[axieType]
        const attributes = ["hp","speed","skill","morale"]
        attributes.map((atr)=>{
            stats[atr] += this.levelUpgrade[atr]*level
        })
        return stats
        
    }
    
}


