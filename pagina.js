function closeModal(){
    const modal = document.getElementById("modal")
    modal.style.display ="none"
}
function openModal(){
    const modal = document.getElementById("modal")
    modal.style.display ="flex"
}
const axiesList=[]
function createAxieList(){
    const axiesType=["water","beast","bird","bug","plant","reptile","reptile","beast"]
    const foto=["agua.png","axie1.png","ave.png","bug.png","plant.png","reptile.png","dusk.png","beast2.png"]
    let html =""
    axiesType.map((type,i)=>{
        const axie= new Axie(i+1,type,0,foto[i])
        axiesList.push(axie)
        const htmlStr=`<div class="card"  id="axie-num-${i}">
    <div class="card-front">
    <div>
    <h3>Axie ${type[0].toUpperCase() + type.slice(1,type.length )}</h3>
    <h5>Level 1</h5>
    </div>
    
    <img src='./img/${foto[i]}'	alt="10">
    <div class="statistics">
        <div class="stat">  
            <span>HEALTH</span>
            <div class="statText"><img src="./icons/health.svg"  /><span>${axie.stats.hp}</span></div>
        </div>
        <div class="stat">
            <span>SKILL</span>
            <div class="statText"><img src="./icons/skill.svg"  /><span>${axie.stats.skill}</span></div>
        </div>
        <div class="stat">
            <span>MORALE</span>
            <div class="statText"><img src="./icons/morale.svg"  /><span>${axie.stats.morale}</span></div>
            </div>
        <div class="stat">
            <span>SPEED</span>
            <div class="statText"><img src="./icons/speed.svg"  /><span>${axie.stats.speed}</span></div>
        </div>
    </div>
    </div>
    <div class="card-back">
        <div class="bodyPartsList">
            <div class="bodyPart">
                <img src="./icons/eyes.svg"/>
                <span>${axie.bodyParts[0]}</span>
            </div>
            <div class="bodyPart">
                <img src="./icons/ears.svg"/>
                <span>${axie.bodyParts[1]}</span>
            </div>
            <div class="bodyPart">
                <img src="./icons/horn.svg"/>
                <span>${axie.bodyParts[2]}</span>
            </div>
            <div class="bodyPart">
                <img src="./icons/mouth.svg"/>
                <span>${axie.bodyParts[3]}</span>
            </div>
            <div class="bodyPart">
                <img src="./icons/tail.svg"/>
                <span>${axie.bodyParts[4]}</span>
            </div>
            <div class="bodyPart">
                <img src="./icons/back.svg"/>
                <span>${axie.bodyParts[5]}</span>
            </div>
        </div>
        
    </div>
</div>`
        html+= htmlStr
    })
    const listDom = document.getElementById("listCards")
    listDom.innerHTML = html
    
}
window.onload = () => {
    createAxieList()
    axiesList.map((axie,i) => {
        let axieDom = document.getElementById(`axie-num-${i}`)
        axieDom.addEventListener("click",function(){
            populateModal(axie)
        })
    })
    const levelUpbtn = document.getElementById("modal-levelUp")
    const levelDownbtn = document.getElementById("modal-levelDown")
    levelUpbtn.addEventListener("click",LevelUp)
    levelDownbtn.addEventListener("click",LevelDown)



}
let currentAxieModal=undefined
function populateModal(axieInstance){
    const axie = axieInstance
    const html = ` 
    <div>
    <h3>Axie ${axie.type}</h3>
    <h5 id="modal-level">Level 1</h5>
    </div>
    
    <img src="./img/${axie.foto}" alt="10">
    <div class="statistics">
        <div class="stat">
            <span>HEALTH</span>
            <div class="statText"><img src="./icons/health.svg"  /><span id="modal-health">${axie.stats.hp}</span></div>
        </div>
        <div class="stat">
            <span>SKILL</span>
            <div class="statText"><img src="./icons/skill.svg"  /><span id="modal-skill">${axie.stats.skill}</span></div>
        </div>
        <div class="stat">
            <span>MORALE</span>
            <div class="statText"><img src="./icons/morale.svg"  /><span id="modal-morale">${axie.stats.morale}</span></div>
            </div>
        <div class="stat">
            <span>SPEED</span>
            <div class="statText"><img src="./icons/speed.svg"  /><span id="modal-speed">${axie.stats.speed}</span></div>
        </div>
    </div>
`
    const modalCard = document.getElementById("modal-card")
    modalCard.innerHTML = html
    openModal()
    currentAxieModal = axie
}
function LevelUp(){
    const axie = currentAxieModal
    const health = document.getElementById("modal-health")
    const skill = document.getElementById("modal-skill")
    const morale = document.getElementById("modal-morale")
    const speed = document.getElementById("modal-speed")
    const level = document.getElementById("modal-level")

    axie.levelUp()
    health.innerHTML=axie.stats.hp
    skill.innerHTML=axie.stats.skill
    morale.innerHTML=axie.stats.morale
    speed.innerHTML=axie.stats.speed
    level.innerHTML=`Level ${axie.level}`
}
function LevelDown(){
    const axie = currentAxieModal
    if(axie.level !== 1){
        axie.levelDown()
        const health = document.getElementById("modal-health")
        const skill = document.getElementById("modal-skill")
        const morale = document.getElementById("modal-morale")
        const speed = document.getElementById("modal-speed")
        const level = document.getElementById("modal-level")


        health.innerHTML=axie.stats.hp
        skill.innerHTML=axie.stats.skill
        morale.innerHTML=axie.stats.morale
        speed.innerHTML=axie.stats.speed
        level.innerHTML=`Level ${axie.level}`
    }
    


}