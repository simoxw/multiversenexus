(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={hp:1.2,atk:1.5,def:1,mag:.6,res:.7,spd:1.4,luck:1},t={hp:.8,atk:.7,def:.8,mag:1.5,res:1.4,spd:1.1,luck:1.2},n={hp:1.1,atk:1,def:1.2,mag:1,res:1.2,spd:1,luck:1.5},r={"scooby-doo":{hp:1100,atk:45,def:140,mag:30,res:120,spd:85,luck:160,mp:90,role:`tank`,growthRates:n},courage:{hp:900,atk:40,def:110,mag:100,res:130,spd:125,luck:180,mp:110,role:`support`,growthRates:n},"shaggy-rogers":{hp:850,atk:110,def:75,mag:20,res:80,spd:140,luck:150,mp:70,role:`dps`,growthRates:n},"velma-dinkley":{hp:750,atk:35,def:90,mag:160,res:140,spd:90,luck:130,mp:160,role:`mage`,growthRates:n},"fred-jones":{hp:1150,atk:105,def:130,mag:20,res:100,spd:70,luck:110,mp:80,role:`tank`,growthRates:n},"daphne-blake":{hp:850,atk:115,def:90,mag:50,res:95,spd:130,luck:135,mp:90,role:`balanced`,growthRates:n},"harry-potter":{hp:880,atk:40,def:85,mag:175,res:140,spd:105,luck:140,mp:180,role:`mage`,growthRates:n},"hermione-granger":{hp:780,atk:30,def:90,mag:190,res:160,spd:110,luck:130,mp:200,role:`mage`,growthRates:n},"albus-dumbledore":{hp:1e3,atk:55,def:110,mag:210,res:180,spd:95,luck:150,mp:250,role:`support`,growthRates:n},"luna-lovegood":{hp:750,atk:30,def:80,mag:165,res:160,spd:100,luck:200,mp:150,role:`support`,growthRates:n},"draco-malfoy":{hp:850,atk:60,def:85,mag:155,res:120,spd:105,luck:110,mp:140,role:`dps`,growthRates:n},"sirius-black":{hp:950,atk:130,def:80,mag:120,res:110,spd:140,luck:120,mp:120,role:`dps`,growthRates:n},hagrid:{hp:1400,atk:140,def:135,mag:20,res:100,spd:60,luck:90,mp:80,role:`tank`,growthRates:n},voldemort:{hp:1300,atk:45,def:110,mag:230,res:170,spd:110,luck:80,mp:250,role:`mage`,growthRates:n},goku:{hp:1400,atk:190,def:90,mag:30,res:80,spd:130,luck:110,mp:110,role:`dps`,growthRates:e},vegeta:{hp:1300,atk:185,def:85,mag:40,res:75,spd:125,luck:100,mp:100,role:`dps`,growthRates:e},gohan:{hp:1250,atk:165,def:95,mag:130,res:100,spd:110,luck:130,mp:120,role:`dps`,growthRates:e},piccolo:{hp:1200,atk:130,def:140,mag:120,res:130,spd:95,luck:110,mp:120,role:`tank`,growthRates:e},naruto:{hp:1350,atk:160,def:100,mag:120,res:110,spd:120,luck:150,mp:140,role:`dps`,growthRates:e},sasuke:{hp:1100,atk:155,def:80,mag:160,res:130,spd:145,luck:120,mp:130,role:`dps`,growthRates:e},kakashi:{hp:1050,atk:140,def:105,mag:140,res:140,spd:130,luck:140,mp:140,role:`balanced`,growthRates:e},luffy:{hp:1450,atk:175,def:120,mag:10,res:110,spd:140,luck:160,mp:90,role:`dps`,growthRates:e},zoro:{hp:1350,atk:185,def:110,mag:5,res:95,spd:125,luck:110,mp:80,role:`dps`,growthRates:e},itachi:{hp:1e3,atk:145,def:85,mag:200,res:160,spd:135,luck:150,mp:180,role:`mage`,growthRates:e},sora:{hp:1100,atk:140,def:100,mag:150,res:120,spd:115,luck:140,mp:160,role:`balanced`,growthRates:t},riku:{hp:1150,atk:160,def:105,mag:140,res:115,spd:120,luck:120,mp:140,role:`dps`,growthRates:t},aqua:{hp:1e3,atk:115,def:110,mag:185,res:170,spd:105,luck:130,mp:200,role:`mage`,growthRates:t},mickey:{hp:950,atk:110,def:115,mag:165,res:160,spd:125,luck:160,mp:180,role:`support`,growthRates:t},axel:{hp:1050,atk:150,def:85,mag:140,res:100,spd:140,luck:120,mp:130,role:`dps`,growthRates:t},elsa:{hp:900,atk:20,def:85,mag:195,res:150,spd:105,luck:130,mp:200,role:`mage`,growthRates:t},donald:{hp:800,atk:15,def:80,mag:185,res:140,spd:100,luck:120,mp:220,role:`mage`,growthRates:t},ventus:{hp:1e3,atk:130,def:95,mag:120,res:110,spd:145,luck:150,mp:140,role:`balanced`,growthRates:t},simba:{hp:1250,atk:145,def:110,mag:40,res:95,spd:120,luck:130,mp:100,role:`dps`,growthRates:t},cloud:{hp:1250,atk:175,def:100,mag:130,res:105,spd:105,luck:120,mp:130,role:`dps`,growthRates:t},aerith:{hp:950,atk:30,def:90,mag:200,res:180,spd:95,luck:170,mp:250,role:`healer`,growthRates:t},squall:{hp:1200,atk:165,def:105,mag:115,res:100,spd:110,luck:130,mp:120,role:`dps`,growthRates:t},vivi:{hp:800,atk:10,def:85,mag:220,res:170,spd:90,luck:140,mp:250,role:`mage`,growthRates:t},sephiroth:{hp:1800,atk:210,def:140,mag:190,res:160,spd:120,luck:110,mp:200,role:`dps`,growthRates:t}},i=class{static calculateLevelUpStats(e,t,n){let r=(e,n)=>Math.floor(e+t*n*(1+t*.012)),i=r(e.hp,n.hp);return{hp:i,maxHp:i,atk:r(e.atk,n.atk),def:r(e.def,n.def),mag:r(e.mag,n.mag),res:r(e.res,n.res),spd:r(e.spd,n.spd),luck:r(e.luck,n.luck),loreLevel:t}}static calculateEquipmentBonuses(e){let t=r[e.id],n={...e.stats};if((!n.mag||n.mag===0)&&t){let r=this.calculateLevelUpStats(t,n.loreLevel||1,t.growthRates);Object.assign(n,r),e.stats=n}let i={atk:0,def:0,mag:0,res:0,luck:0,hp:0};if(!e.equipment)return e.equipment={weapon:null,armor:null,accessory:null},i;let{weapon:a,armor:o,accessory:s}=e.equipment;return a&&(i.atk+=a.atk,i.mag+=a.mag||0),o&&(i.def+=o.def,i.res+=o.res,i.hp+=o.hp||0),s&&(i.luck+=s.luck||0),i}static getEffectiveStats(e){for(e.currentExp===void 0&&(e.currentExp=0),(!e.expToNextLevel||e.expToNextLevel===0)&&(e.expToNextLevel=this.calculateExpToNextLevel(e.stats.loreLevel||1));e.currentExp>=e.expToNextLevel&&e.stats.loreLevel<100;){e.currentExp-=e.expToNextLevel,e.stats.loreLevel++;let t=r[e.id];t&&(e.stats=this.calculateLevelUpStats(t,e.stats.loreLevel,t.growthRates)),e.expToNextLevel=this.calculateExpToNextLevel(e.stats.loreLevel)}let t=this.calculateEquipmentBonuses(e),n=e.stats,i={atk:0,def:0,mag:0,res:0,spd:0,luck:0};return e.activeEffects.forEach(e=>{let t=e=>Math.round(e*.25);e.effect===`atk_up`&&(i.atk+=t(n.atk)),e.effect===`atk_down`&&(i.atk-=t(n.atk)),e.effect===`def_up`&&(i.def+=t(n.def)),e.effect===`def_down`&&(i.def-=t(n.def))}),{...n,maxHp:n.maxHp+t.hp,hp:n.hp,atk:n.atk+t.atk+i.atk,def:n.def+t.def+i.def,mag:n.mag+t.mag+i.mag,res:n.res+t.res+i.res,spd:n.spd+i.spd,luck:n.luck+t.luck+i.luck,baseAtk:n.atk,baseDef:n.def,baseMag:n.mag,baseRes:n.res,baseSpd:n.spd,baseLuck:n.luck,equipmentAtk:t.atk,equipmentDef:t.def,equipmentMag:t.mag,equipmentRes:t.res,equipmentLuck:t.luck,tempBuffs:i}}static calculateExpToNextLevel(e){return Math.max(100,Math.floor(100*e**1.5))}static addExperience(e,t){e.stats.loreLevel||(e.stats.loreLevel=1);let n=0;if(e.stats.loreLevel>=100)return e.currentExp=0,{levelsGained:0,expAdded:0};for(e.currentExp+=t,(!e.expToNextLevel||e.expToNextLevel===0)&&(e.expToNextLevel=this.calculateExpToNextLevel(e.stats.loreLevel));e.currentExp>=e.expToNextLevel&&e.stats.loreLevel<100;){e.currentExp-=e.expToNextLevel,e.stats.loreLevel++,n++;let t=r[e.id];if(t&&(e.stats=this.calculateLevelUpStats(t,e.stats.loreLevel,t.growthRates)),e.stats.loreLevel<100)e.expToNextLevel=this.calculateExpToNextLevel(e.stats.loreLevel);else{e.currentExp=0;break}}return{levelsGained:n,expAdded:t}}static calculateEffectiveStats(e){return this.getEffectiveStats(e)}},a=class{queue=[];currentEntityIndex=0;constructor(e,t){this.queue=[...e.filter(e=>e!==null&&e.isAlive),t].map(e=>({entity:e,initiativeValue:i.calculateEffectiveStats(e).spd+(Math.random()*20-10)})).sort((e,t)=>t.initiativeValue-e.initiativeValue).map(e=>e.entity)}getQueue(){return[...this.queue]}getCurrentEntity(){return this.queue[this.currentEntityIndex]}nextTurn(){return this.queue=this.queue.filter(e=>e.stats.hp>0),this.currentEntityIndex=(this.currentEntityIndex+1)%this.queue.length,this.getCurrentEntity()}reorderQueue(){this.queue=this.queue.filter(e=>e.stats.hp>0).sort((e,t)=>{let n=i.calculateEffectiveStats(e).spd;return i.calculateEffectiveStats(t).spd-n}),this.currentEntityIndex=0}},o=class{state;turnManager;currentActor=null;constructor(e,t,n=`bg-style-1`){this.state={party:e,enemy:t,synergy:0,activeTurnIndex:null,log:[`Un incontro selvaggio! Un ${t.name} appare!`],phase:`transition`,quizMultiplier:1,pendingMove:null,backgroundId:1,bgClass:n,damagePopups:[]},this.turnManager=new a(this.state.party,this.state.enemy),this.moveToNextTurn(!0)}getState(){return this.state}setActiveEntity(e){if(this.currentActor=e,e===this.state.enemy)this.state.activeTurnIndex=null,this.state.phase=`enemy_turn`;else{let t=this.state.party.findIndex(t=>t?.id===e.id);this.state.activeTurnIndex=t===-1?null:t,this.state.phase=`player_turn`}}moveToNextTurn(e=!1){e||this.turnManager.nextTurn();let t=this.turnManager.getCurrentEntity();if(this.setActiveEntity(t),t===this.state.enemy){this.state.phase=`enemy_turn`,setTimeout(()=>this.enemyTurn(),1e3);return}let n=t;if(!n||!n.isAlive){setTimeout(()=>this.moveToNextTurn(),200);return}if(n.resource.current=Math.min(n.resource.max,n.resource.current+5),this.updateEffects(n),!this.processEffects(n)){this.state.phase=`transition`,setTimeout(()=>this.moveToNextTurn(),800);return}this.state.phase=`player_turn`}async executeMove(e){if(this.state.phase!==`player_turn`||!this.currentActor||this.currentActor===this.state.enemy)return;let t=this.currentActor;if(t.isAlive){if(t.resource.current<e.mpCost){this.state.log.push(`⚠️ ${t.name} non ha abbastanza ${t.resource.type}!`);return}if(e.requiresQuiz){this.state.pendingMove=e,this.state.phase=`quiz`,this.state.log.push(`${t.name} si prepara per ${e.emoji} ${e.name}...`);return}this.applyMove(t,e),this.checkBattleEnd(),this.state.phase===`player_turn`&&(this.state.phase=`transition`),setTimeout(()=>{this.state.phase=`transition`,this.moveToNextTurn()},1500)}}applyMove(e,t){if(t.accuracy<100&&Math.random()*100>t.accuracy){e.resource.current-=Math.ceil(t.mpCost*.3),this.state.log.push(`💨 ${e.name} mira... ma manca il colpo!`);return}if(e.resource.current-=t.mpCost,this.state.log.push(`🗨️ ${e.name}: "${t.quote}"`),this.state.log.push(`${e.name} usa ${t.emoji} ${t.name}!`),t.baseDamageMultiplier!==null){let n=t.type===`magical`,{damage:r,isCrit:i}=this.calculateDamage(e,this.state.enemy,t.baseDamageMultiplier,n);this.state.enemy.stats.hp=Math.max(0,this.state.enemy.stats.hp-r),this.state.log.push(`${this.state.enemy.name} subisce ${r} danni!`),this.spawnDamagePopup(r,i,!1,`enemy`)}if(t.healAmount!==null&&t.healTarget){let n=Math.round(t.healAmount*(e.stats.atk/100)*this.state.quizMultiplier);if(t.healTarget===`self`)this.applyHeal(e,n);else if(t.healTarget===`party`)this.state.party.forEach(e=>e&&e.isAlive&&this.applyHeal(e,n));else if(t.healTarget===`single`){let e=this.state.party.filter(e=>e&&e.isAlive).sort((e,t)=>e.stats.hp/e.stats.maxHp-t.stats.hp/t.stats.maxHp);e[0]&&this.applyHeal(e[0],n)}}if(t.effect&&t.effectTarget){let n=t.effectDuration;if(t.effectTarget===`enemy`)this.applyEffect(this.state.enemy,t.effect,n);else if(t.effectTarget===`self`)this.applyEffect(e,t.effect,n);else if(t.effectTarget===`party`)this.state.party.forEach(e=>e&&e.isAlive&&this.applyEffect(e,t.effect,n));else if(t.effectTarget===`single`){let e=this.state.party.filter(e=>e&&e.isAlive).sort((e,t)=>e.stats.hp/e.stats.maxHp-t.stats.hp/t.stats.maxHp);e[0]&&this.applyEffect(e[0],t.effect,n)}}}spawnDamagePopup(e,t,n,r){let i=Math.random().toString(36).substring(2,9);this.state.damagePopups.push({id:i,value:e,isCrit:t,isHeal:n,targetId:r}),setTimeout(()=>{this.state.damagePopups=this.state.damagePopups.filter(e=>e.id!==i)},1200)}applyHeal(e,t){let n=Math.min(e.stats.maxHp-e.stats.hp,t);e.stats.hp+=n,this.state.log.push(`${e.name} recupera ${n} HP!`),this.spawnDamagePopup(n,!1,!0,`p${this.state.party.indexOf(e)}`)}applyEffect(e,t,n){e.activeEffects.push({effect:t,turnsLeft:n}),this.state.log.push(`✨ ${e.name} è sotto l'effetto ${t} per ${n} turni!`)}calculateDamage(e,t,n,r=!1){let i=r?e.stats.mag||1:e.stats.atk||1,a=r?t.stats.res||1:t.stats.def||1,o=i*n*(i/(a*.8+1)),s=1;this.hasAdvantage(e.characterClass,t.characterClass)?s=1.5:this.hasDisadvantage(e.characterClass,t.characterClass)&&(s=.75);let c=e.stats.luck/1e3+.05,l=Math.random()<c,u=l?1.5:1,d=1+this.state.synergy/1e3;l&&this.state.log.push(`✨ COLPO CRITICO su ${t.name}!`);let f=.9+Math.random()*.2,p=Math.round(o*s*u*this.state.quizMultiplier*d*f);return this.state.synergy=Math.min(100,this.state.synergy+2),{damage:p,isCrit:l}}hasAdvantage(e,t){return e===`Mysterian`&&t===`Ethereal`||e===`Ethereal`&&t===`Striker`||e===`Striker`&&t===`Mysterian`}hasDisadvantage(e,t){return e===`Ethereal`&&t===`Mysterian`||e===`Striker`&&t===`Ethereal`||e===`Mysterian`&&t===`Striker`}processEffects(e){let t=!0;for(let n of e.activeEffects)switch(n.effect){case`burn`:{let t=Math.ceil(e.stats.maxHp*.05);e.stats.hp=Math.max(1,e.stats.hp-t),this.state.log.push(`🔥 ${e.name} brucia per ${t} danni!`),e.stats.hp<=1&&!e.isAlive&&(e.isAlive=!1);break}case`regen`:{let t=Math.ceil(e.stats.maxHp*.06);e.stats.hp=Math.min(e.stats.maxHp,e.stats.hp+t),this.state.log.push(`💖 ${e.name} si rigenera di ${t} HP!`);break}case`stun`:this.state.log.push(`😵 ${e.name} è stordito e salta il turno!`),t=!1;break;case`paralysis`:Math.random()<.5&&(this.state.log.push(`⚡ ${e.name} è paralizzato e non riesce a muoversi!`),t=!1);break;case`confuse`:this.state.log.push(`🌀 ${e.name} è confuso!`);break}return t}nextTurn(){this.state.phase===`transition`&&this.moveToNextTurn()}updateEffects(e){e.activeEffects=e.activeEffects.filter(t=>(t.turnsLeft--,t.turnsLeft<=0?(this.state.log.push(`⏳ L'effetto ${t.effect} su ${e.name} è svanito.`),!1):!0))}async enemyTurn(){if(this.state.phase!==`enemy_turn`)return;if(this.updateEffects(this.state.enemy),!this.processEffects(this.state.enemy)){setTimeout(()=>{this.state.phase===`enemy_turn`&&(this.state.phase=`transition`,this.moveToNextTurn())},800);return}let e=this.state.party.filter(e=>e&&e.isAlive);if(e.length===0)return;let t=e[Math.floor(Math.random()*e.length)],n=this.state.enemy.stats.hp/this.state.enemy.stats.maxHp<=.25;n&&this.state.log.push(`💢 ${this.state.enemy.name} è in preda alla DISPERAZIONE! ATK +20%!`);let r=n?1.2:1,{damage:i,isCrit:a}=this.calculateDamage(this.state.enemy,t,.8*r);t.stats.hp=Math.max(0,t.stats.hp-i);let o=Math.floor(i/50);o>0&&(this.state.synergy=Math.min(100,this.state.synergy+o),this.state.log.push(`⚡ Sinergia aumentata di ${o} per il danno subito!`)),this.spawnDamagePopup(i,a,!1,`p${this.state.party.indexOf(t)}`),this.state.log.push(`👹 ${this.state.enemy.name} attacca ${t.name} per ${i} danni!`),t.stats.hp===0&&(t.isAlive=!1,this.state.log.push(`💀 ${t.name} è fuori combattimento!`)),this.checkBattleEnd(),setTimeout(()=>{this.state.phase===`enemy_turn`&&(this.state.phase=`transition`,this.moveToNextTurn())},800)}checkBattleEnd(){this.state.enemy.stats.hp<=0?(this.state.phase=`victory`,this.state.log.push(`🏆 Vittoria! ${this.state.enemy.name} è stato sconfitto!`)):this.state.party.every(e=>!e||!e.isAlive)&&(this.state.phase=`defeat`,this.state.log.push(`🌑 Sconfitta... Il nexus è caduto nell'oscurità.`))}setPhase(e){this.state.phase=e}setQuizResult(e){if(this.state.phase!==`quiz`||!this.state.pendingMove)return;let t=this.state.pendingMove;if(!this.currentActor||this.currentActor===this.state.enemy)return;let n=this.currentActor;this.state.pendingMove=null,e?(this.state.quizMultiplier=2,this.state.synergy=Math.min(100,this.state.synergy+20),this.state.log.push(`✨ LORE BREAK! Mossa potenziata al massimo!`),this.applyMove(n,t)):(this.state.quizMultiplier=.5,this.state.log.push(`❌ Lore Fallimentare... La mossa è molto debole.`),this.applyMove(n,t)),this.state.quizMultiplier=1,this.checkBattleEnd(),this.state.phase===`quiz`&&(this.state.phase=`transition`),setTimeout(()=>{this.state.phase===`transition`&&this.nextTurn()},1e3)}},s={"scooby-doo":[{id:`scooby-bite`,name:`Morso Codardo`,mpCost:0,power:100,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.8,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`🐾`,quote:`*morde nervosamente*`,description:`Danno fisico, 10% chance stun`},{id:`scooby-snack`,name:`Scooby Snack`,mpCost:30,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:80,healTarget:`single`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🍪`,quote:`Scooby Snaaack!`,description:`Cura 80 HP a un alleato`},{id:`scooby-howl`,name:`Ululato del Panico`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`😱`,quote:`*ululato terrificante*`,description:`Riduce ATK nemico 20% per 2 turni`},{id:`scooby-lore`,name:`Scooby-Dooby-Doo!`,mpCost:50,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:60,healTarget:`party`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`⭐`,quote:`Scooby-Dooby-Doo, where are you!`,description:`Cura 60 HP a tutto il party + rimuove status negativi`}],courage:[{id:`courage-run`,name:`Fuga Disperata`,mpCost:0,power:90,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.7,healAmount:null,healTarget:null,effect:`spd_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`💨`,quote:`*corre in preda al panico*`,description:`Danno fisico + SPD propria +15%`},{id:`courage-terror`,name:`Trasformazione Terrore`,mpCost:35,power:150,type:`magical`,element:`dark`,accuracy:90,baseDamageMultiplier:1.2,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👻`,quote:`*si trasforma in qualcosa di orribile*`,description:`Danno magico che ignora DEF`},{id:`courage-love`,name:`Amore per Muriel`,mpCost:20,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`regen`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`💜`,quote:`Per Muriel... devo farcela!`,description:`Rimuove debuff dal party + regen 2 turni`},{id:`courage-lore`,name:`Coraggio Assoluto`,mpCost:55,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`party`,effectDuration:3,requiresQuiz:!0,emoji:`🌟`,quote:`The things I do for love...`,description:`ATK e DEF party +30% per 3 turni`}],"shaggy-rogers":[{id:`shaggy-combo`,name:`Pugni a Raffica`,mpCost:0,power:110,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.8,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👊`,quote:`Zoinks! Prenditi questo!`,description:`2 colpi fisici da 40% ATK ciascuno`},{id:`shaggy-sandwich`,name:`Sandwich Gigante`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:100,healTarget:`self`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🥪`,quote:`Like, ho bisogno di questo più di te!`,description:`Cura 100 HP a sé stesso`},{id:`shaggy-scoob`,name:`Come, Scoob!`,mpCost:20,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🐕`,quote:`Okay Scooby, andiamo insieme!`,description:`ATK di Scooby-Doo +25% se in party`},{id:`shaggy-lore`,name:`Ultra Instinct?`,mpCost:60,power:340,type:`physical`,element:`light`,accuracy:100,baseDamageMultiplier:3,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`⚡`,quote:`Zoinks! Okay Scoob, questa è per te!`,description:`Danno fisico 3.4x ATK, poi scende a 1 HP`}],"velma-dinkley":[{id:`velma-analyze`,name:`Analisi Critica`,mpCost:0,power:100,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.7,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🔍`,quote:`Elementare!`,description:`Danno base + rivela classe nemica`},{id:`velma-trap`,name:`Trappola Scientifica`,mpCost:30,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`⚙️`,quote:`La mia trappola perfetta!`,description:`Stun nemico 1 turno`},{id:`velma-glasses`,name:`I miei occhiali!`,mpCost:20,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`evasion`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`👓`,quote:`Jinkies, dove sono finiti?!`,description:`Schiva garantita il prossimo attacco`},{id:`velma-lore`,name:`Jinkies! Ho capito tutto`,mpCost:50,power:250,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`💡`,quote:`Jinkies! Il colpevole sei tu!`,description:`Dimezza gli HP attuali del nemico`}],"fred-jones":[{id:`fred-punch`,name:`Pugno da Leader`,mpCost:0,power:105,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👊`,quote:`Okay gang, andiamo!`,description:`Danno fisico base`},{id:`fred-trap`,name:`Trappola Elaborata`,mpCost:30,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`🪤`,quote:`La mia trappola migliore!`,description:`Stun nemico (70% successo)`},{id:`fred-shield`,name:`Scudo Umano`,mpCost:20,power:0,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`taunt`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🛡️`,quote:`Ci penso io!`,description:`Assorbe il prossimo attacco per un alleato`},{id:`fred-lore`,name:`Piano Perfetto`,mpCost:50,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`📋`,quote:`Ecco il piano!`,description:`Stun 2 turni + DEF nemica -40%`}],"daphne-blake":[{id:`daphne-kick`,name:`Calcio col Tacco`,mpCost:0,power:110,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👠`,quote:`Nessuno rovina il mio outfit!`,description:`Danno fisico veloce, alta priorità`},{id:`daphne-bag`,name:`Borsa di Daphne`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👜`,quote:`Vediamo cosa ho qui...`,description:`Effetto random: cura 80HP / stun / ATK+20%`},{id:`daphne-taunt`,name:`Sempre nei Guai`,mpCost:15,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`taunt`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`😅`,quote:`Oh no, ci sono ricascata!`,description:`Provoca il nemico ad attaccare solo Daphne 1 turno`},{id:`daphne-lore`,name:`Agilità da Passerella`,mpCost:45,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`evasion`,effectTarget:`self`,effectDuration:2,requiresQuiz:!0,emoji:`💃`,quote:`Prova a prendermi!`,description:`Schiva tutti gli attacchi 2 turni + contrattacca`}],"harry-potter":[{id:`harry-expelliarmus`,name:`Expelliarmus`,mpCost:0,power:105,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`⚡`,quote:`Expelliarmus!`,description:`Danno magico + 30% chance rimuove un buff nemico`},{id:`harry-patronus`,name:`Expecto Patronum`,mpCost:40,power:150,type:`magical`,element:`light`,accuracy:95,baseDamageMultiplier:1.1,healAmount:null,healTarget:null,effect:`immune`,effectTarget:`party`,effectDuration:1,requiresQuiz:!1,emoji:`🦌`,quote:`Expecto Patronum!`,description:`Danno magico + party immune status negativi 1 turno`},{id:`harry-protego`,name:`Protego`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`party`,effectDuration:1,requiresQuiz:!1,emoji:`🛡️`,quote:`Protego!`,description:`Scudo magico su tutto il party, assorbe 100 danni`},{id:`harry-lore`,name:`Avada Kedavra`,mpCost:70,power:350,type:`magical`,element:`dark`,accuracy:85,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`💀`,quote:`Avada Kedavra!`,description:`KO istantaneo (non su boss), su boss 60% HP danni`}],"hermione-granger":[{id:`hermione-incendio`,name:`Incendio`,mpCost:0,power:105,type:`magical`,element:`fire`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`enemy`,effectDuration:3,requiresQuiz:!1,emoji:`🔥`,quote:`Incendio!`,description:`Danno fuoco + burn 5HP/turno per 3 turni`},{id:`hermione-alohomora`,name:`Alohomora`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🔓`,quote:`Alohomora!`,description:`Rimuove buff e scudi dal nemico`},{id:`hermione-reparo`,name:`Oculus Reparo`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:70,healTarget:`single`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`✨`,quote:`Oculus Reparo!`,description:`Cura 70 HP alleato + rimuove stato cieco`},{id:`hermione-lore`,name:`È LeviOsa`,mpCost:55,power:240,type:`magical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.4,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`🪄`,quote:`È LeviOsa, non leviosaa!`,description:`Danno magico enorme + stun 2 turni`}],"albus-dumbledore":[{id:`dumbledore-lumos`,name:`Lumos Maxima`,mpCost:0,power:110,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💫`,quote:`Lumos Maxima!`,description:`Danno magico luce`},{id:`dumbledore-wisdom`,name:`Saggezza Antica`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`📚`,quote:`La conoscenza è la nostra arma.`,description:`Aumenta MP del party di 40`},{id:`dumbledore-fawkes`,name:`Fawkes`,mpCost:40,power:0,type:`magical`,element:`fire`,accuracy:100,baseDamageMultiplier:null,healAmount:120,healTarget:`single`,effect:`regen`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🦅`,quote:`Fawkes, vecchio amico!`,description:`Cura 120 HP alleato con meno HP`},{id:`dumbledore-lore`,name:`Il Grande Piano`,mpCost:60,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`party`,effectDuration:3,requiresQuiz:!0,emoji:`🌌`,quote:`La bontà vincerà sempre.`,description:`Tutte le stat del party +20% per 3 turni`}],"luna-lovegood":[{id:`luna-stordisci`,name:`Stordisci`,mpCost:0,power:100,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.8,healAmount:null,healTarget:null,effect:`confuse`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`🌙`,quote:`*sorride misteriosamente*`,description:`Danno magico + confusione 25% chance`},{id:`luna-crumple`,name:`Crumple-Horned`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`spd_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🦄`,quote:`I Nargles sono ovunque...`,description:`Riduce SPD nemica del 25% per 2 turni`},{id:`luna-spectral`,name:`Occhiali Spettrali`,mpCost:20,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`👁️`,quote:`Vedo cose che altri non vedono.`,description:`Svela status nemico + danno +10%`},{id:`luna-lore`,name:`Nargles Attack`,mpCost:50,power:260,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`confuse`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`🌀`,quote:`I Nargles ti hanno trovato!`,description:`Confusione garantita 2 turni + danno fisso 150`}],"draco-malfoy":[{id:`draco-crucio`,name:`Crucio`,mpCost:0,power:105,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`spd_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🐍`,quote:`Crucio!`,description:`Danno magico + perdita 10 MP nemica`},{id:`draco-padre`,name:`Mio Padre Sentirà Di Questo`,mpCost:20,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`😤`,quote:`Mio padre sentirà di questo!`,description:`Riduce ATK nemico 15%`},{id:`draco-pride`,name:`Serpeverde Pride`,mpCost:25,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`🦎`,quote:`Sono un Malfoy!`,description:`ATK e DEF propri +15%`},{id:`draco-lore`,name:`Traditore del Male`,mpCost:55,power:270,type:`magical`,element:`light`,accuracy:95,baseDamageMultiplier:1.6,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`💫`,quote:`Non posso... non posso farlo.`,description:`Danno enorme + 50% chance redemption arc (stun 2T)`}],"sirius-black":[{id:`sirius-animagus`,name:`Forma Animagus`,mpCost:0,power:110,type:`physical`,element:`dark`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:`def_down`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`🐺`,quote:`*si trasforma in un enorme cane nero*`,description:`Morso fisico, ignora 20% DEF`},{id:`sirius-curse`,name:`Maledizione Oscura`,mpCost:30,power:160,type:`magical`,element:`dark`,accuracy:95,baseDamageMultiplier:1.1,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🌑`,quote:`Non torneranno più!`,description:`Danno magico + riduce DEF nemica`},{id:`sirius-fugitive`,name:`Il Fuggitivo`,mpCost:20,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`evasion`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`🏃`,quote:`Non mi prenderanno mai!`,description:`Evasione propria +30% per 2 turni`},{id:`sirius-lore`,name:`Per Harry`,mpCost:50,power:320,type:`physical`,element:`light`,accuracy:100,baseDamageMultiplier:2,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`⚡`,quote:`Per Harry. SEMPRE.`,description:`Sacrifica 30% HP propri per danno triplo`}],hagrid:[{id:`hagrid-punch`,name:`Pugno Enorme`,mpCost:0,power:115,type:`physical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.1,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`👊`,quote:`Stai lontano da Harry!`,description:`Danno fisico potente, 15% chance stun`},{id:`hagrid-fang`,name:`Fang!`,mpCost:25,power:100,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.7,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`🐗`,quote:`Fang, attacca!`,description:`Fang morde il nemico, stun garantito 1 turno`},{id:`hagrid-tea`,name:`Tè della Capanna`,mpCost:30,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:80,healTarget:`party`,effect:`def_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🫖`,quote:`Sedersi. Tè?`,description:`Cura 80 HP party + DEF +10% per 2 turni`},{id:`hagrid-lore`,name:`Non avrei dovuto dirlo`,mpCost:50,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`party`,effectDuration:3,requiresQuiz:!0,emoji:`🤫`,quote:`Non avrei dovuto dirlo...`,description:`Rivela debolezza nemica + ATK party +25% per 3 turni`}],voldemort:[{id:`voldemort-avada`,name:`Avada Kedavra`,mpCost:0,power:220,type:`magical`,element:`dark`,accuracy:80,baseDamageMultiplier:2,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💀`,quote:`Avada Kedavra!`,description:`Danno istantaneo devastante`},{id:`voldemort-horcrux`,name:`Horcrux`,mpCost:40,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`regen`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`💎`,quote:`Non posso morire...`,description:`Si cura del 15% HP se sotto 30% vita`},{id:`voldemort-crucio`,name:`Crucio`,mpCost:30,power:150,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`⚡`,quote:`Crucio!`,description:`Stun garantito 1 turno + danno`},{id:`voldemort-lore`,name:`Colui Che Non Deve`,mpCost:80,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`party`,effectDuration:3,requiresQuiz:!0,emoji:`🐍`,quote:`Non c'è bene e male, solo potere!`,description:`Dimezza HP di tutto il party`}],goku:[{id:`goku-punch`,name:`Pugno Saiyan`,mpCost:0,power:115,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👊`,quote:`Non finisce qui!`,description:`Danno fisico base potente`},{id:`goku-kameh`,name:`Kamehameha`,mpCost:35,power:180,type:`hybrid`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.3,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💥`,quote:`KAA-ME-HA-ME-HA!`,description:`Danno Ki forte`},{id:`goku-ssj`,name:`Super Saiyan`,mpCost:40,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:3,requiresQuiz:!1,emoji:`⚡`,quote:`Sono arrabbiato... molto arrabbiato!`,description:`ATK +50% per 3 turni`},{id:`goku-lore`,name:`Kamehameha Ultra`,mpCost:65,power:320,type:`hybrid`,element:`light`,accuracy:100,baseDamageMultiplier:2,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!0,emoji:`🌟`,quote:`KAA-ME-HA-ME-HAAAAA!`,description:`Danno Ki devastante 2x ATK + stun 1 turno`}],vegeta:[{id:`vegeta-colpo`,name:`Colpo del Principe`,mpCost:0,power:110,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:`spd_down`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`👊`,quote:`Sono il Principe dei Saiyan!`,description:`Danno fisico + riduce SPD nemica`},{id:`vegeta-flash`,name:`Final Flash`,mpCost:40,power:200,type:`hybrid`,element:`light`,accuracy:90,baseDamageMultiplier:1.4,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💫`,quote:`FINAL FLASH!`,description:`Danno Ki forte, si carica 1 turno`},{id:`vegeta-pride`,name:`Orgoglio Saiyan`,mpCost:30,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`immune`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`👑`,quote:`Io non cado davanti a nessuno!`,description:`Immune ai debuff 2 turni + ATK +20%`},{id:`vegeta-lore`,name:`Big Bang Attack`,mpCost:60,power:310,type:`hybrid`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:2.1,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`self`,effectDuration:1,requiresQuiz:!0,emoji:`💥`,quote:`BIG BANG ATTACK!`,description:`Danno Ki massimo 2.1x ATK, poi ATK -20% (esaurito)`}],gohan:[{id:`gohan-masenko`,name:`Masenko`,mpCost:0,power:100,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🔮`,quote:`Masenko... HA!`,description:`Danno magico base`},{id:`gohan-rage`,name:`Rabbia del Padre`,mpCost:30,power:150,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1.3,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`😡`,quote:`Non toccare mio padre!`,description:`ATK +30% se alleato KO`},{id:`gohan-latent`,name:`Potenziale Latente`,mpCost:35,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`✨`,quote:`Sento il potere dentro di me!`,description:`Tutte le stat +15% per 2 turni`},{id:`gohan-lore`,name:`Gohan Bestia`,mpCost:65,power:360,type:`physical`,element:`light`,accuracy:100,baseDamageMultiplier:2.3,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`🔱`,quote:`Non sono come mio padre... sono peggio.`,description:`Danno fisico + magico combo, il più alto di DB`}],piccolo:[{id:`piccolo-raggio`,name:`Raggio Speciale`,mpCost:0,power:110,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🎯`,quote:`Raggio Speciale!`,description:`Danno magico preciso`},{id:`piccolo-regen`,name:`Rigenerazione`,mpCost:30,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`regen`,effectTarget:`self`,effectDuration:3,requiresQuiz:!1,emoji:`💚`,quote:`*si rigenera lentamente*`,description:`Si cura del 20% HP massimi`},{id:`piccolo-tutore`,name:`Tutore di Gohan`,mpCost:20,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🤝`,quote:`Ti allenerò io, Gohan.`,description:`DEF party +20%, ATK Gohan +20% se in party`},{id:`piccolo-lore`,name:`Makankosappo`,mpCost:55,power:280,type:`hybrid`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.8,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`🌀`,quote:`MAKANKOSAPPO!`,description:`Danno perforante che ignora tutta la DEF nemica`}],naruto:[{id:`naruto-rasengan`,name:`Rasengan`,mpCost:0,power:120,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1.1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🌀`,quote:`RASENGAN!`,description:`Danno fisico rotante potente`},{id:`naruto-cloni`,name:`Mille Cloni`,mpCost:35,power:150,type:`physical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👥`,quote:`Kage Bunshin no Jutsu!`,description:`3 colpi da 35% ATK ciascuno`},{id:`naruto-saggio`,name:`Modalità Saggio`,mpCost:40,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:3,requiresQuiz:!1,emoji:`🐸`,quote:`Sento la natura intorno a me!`,description:`ATK e DEF +20% per 3 turni`},{id:`naruto-lore`,name:`Rasenshuriken`,mpCost:60,power:300,type:`hybrid`,element:`nonElemental`,accuracy:90,baseDamageMultiplier:1.9,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!0,emoji:`⭐`,quote:`Dattebayo! RASENSHURIKEN!`,description:`Danno enorme + stun 1 turno (mossa proibita)`}],sasuke:[{id:`sasuke-chidori`,name:`Chidori`,mpCost:0,power:115,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1.1,healAmount:null,healTarget:null,effect:`paralysis`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`⚡`,quote:`Chidori!`,description:`Danno elettrico + paralisi 25% chance`},{id:`sasuke-sharingan`,name:`Sharingan`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`👁️`,quote:`*attiva lo Sharingan*`,description:`Copia l'ultimo buff del nemico`},{id:`sasuke-susanoo`,name:`Susanoo`,mpCost:35,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🔱`,quote:`Susanoo!`,description:`Scudo che assorbe 200 danni per 1 turno`},{id:`sasuke-lore`,name:`Indra's Arrow`,mpCost:65,power:320,type:`hybrid`,element:`light`,accuracy:90,baseDamageMultiplier:2,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`enemy`,effectDuration:3,requiresQuiz:!0,emoji:`🌩️`,quote:`INDRA'S ARROW!`,description:`Danno fulmine massimo + burn 3 turni`}],kakashi:[{id:`kakashi-mille`,name:`Mille Anni di Dolore`,mpCost:0,power:95,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`def_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`☝️`,quote:`Il mio jutsu segreto!`,description:`Danno fisico + riduce DEF nemica`},{id:`kakashi-raikiri`,name:`Raikiri`,mpCost:30,power:170,type:`physical`,element:`light`,accuracy:95,baseDamageMultiplier:1.2,healAmount:null,healTarget:null,effect:`paralysis`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`⚡`,quote:`Raikiri!`,description:`Danno elettrico preciso + paralisi 30%`},{id:`kakashi-copy`,name:`Sharingan Copiato`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`👁️`,quote:`Ho copiato oltre mille jutsu.`,description:`Copia la mossa base del nemico`},{id:`kakashi-lore`,name:`Kamui`,mpCost:60,power:0,type:`magical`,element:`dark`,accuracy:90,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`🌀`,quote:`Dimensione di Kamui!`,description:`Rimuove il nemico per 2 turni (dimensione diversa)`}],luffy:[{id:`luffy-pistola`,name:`Pistola di Gomma`,mpCost:0,power:110,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`👊`,quote:`PISTOLA DI GOMMA!`,description:`Danno fisico base potente`},{id:`luffy-gatling`,name:`Gatling di Gomma`,mpCost:30,power:160,type:`physical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.5,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💥`,quote:`GATLING DI GOMMA!`,description:`5 colpi rapidi da 30% ATK ciascuno`},{id:`luffy-gear2`,name:`Gear Second`,mpCost:35,power:0,type:`physical`,element:`fire`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`💨`,quote:`Gear... SECOND!`,description:`ATK e SPD +30% per 2 turni`},{id:`luffy-lore`,name:`Gear Fifth`,mpCost:70,power:340,type:`hybrid`,element:`light`,accuracy:100,baseDamageMultiplier:2.2,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!0,emoji:`☀️`,quote:`GEAR FIFTH! Sono libero!`,description:`Danno enorme 2.2x ATK + stun 1 turno`}],zoro:[{id:`zoro-onigiri`,name:`Oni Giri`,mpCost:0,power:115,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`⚔️`,quote:`Oni... GIRI!`,description:`Danno fisico potente`},{id:`zoro-toro`,name:`Toro Nagashi`,mpCost:25,power:90,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.8,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🌊`,quote:`Toro Nagashi!`,description:`Contrattacca il prossimo attacco fisico`},{id:`zoro-trispade`,name:`Tre Spade`,mpCost:30,power:170,type:`physical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.5,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🗡️`,quote:`Santoryu... Ogi!`,description:`3 colpi da 50% ATK ciascuno`},{id:`zoro-lore`,name:`Asura`,mpCost:60,power:330,type:`physical`,element:`dark`,accuracy:100,baseDamageMultiplier:1.9,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`👹`,quote:`Asura... ICHIBUGIN!`,description:`Danno perforante che ignora tutta la DEF nemica`}],itachi:[{id:`itachi-amaterasu`,name:`Amaterasu`,mpCost:0,power:110,type:`magical`,element:`fire`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`enemy`,effectDuration:3,requiresQuiz:!1,emoji:`🔥`,quote:`*attiva il Mangekyō Sharingan*`,description:`Danno fuoco + burn per 3 turni`},{id:`itachi-tsukuyomi`,name:`Tsukuyomi`,mpCost:40,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🌑`,quote:`Tsukuyomi!`,description:`Stun genjutsu 2 turni`},{id:`itachi-susanoo`,name:`Susanoo Difensiva`,mpCost:35,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`🔱`,quote:`*evoca il Susanoo*`,description:`Scudo 150 HP + riflette 50% danno`},{id:`itachi-lore`,name:`Izanami`,mpCost:65,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`confuse`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`♾️`,quote:`Izanami... attivato.`,description:`Nemico ripete la stessa azione per 2 turni`}],sora:[{id:`sora-strike`,name:`Strike Raid`,mpCost:0,power:100,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🔑`,quote:`*lancia la Keyblade*`,description:`Lancia la Keyblade, danno fisico`},{id:`sora-cure`,name:`Cura`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:100,healTarget:`single`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💚`,quote:`Cura!`,description:`Cura 100 HP a un alleato`},{id:`sora-friend`,name:`Amicizia`,mpCost:25,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`❤️`,quote:`My friends are my power!`,description:`+15 sinergia + ATK party +15%`},{id:`sora-lore`,name:`Finish: Light's End`,mpCost:60,power:280,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:1.6,healAmount:40,healTarget:`party`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`✨`,quote:`My friends are my power... and I'm theirs!`,description:`Danno luce enorme + cura 40 HP tutto il party`}],riku:[{id:`riku-dark`,name:`Dark Break`,mpCost:0,power:115,type:`physical`,element:`dark`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🌑`,quote:`*oscurità fluisce dalla lama*`,description:`Danno oscurità fisico`},{id:`riku-shield`,name:`Dark Shield`,mpCost:25,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🛡️`,quote:`L'oscurità mi protegge!`,description:`Scudo oscurità assorbe 120 danni`},{id:`riku-way`,name:`Way to Dawn`,mpCost:35,power:180,type:`hybrid`,element:`light`,accuracy:95,baseDamageMultiplier:1.3,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`🌅`,quote:`Luce e oscurità insieme!`,description:`Danno luce+oscurità combo`},{id:`riku-lore`,name:`Darkness of the Unknown`,mpCost:60,power:300,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:1.8,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`🌌`,quote:`Io scelgo di stare nel mezzo.`,description:`Danno oscurità massimo + azzera tutti i buff nemici`}],aqua:[{id:`aqua-firaga`,name:`Firaga`,mpCost:0,power:105,type:`magical`,element:`fire`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🔥`,quote:`Firaga!`,description:`Danno magico fuoco + burn`},{id:`aqua-curaga`,name:`Curaga`,mpCost:40,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:120,healTarget:`party`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💚`,quote:`Curaga!`,description:`Cura 120 HP a tutto il party`},{id:`aqua-spell`,name:`Spellweaver`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`✨`,quote:`Spellweaver!`,description:`ATK magico +25% per 2 turni`},{id:`aqua-lore`,name:`Master's Defender`,mpCost:65,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`immune`,effectTarget:`party`,effectDuration:1,requiresQuiz:!0,emoji:`🌟`,quote:`Vi proteggerò, come Master Eraqus ha protetto me.`,description:`Cura tutto il party a full + immunità 1 turno`}],mickey:[{id:`mickey-star`,name:`Star Seeker`,mpCost:0,power:100,type:`physical`,element:`light`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`⭐`,quote:`Oh boy!`,description:`Danno luce con Keyblade`},{id:`mickey-heal`,name:`Luce del Re`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:80,healTarget:`single`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💛`,quote:`Non mollare!`,description:`Cura 80 HP all'alleato più debole`},{id:`mickey-ohboy`,name:`Oh Boy!`,mpCost:20,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🎉`,quote:`Oh boy oh boy oh boy!`,description:`+30 sinergia + morale del party`},{id:`mickey-lore`,name:`No More Darkness`,mpCost:60,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`regen`,effectTarget:`party`,effectDuration:3,requiresQuiz:!0,emoji:`🌟`,quote:`La luce vincerà sempre!`,description:`Resuscita un alleato KO a piena vita`}],axel:[{id:`axel-chakram`,name:`Chakram di Fuoco`,mpCost:0,power:100,type:`physical`,element:`fire`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🔥`,quote:`*lancia il chakram infuocato*`,description:`2 attacchi fuoco da 45% ATK + burn`},{id:`axel-ring`,name:`Fira Ring`,mpCost:30,power:160,type:`magical`,element:`fire`,accuracy:95,baseDamageMultiplier:1.1,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`enemy`,effectDuration:3,requiresQuiz:!1,emoji:`🌀`,quote:`Muori bruciando!`,description:`Danno fuoco ad area + burn 3 turni`},{id:`axel-memory`,name:`Got it Memorized?`,mpCost:20,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🧠`,quote:`Got it memorized?`,description:`Stun psicologico, ATK nemico -20%`},{id:`axel-lore`,name:`Eternal Flames`,mpCost:55,power:260,type:`magical`,element:`fire`,accuracy:100,baseDamageMultiplier:1.7,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`self`,effectDuration:2,requiresQuiz:!0,emoji:`♾️`,quote:`Got it memorized? ETERNAL FLAMES!`,description:`Danno fuoco massiccio, poi self-burn 2 turni`}],elsa:[{id:`elsa-blast`,name:`Blast Glaciale`,mpCost:0,power:105,type:`magical`,element:`ice`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`spd_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`❄️`,quote:`*manda un raggio di ghiaccio*`,description:`Danno ghiaccio + SPD -15%`},{id:`elsa-fortress`,name:`Fortezza di Ghiaccio`,mpCost:30,power:0,type:`magical`,element:`ice`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🏰`,quote:`*evoca una fortezza di ghiaccio*`,description:`Scudo ghiaccio 100 HP per tutti`},{id:`elsa-letitgo`,name:`Let It Go`,mpCost:25,power:0,type:`magical`,element:`ice`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`immune`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🌨️`,quote:`Let it go, let it go!`,description:`Rimuove tutti i debuff + ATK magico +20%`},{id:`elsa-lore`,name:`Blizzaga Assoluto`,mpCost:60,power:270,type:`magical`,element:`ice`,accuracy:95,baseDamageMultiplier:1.6,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`🌀`,quote:`Il freddo non mi ha mai disturbato!`,description:`Congela nemico 2 turni + danno ghiaccio enorme`}],donald:[{id:`donald-bolt`,name:`Fulmine del Re`,mpCost:0,power:105,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`⚡`,quote:`*lancia una scintilla incantata*`,description:`Danno magico base della corte reale`},{id:`donald-cure`,name:`Cura`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:90,healTarget:`single`,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`💚`,quote:`Cura!`,description:`Cura 90 HP a un alleato`},{id:`donald-magic`,name:`Magia del Cappello`,mpCost:30,power:150,type:`magical`,element:`nonElemental`,accuracy:90,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🎩`,quote:`*sceglie una magia a caso*`,description:`Fuoco/Ghiaccio/Fulmine random 100% ATK`},{id:`donald-lore`,name:`Blizzaga`,mpCost:55,power:230,type:`magical`,element:`ice`,accuracy:95,baseDamageMultiplier:1.5,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`❄️`,quote:`BLIZZAGA! Toh, prenditi questo!`,description:`Congela nemico 2 turni + danno ghiaccio 1.5x`}],ventus:[{id:`ventus-wind`,name:`Attacco del Vento`,mpCost:0,power:105,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:`spd_down`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`💨`,quote:`*una raffica di vento rapida*`,description:`Danno fisico veloce`},{id:`ventus-aura`,name:`Aura Ventosa`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`spd_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🌬️`,quote:`Il vento è con noi!`,description:`SPD party +20% per 2 turni`},{id:`ventus-vortex`,name:`Azioni Vortice`,mpCost:30,power:160,type:`physical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🌀`,quote:`Vortice!`,description:`2 colpi da 55% ATK ciascuno`},{id:`ventus-lore`,name:`Wingblade`,mpCost:55,power:260,type:`physical`,element:`light`,accuracy:100,baseDamageMultiplier:1.6,healAmount:null,healTarget:null,effect:`def_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!0,emoji:`🦋`,quote:`Le mie ali mi portano avanti!`,description:`Danno 1.6x ATK + DEF nemica -30% per 2 turni`}],simba:[{id:`simba-artigli`,name:`Artigli del Re`,mpCost:0,power:110,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:`def_down`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`🦁`,quote:`*ruggisce e colpisce*`,description:`Danno fisico + riduce DEF nemica`},{id:`simba-roar`,name:`Ruggito`,mpCost:25,power:0,type:`magical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`📣`,quote:`RUGGITO DEL RE!`,description:`Stun nemico 1 turno`},{id:`simba-king`,name:`Re della Savana`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:2,requiresQuiz:!1,emoji:`👑`,quote:`Ricorda chi sei!`,description:`ATK +25% se HP sopra 70%`},{id:`simba-lore`,name:`Hakuna Matata`,mpCost:55,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:80,healTarget:`party`,effect:`immune`,effectTarget:`party`,effectDuration:1,requiresQuiz:!0,emoji:`🌅`,quote:`Hakuna Matata!`,description:`Cura 80 HP party + rimuove tutti i debuff`}],cloud:[{id:`cloud-slash`,name:`Taglio Verticale`,mpCost:0,power:120,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`⚔️`,quote:`*solleva la Buster Sword*`,description:`Danno fisico base potente`},{id:`cloud-blade`,name:`Lama Esplosiva`,mpCost:30,power:160,type:`physical`,element:`fire`,accuracy:95,baseDamageMultiplier:1.2,healAmount:null,healTarget:null,effect:`stun`,effectTarget:`enemy`,effectDuration:1,requiresQuiz:!1,emoji:`💥`,quote:`Prendi questo!`,description:`Danno fisico + stun 25% chance`},{id:`cloud-focus`,name:`Concentra`,mpCost:0,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🎯`,quote:`*si concentra*`,description:`ATK +30% prossimo attacco, gratis`},{id:`cloud-lore`,name:`Omnislash`,mpCost:65,power:350,type:`physical`,element:`light`,accuracy:100,baseDamageMultiplier:2.5,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`🌟`,quote:`Let's mosey. OMNISLASH!`,description:`13 colpi fisici da 25% ATK ciascuno`}],aerith:[{id:`aerith-prayer`,name:`Preghiera di Cetra`,mpCost:0,power:100,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🌸`,quote:`*una luce avvolge il bastone*`,description:`Danno magico infuso di spirito Cetra`},{id:`aerith-cure`,name:`Cura Cetra`,mpCost:35,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:120,healTarget:`single`,effect:`regen`,effectTarget:`single`,effectDuration:3,requiresQuiz:!1,emoji:`💚`,quote:`Il Pianeta ti cura.`,description:`Cura 120 HP alleato + regen 15HP/turno per 3 turni`},{id:`aerith-barrier`,name:`Barriera del Pianeta`,mpCost:30,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`def_up`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`🌍`,quote:`Il Pianeta ci protegge.`,description:`DEF party +30% per 2 turni`},{id:`aerith-lore`,name:`Grande Gospel`,mpCost:70,power:0,type:`magical`,element:`light`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`immune`,effectTarget:`party`,effectDuration:2,requiresQuiz:!0,emoji:`✨`,quote:`Per favore... ascoltami.`,description:`Cura full HP tutto il party + immunità status 2 turni`}],squall:[{id:`squall-blade`,name:`Lama Pistola`,mpCost:0,power:115,type:`physical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🔫`,quote:`*colpisce con la Gunblade*`,description:`Danno fisico base con Gunblade`},{id:`squall-renzo`,name:`Renzokuken`,mpCost:30,power:180,type:`physical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:1.6,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`⚔️`,quote:`Renzokuken!`,description:`4 colpi da 40% ATK ciascuno`},{id:`squall-focus`,name:`Lionheart Prep`,mpCost:0,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🦁`,quote:`*si concentra*`,description:`ATK +35% prossimo turno, gratis`},{id:`squall-lore`,name:`Lionheart`,mpCost:65,power:400,type:`physical`,element:`light`,accuracy:100,baseDamageMultiplier:3.4,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`💎`,quote:`...Whatever. LIONHEART!`,description:`17 colpi da 20% ATK, il Limit Break iconico di FF8`}],vivi:[{id:`vivi-spell`,name:`Fira/Blizzara/Thundara`,mpCost:0,power:110,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:.9,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`🔮`,quote:`*lancia la magia del turno*`,description:`Cambia elemento ogni turno: fuoco/ghiaccio/fulmine`},{id:`vivi-double`,name:`Doppio Incantesimo`,mpCost:30,power:170,type:`magical`,element:`nonElemental`,accuracy:95,baseDamageMultiplier:.8,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!1,emoji:`✨`,quote:`Due magie in una!`,description:`Lancia 2 spell base nello stesso turno`},{id:`vivi-focus`,name:`Focus`,mpCost:0,power:0,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_up`,effectTarget:`self`,effectDuration:1,requiresQuiz:!1,emoji:`🧠`,quote:`Devo concentrarmi...`,description:`Danno magico +20% turno successivo, gratis`},{id:`vivi-lore`,name:`Flare`,mpCost:65,power:280,type:`magical`,element:`nonElemental`,accuracy:100,baseDamageMultiplier:1.8,healAmount:null,healTarget:null,effect:null,effectTarget:null,effectDuration:0,requiresQuiz:!0,emoji:`💫`,quote:`FLARE!`,description:`Danno non-elementale puro, ignora resistenze`}],sephiroth:[{id:`seph-masamune`,name:`Masamune`,mpCost:0,power:140,type:`physical`,element:`dark`,accuracy:100,baseDamageMultiplier:1.3,healAmount:null,healTarget:null,effect:`def_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🗡️`,quote:`*sorride lentamente*`,description:`Danno fisico enorme, ignora 30% DEF`},{id:`seph-shadow`,name:`Shadowflare`,mpCost:40,power:190,type:`magical`,element:`dark`,accuracy:95,baseDamageMultiplier:1.5,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🌑`,quote:`Shadowflare!`,description:`Danno magico oscurità massiccio`},{id:`seph-angel`,name:`Heartless Angel`,mpCost:50,power:0,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:null,healAmount:null,healTarget:null,effect:`atk_down`,effectTarget:`party`,effectDuration:2,requiresQuiz:!1,emoji:`👼`,quote:`Heartless Angel.`,description:`Porta tutti gli HP del party a 1`},{id:`seph-lore`,name:`Supernova`,mpCost:80,power:380,type:`magical`,element:`dark`,accuracy:100,baseDamageMultiplier:2.5,healAmount:null,healTarget:null,effect:`burn`,effectTarget:`party`,effectDuration:3,requiresQuiz:!0,emoji:`💥`,quote:`Questa è la mia... genesi.`,description:`Danno devastante + tutti i debuff al party`}]};function c(e){return`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(e)}`}function l(e=document){e.querySelectorAll(`img[data-fallback]`).forEach(e=>{e.addEventListener(`error`,()=>{let t=e.getAttribute(`data-fallback`);!t||e.getAttribute(`data-fallback-applied`)===`1`||(e.setAttribute(`data-fallback-applied`,`1`),e.src=t)})})}var u=class e{static render(t,n,r,i){let a=document.getElementById(`app`);if(!a)return;if(t.phase===`victory`){e.renderVictoryScreen(a,t);return}if(t.phase===`defeat`){e.renderDefeatScreen(a,t);return}let o=t.activeTurnIndex===null?null:t.party[t.activeTurnIndex],u=o&&s[o.id]||[];a.innerHTML=`
      <div class="battle-container mobile-optimized ${t.bgClass||`bg-style-1`}">
        <!-- POPUP OVERLAY -->
        <div id="damage-popups-layer" style="position: absolute; inset: 0; pointer-events: none; z-index: 100;">
            ${t.damagePopups.map(e=>{let t=e.targetId===`enemy`,n=50,r=30;t||(n=25+(parseInt(e.targetId.replace(`p`,``))||0)*25,r=65);let i=e.isHeal?`#22c55e`:e.isCrit?`#fbbf24`:`#ef4444`,a=e.isCrit?`2.5rem`:`1.5rem`;return`
                  <div class="damage-popup ${e.isCrit?`crit`:``}" style="position: absolute; left: ${n}%; top: ${r}%; transform: translateX(-50%); color: ${i}; font-size: ${a}; font-weight: 900; -webkit-text-stroke: 1px black; animation: popupAnim 1.2s forwards;">
                    ${e.isHeal?`+`:``}${e.value}${e.isCrit?`!`:``}
                  </div>
                `}).join(``)}
        </div>
        <!-- TOP: ENEMY AREA (Super Mini) -->
        <section class="enemy-area-mini" style="padding: 0.2rem 0.5rem; min-height: 80px; position: relative; display: flex; justify-content: space-between; align-items: center;">
          <div class="enemy-quit-center">
            <button id="btn-quit-battle" class="btn-quit-mini">🏃 ESCI</button>
          </div>
          <div class="enemy-info-compact" style="display: flex; align-items: center; gap: 0.8rem;">
            <div class="hex-portrait striker mini" style="width: 50px; height: 55px;">
               <img src="${t.enemy.imageUrl}" alt="${t.enemy.name}" data-fallback="${c(t.enemy.id||t.enemy.name)}" />
            </div>
            <div class="enemy-details">
              <h3 style="font-size: 0.8rem; margin:0;">${t.enemy.name}</h3>
              <div style="display: flex; gap: 2px;">
                ${t.enemy.activeEffects.map(e=>`<span style="font-size:0.6rem;">${this.getEffectEmoji(e.effect)}</span>`).join(``)}
              </div>
              <div class="hp-label" style="font-size: 0.65rem;">HP ${t.enemy.stats.hp}/${t.enemy.stats.maxHp}</div>
              <div class="bar-container mini" style="width: 80px; height: 5px;">
                <div class="bar-fill hp-fill" data-id="enemy-hp" style="width: ${t.enemy.stats.hp/t.enemy.stats.maxHp*100}%"></div>
              </div>
            </div>
          </div>
          <div class="synergy-mini">
            <div class="synergy-label" style="font-size: 0.65rem;">🔥 ${t.synergy}%</div>
            <div class="bar-container micro" style="width: 50px; height: 3px;">
              <div class="bar-fill synergy-fill" style="width: ${t.synergy}%"></div>
            </div>
          </div>
        </section>

        <!-- MIDDLE: LOG (Overlay-like or semi-transparent) -->
        <section class="battle-log-mini log-window">
            ${t.log.slice(-10).map(e=>`<p>${e}</p>`).join(``)}
            <div id="log-anchor"></div>
        </section>

        <!-- BOTTOM: PARTY & ACTIONS -->
        <div class="interaction-zone">
          <section class="party-row-enhanced">
            ${t.party.map((e,n)=>e?`
                <div class="char-unit ${t.activeTurnIndex===n?`active`:``} ${e.isAlive?``:`fainted`}">
                  <div class="hex-portrait ${e.role===`tank`?`striker`:e.role===`mage`?`mysterian`:e.role===`support`?`ethereal`:`balanced`} small">
                    <img src="${e.imageUrl}" alt="${e.name}" data-fallback="${c(e.id)}" />
                    <div class="char-status-overlay" style="position: absolute; top: 0; right: 0; display: flex; flex-direction: column; gap: 2px; padding: 2px;">
                      ${e.activeEffects.map(e=>`<span class="status-icon-mini" style="font-size: 0.6rem; filter: drop-shadow(0 0 2px black); animation: pulse 1s infinite;">${this.getEffectEmoji(e.effect)}</span>`).join(``)}
                    </div>
                  </div>
                  <div class="char-stats-mini">
                    <div style="font-size: 0.7rem; font-weight: 900; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: white; text-align: center; margin-bottom: 2px; text-shadow: 0 1px 2px black;">${e.name}</div>
                    <div class="hp-bar-enhanced">
                      <div class="bar-fill hp-fill" data-id="p${n}-hp" style="width: ${e.stats.hp/e.stats.maxHp*100}%"></div>
                    </div>
                    <div class="mp-bar-enhanced">
                      <div class="bar-fill mp-fill" data-id="p${n}-mp" style="width: ${e.resource.current/e.resource.max*100}%"></div>
                    </div>
                    <div class="stats-values-mini" style="font-size: 0.65rem; display: flex; justify-content: space-between; color: #e2e8f0; font-weight: bold; margin-top: 2px;">
                       <span>${e.stats.hp}</span>
                       <span>${e.resource.current}</span>
                    </div>
                  </div>
                </div>
              `:`<div class="char-unit empty"></div>`).join(``)}
          </section>

          <section class="action-panel-v3">
            <div class="current-char-info">
              <strong>${o?o.name:t.enemy.name}</strong>
              <span class="mp-text">${o?`${o.resource.type}: ${o.resource.current}/${o.resource.max}`:`Nemico in azione`}</span>
            </div>
            <div class="moves-grid-v3" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; pointer-events: ${t.phase===`player_turn`?`auto`:`none`}; opacity: ${t.phase===`player_turn`?`1`:`0.6`}; transition: all 0.3s ease;">
              ${t.synergy>=100?`
                <div class="btn-move-v3 ultimate-move" id="btn-synergy-finisher" style="grid-column: span 2; background: linear-gradient(135deg, #f59e0b, #d97706); border: 2px solid #fbbf24; box-shadow: 0 0 15px #fbbf24; animation: pulse 1s infinite alternate;">
                  <span class="move-emoji">🔱</span>
                  <div class="move-info">
                    <span class="move-name" style="color:white; font-size: 1rem;">NEXUS UNITY</span>
                    <span class="move-cost" style="color:#fef3c7;">0 MP - OVERLOAD</span>
                  </div>
                </div>
              `:``}
              ${o?u.map(n=>`
                <div class="btn-move-v3 ${t.phase===`player_turn`?``:`disabled`}" data-move-id="${n.id}" style="${e.getActiveMoveStyle(n.element)}">
                  <span class="move-emoji">${n.emoji}</span>
                  <div class="move-info">
                    <span class="move-name">${n.name}</span>
                    <span class="move-cost">${n.mpCost} MP</span>
                  </div>
                  ${n.requiresQuiz?`<div class="lore-badge">LORE</div>`:``}
                </div>
              `).join(``):`
                <div style="grid-column: span 2; color: #94a3b8; font-size: 0.9rem; text-align: center; padding: 1rem; border: 1px dashed rgba(255,255,255,0.15); border-radius: 12px;">
                  Attendi il turno del nemico...
                </div>
              `}
            </div>
            <button id="btn-item-v2" class="btn-item-compact">🎒 OGGETTI</button>
          </section>
        </div>
      </div>

      <style>
        .battle-container {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          background-color: #0f172a;
          color: white;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }
        .enemy-area-mini {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 2px solid rgba(226, 232, 240, 0.1);
          z-index: 10;
        }
        .enemy-info-compact {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.5rem;
        }
        .enemy-quit-center { margin-left: 0.5rem; }
        .btn-quit-mini {
          background: #ef4444; border: none; border-radius: 6px; color: white; padding: 4px 8px; font-size: 0.65rem; font-weight: bold; cursor: pointer;
        }

        /* HEX PORTRAITS - THE CORE FIX */
        .hex-portrait {
          position: relative;
          background: #1e293b;
          mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          -webkit-mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hex-portrait.small { width: 65px; height: 75px; }
        .hex-portrait.mini { width: 45px; height: 55px; }
        .hex-portrait img { width: 100%; height: 100%; object-fit: cover; }
        
        /* PORTRAIT COLORS BY ROLE */
        .hex-portrait.striker { background: linear-gradient(135deg, #ef4444, #991b1b); }
        .hex-portrait.mysterian { background: linear-gradient(135deg, #c084fc, #7e22ce); }
        .hex-portrait.ethereal { background: linear-gradient(135deg, #0ea5e9, #0369a1); }
        .hex-portrait.balanced { background: linear-gradient(135deg, #94a3b8, #475569); }

        .party-row-enhanced {
          display: flex;
          justify-content: space-around;
          gap: 0.3rem;
          padding: 0.8rem 0.4rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .char-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 6px 4px;
          border-radius: 12px;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s;
          width: 31%;
          position: relative;
        }
        .char-unit.active {
          background: rgba(124, 58, 237, 0.2);
          border-color: #7c3aed;
          box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
          transform: translateY(-5px);
        }
        .char-unit.fainted { opacity: 0.3; filter: grayscale(1) blur(1px); }

        .hp-bar-enhanced, .mp-bar-enhanced {
          height: 5px; background: rgba(0,0,0,0.6); border-radius: 3px; overflow: hidden; margin: 1px 0; width: 65px;
        }
        .hp-fill { background: #10b981; }
        .mp-fill { background: #3b82f6; }
        .synergy-fill { 
            background: linear-gradient(90deg, #ef4444, #f59e0b); 
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
            transition: width 0.4s ease;
        }
        /* SYNERGY GLOW */
        .synergy-fill[style*="width: 100"], .synergy-fill[style*="width: 9"], .synergy-fill[style*="width: 8"] {
            animation: synergy-glow 1.5s infinite alternate;
        }
        @keyframes synergy-glow {
            from { box-shadow: 0 0 5px #ef4444; }
            to { box-shadow: 0 0 20px #f59e0b; filter: brightness(1.3); }
        }

        /* DINAMIC BACKGROUNDS */
        .bg-style-1 { background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #020617 100%) !important; }
        .bg-style-1::before {
          content: ''; position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px);
          background-size: 60px 60px; background-position: center bottom;
          transform: perspective(500px) rotateX(60deg) translateY(-10%);
          mask-image: linear-gradient(to bottom, transparent, rgba(0,0,0,1));
          z-index: 0;
        }
        .bg-style-2 { background: linear-gradient(180deg, #064e3b 0%, #022c22 100%) !important; }
        .bg-style-3 { background: #000 !important; }
        .bg-style-3::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, #4c1d95 0%, transparent 80%); opacity: 0.5; filter: blur(60px); z-index: 0; }
        .bg-style-4 { background: #3e0909 !important; }
        .bg-style-5 { background: #0f172a !important; }

        .battle-log-mini {
          flex: 1; overflow-y: auto; padding: 0.5rem 1rem; font-size: 0.75rem; color: #cbd5e1;
          display: flex; flex-direction: column; gap: 4px; scroll-behavior: smooth;
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
        .battle-log-mini p { margin: 0; padding: 2px 0; border-bottom: 1px solid rgba(255,255,255,0.02); }

        .action-panel-v3 { padding: 0.8rem; background: rgba(15, 23, 42, 0.95); border-top: 1px solid #334155; position: relative; z-index: 20; }
        .current-char-info { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.6rem; color: #e2e8f0; }
        .moves-grid-v3 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        .btn-move-v3 {
          display: flex; align-items: center; gap: 0.5rem; background: #1e293b; border: 1px solid #334155;
          padding: 0.6rem; border-radius: 10px; color: white; cursor: pointer; position: relative; transition: all 0.2s;
        }
        .btn-move-v3:hover:not(.disabled) { background: #334155; border-color: #7c3aed; transform: translateY(-1px); }
        .btn-move-v3.disabled { opacity: 0.5; filter: grayscale(1); cursor: not-allowed; }

        .btn-item-compact {
          margin-top: 0.6rem; width: 100%; padding: 0.6rem; background: #334155; border: 1px solid #475569;
          border-radius: 8px; color: #fbbf24; font-weight: bold; cursor: pointer; font-size: 0.8rem;
        }
        .status-icon-mini { display: inline-flex; align-items: center; justify-content: center; width: 12px; height: 12px; background: rgba(0,0,0,0.5); border-radius: 2px; }

        @keyframes popupAnim {
            0% { opacity: 0; transform: translate(-50%, 0) scale(0.5); }
            15% { opacity: 1; transform: translate(-50%, -40px) scale(1.2); }
            30% { transform: translate(-50%, -60px) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -120px); }
        }
        .damage-popup.crit { animation: critAnim 1.2s forwards !important; }
        @keyframes critAnim {
            0% { opacity: 0; transform: translate(-50%, 0) scale(0.5) rotate(-10deg); }
            20% { opacity: 1; transform: translate(-50%, -50px) scale(1.8) rotate(5deg); }
            100% { opacity: 0; transform: translate(-50%, -130px); }
        }
        .damage-popup { pointer-events: none; }
        .move-emoji { font-size: 1.4rem; }
        .move-info { display: flex; flex-direction: column; }
        .move-name { font-weight: bold; font-size: 0.85rem; }
        .move-cost { font-size: 0.7rem; color: #94a3b8; }
        .lore-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #fbbf24;
          color: #000;
          font-size: 0.6rem;
          font-weight: bold;
          padding: 2px 4px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .hex-portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          image-rendering: auto;
          background: #1e293b;
        }
        .btn-item-full {
          width: 100%;
          padding: 0.6rem;
          background: #334155;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 8px;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
        .char-card.active {
          border-color: #60a5fa;
          background: rgba(30, 64, 175, 0.3);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }
      </style>
    `,document.getElementById(`btn-quit-battle`)?.addEventListener(`click`,i),document.getElementById(`btn-item-v2`)?.addEventListener(`click`,r),a.querySelectorAll(`.btn-move-v3`).forEach(r=>{let i=r.getAttribute(`data-move-id`),a=(o&&s[o.id]||[]).find(e=>e.id===i);if(!a)return;let c,l=!1;r.addEventListener(`contextmenu`,e=>e.preventDefault()),r.addEventListener(`mouseenter`,()=>{l||e.showTooltip(a)}),r.addEventListener(`mouseleave`,()=>{l||e.hideTooltip()}),r.addEventListener(`pointerdown`,()=>{l=!1,r.classList.add(`pressing`),c=setTimeout(()=>{l=!0,e.showTooltip(a)},450)}),r.addEventListener(`pointerup`,()=>{clearTimeout(c),r.classList.remove(`pressing`),e.hideTooltip(),!l&&t.phase===`player_turn`&&n(a)}),r.addEventListener(`pointerleave`,()=>{clearTimeout(c),r.classList.remove(`pressing`),e.hideTooltip()})}),document.getElementById(`btn-synergy-finisher`)?.addEventListener(`click`,()=>{t.phase===`player_turn`&&(n({id:`nexus-unity`,name:`NEXUS UNITY`,mpCost:0,power:500,type:`hybrid`,element:`light`,accuracy:100,baseDamageMultiplier:3.5,healAmount:100,healTarget:`party`,effect:`stun`,effectTarget:`enemy`,effectDuration:2,requiresQuiz:!1,emoji:`🔮`,quote:`NEL NOME DEL NEXUS!`,description:``}),t.synergy=0)}),l(a)}static getEffectEmoji(e){return{burn:`🔥`,stun:`😵‍💫`,regen:`💖`,atk_up:`⚔️`,atk_down:`📉`,def_up:`🛡️`,def_down:`💔`,spd_up:`👟`,spd_down:`🕸️`,confuse:`🌀`,immune:`✨`,taunt:`💢`,evasion:`💨`,paralysis:`⚡`}[e]||`❓`}static getActiveMoveStyle(e){return{fire:`border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.1);`,water:`border-left: 4px solid #3b82f6; background: rgba(59, 130, 246, 0.1);`,wind:`border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.1);`,earth:`border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.1);`,light:`border-left: 4px solid #fbbf24; background: rgba(251, 191, 36, 0.1);`,dark:`border-left: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1);`}[e?.toLowerCase()]||`border-left: 4px solid #64748b; background: rgba(100, 116, 139, 0.1);`}static showTooltip(e){let t=document.getElementById(`move-tooltip`);t||(t=document.createElement(`div`),t.id=`move-tooltip`,t.className=`move-tooltip-overlay glass`,document.body.appendChild(t)),t.innerHTML=`
        <div class="tooltip-header">
            <span class="t-emoji">${e.emoji}</span>
            <span class="t-name">${e.name}</span>
        </div>
        <div class="tooltip-stats">
            <span><strong>Costo:</strong> ${e.mpCost} MP</span>
            ${e.baseDamageMultiplier?`<span><strong>Danno:</strong> x${e.baseDamageMultiplier}</span>`:``}
            ${e.effect?`<span><strong>Effetto:</strong> ${e.effect}</span>`:``}
        </div>
        <p class="tooltip-desc">${e.description||`Nessuna descrizione disponibile.`}</p>
        <div class="tooltip-hint">Rilascia per chiudere</div>
    `,t.style.display=`block`}static hideTooltip(){let e=document.getElementById(`move-tooltip`);e&&(e.style.display=`none`)}static updateBars(e){let t=document.getElementById(`app`);if(!t)return;t.querySelectorAll(`.bar-fill`).forEach(t=>{let n=t.dataset.id;if(n){if(n===`enemy-hp`)t.style.width=`${e.enemy.stats.hp/e.enemy.stats.maxHp*100}%`;else if(n.startsWith(`p`)){let r=n.split(`-`),i=parseInt(r[0].substring(1)),a=e.party[i];if(!a)return;let o=r[1],s=t.closest(`.char-unit`);if(o===`hp`){t.style.width=`${a.stats.hp/a.stats.maxHp*100}%`;let e=s?.querySelector(`.hp-val`);e&&(e.textContent=`${a.stats.hp}/${a.stats.maxHp}`)}else if(o===`mp`){t.style.width=`${a.resource.current/a.resource.max*100}%`;let e=s?.querySelector(`.mp-val`);e&&(e.textContent=`${a.resource.current}/${a.resource.max}`)}}}});let n=e.activeTurnIndex===null?null:e.party[e.activeTurnIndex];if(n){let e=t.querySelector(`.current-char-info strong`);e&&(e.textContent=n.name);let r=t.querySelector(`.mp-text`);r&&(r.textContent=`${n.resource.type}: ${n.resource.current}/${n.resource.max}`)}let r=t.querySelector(`.synergy-fill`);r&&(r.style.width=`${e.synergy}%`);let i=t.querySelector(`.synergy-label`);i&&(i.textContent=`🔥 ${e.synergy}%`);let a=t.querySelector(`.log-window`);a&&(a.innerHTML=e.log.slice(-10).map(e=>`<p>${e}</p>`).join(``)+`<div id="log-anchor"></div>`,a.scrollTop=a.scrollHeight)}static renderVictoryScreen(e,t){let n=t.log.filter(e=>e.includes(`EXP`)||e.includes(`Frammenti`)||e.includes(`salito`)||e.includes(`🎊`)||e.includes(`⭐`)||e.includes(`✨`)).slice(-8);e.innerHTML=`
      <div style="
        position: fixed; inset: 0;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        z-index: 999; padding: 1.5rem; text-align: center; font-family: 'Inter', sans-serif;
        overflow: hidden;
      ">
        <!-- Stars animation -->
        <div style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;">
          ${Array.from({length:20},e=>`
            <div style="
              position: absolute;
              left: ${Math.random()*100}%; top: ${Math.random()*100}%;
              font-size: ${.8+Math.random()*1.5}rem;
              animation: starFloat ${2+Math.random()*3}s ease-in-out infinite alternate;
              animation-delay: ${Math.random()*2}s;
              opacity: 0.7;
            ">⭐</div>
          `).join(``)}
        </div>

        <!-- Title -->
        <div style="font-size: 2.5rem; font-weight: 900; color: #fbbf24; text-shadow: 0 0 30px #f59e0b; margin-bottom: 0.5rem; animation: victoryPop 0.6s cubic-bezier(0.34,1.56,0.64,1);">
          🏆 VITTORIA!
        </div>
        <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1.5rem;">
          ${t.enemy.name} è stato sconfitto
        </div>

        <!-- Party portraits -->
        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
          ${t.party.map(e=>{if(!e)return``;let n=Math.min(100,e.currentExp/e.expToNextLevel*100);return`
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.3rem; position: relative;">
              ${t.log.some(t=>t.includes(`${e.name} è salito al livello`))?`
                <div style="position: absolute; top: -10px; background: #fbbf24; color: #000; font-size: 0.5rem; padding: 2px 5px; border-radius: 4px; font-weight: 900; z-index: 10; box-shadow: 0 0 10px #fbbf24; animation: blink 0.5s infinite alternate;">LEVEL UP!</div>
              `:``}
              <div style="
                width: 60px; height: 68px; border-radius: 8px; overflow: hidden;
                border: 2px solid ${e.isAlive?`#22c55e`:`#ef4444`};
                box-shadow: 0 0 12px ${e.isAlive?`rgba(34,197,94,0.4)`:`rgba(239,68,68,0.3)`};
                opacity: ${e.isAlive?`1`:`0.5`};
                filter: ${e.isAlive?`none`:`grayscale(1)`};
              ">
                <img src="${e.imageUrl}" style="width:100%;height:100%;object-fit:cover;" />
              </div>
              <div style="font-size: 0.55rem; color: #fff; font-weight: bold; margin: 2px 0;">
                Lvl ${e.stats.loreLevel}
              </div>
              <!-- EXP BAR -->
              <div style="width: 60px; height: 6px; background: #1e293b; border-radius: 3px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                <div style="width: ${n}%; height: 100%; background: linear-gradient(90deg, #0ea5e9, #67e8f9); transition: width 1.5s ease-out;"></div>
              </div>
              <div style="font-size: 0.45rem; color: #94a3b8;">${Math.round(e.currentExp)}/${Math.round(e.expToNextLevel||100)} XP</div>
            </div>
            `}).join(``)}
        </div>

        <!-- Rewards log -->
        <div style="
          background: rgba(0,0,0,0.4); border: 1px solid rgba(251,191,36,0.3);
          border-radius: 12px; padding: 1rem; width: 100%; max-width: 320px;
          margin-bottom: 1.5rem; text-align: left;
        ">
          <div style="font-size: 0.75rem; font-weight: bold; color: #fbbf24; margin-bottom: 0.5rem;">✨ RICOMPENSE</div>
          ${n.map(e=>`
            <div style="font-size: 0.75rem; color: #e2e8f0; padding: 3px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
              ${e}
            </div>
          `).join(``)}
        </div>

        <div style="font-size: 0.8rem; color: #64748b; animation: pulse 2s infinite;">
          Ritorno all'Hub in corso...
        </div>

        <style>
          @keyframes starFloat { from { transform: translateY(0) rotate(0deg); } to { transform: translateY(-15px) rotate(20deg); } }
          @keyframes victoryPop { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
          @keyframes pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
          @keyframes blink { from { opacity: 1; } to { opacity: 0.6; } }
        </style>
      </div>
    `}static renderDefeatScreen(e,t){let n=t.log.filter(e=>e.includes(`attacca`)||e.includes(`KO`)||e.includes(`💀`)).slice(-3);e.innerHTML=`
      <div style="
        position: fixed; inset: 0;
        background: linear-gradient(135deg, #0a0a0a, #1a0000);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        z-index: 999; padding: 1.5rem; text-align: center; font-family: 'Inter', sans-serif;
      ">
        <div style="font-size: 2.5rem; font-weight: 900; color: #ef4444; text-shadow: 0 0 30px #dc2626; margin-bottom: 0.5rem; animation: defeatShake 0.5s ease;">
          💀 SCONFITTA
        </div>
        <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1.5rem;">
          Il nexus è caduto nell'oscurità...
        </div>

        <!-- Party KO'd portraits -->
        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
          ${t.party.map(e=>e?`
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.3rem;">
              <div style="width: 55px; height: 62px; border-radius: 8px; overflow: hidden; border: 2px solid #ef4444; opacity: 0.4; filter: grayscale(1);">
                <img src="${e.imageUrl}" style="width:100%;height:100%;object-fit:cover;" />
              </div>
              <div style="font-size: 0.55rem; color: #fca5a5; font-weight: bold;">💀 ${e.name}</div>
            </div>
          `:``).join(``)}
        </div>

        <!-- Last events log -->
        <div style="
          background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3);
          border-radius: 12px; padding: 1rem; width: 100%; max-width: 320px; margin-bottom: 1.5rem; text-align: left;
        ">
          <div style="font-size: 0.75rem; font-weight: bold; color: #ef4444; margin-bottom: 0.5rem;">⚔️ FINE BATTAGLIA</div>
          ${n.map(e=>`
            <div style="font-size: 0.75rem; color: #fca5a5; padding: 3px 0;">
              ${e}
            </div>
          `).join(``)}
        </div>

        <div style="font-size: 0.8rem; color: #64748b; animation: pulse 2s infinite;">
          Ritorno all'Hub...
        </div>

        <style>
          @keyframes defeatShake {
            0%,100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
          }
          @keyframes pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        </style>
      </div>
    `}},d=class{static render(e,t,n,r,i,a,o){let s=document.getElementById(`app`);s&&(s.innerHTML=`
      <div class="hub-container" style="padding: 1.5rem; max-width: 500px; margin: 0 auto; text-align: center;">
        <header style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: start;">
          <div style="text-align: left;">
            <h1 style="font-size: 1.8rem; background: linear-gradient(90deg, #7c3aed, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">MULTIVERSE NEXUS</h1>
            <p style="color: #94a3b8; font-size: 0.8rem;">Sincronizzazione: STABILE</p>
          </div>
          <div style="background: rgba(124, 58, 237, 0.1); padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid rgba(124, 58, 237, 0.3); color: #fbbf24; font-weight: bold; font-size: 0.9rem;">
            ✨ ${t}
          </div>
        </header>

        <section class="active-team-display" style="margin-bottom: 2.5rem;">
          <div style="display: flex; justify-content: center; gap: 0.75rem;">
            ${e.map(e=>e?`
              <div class="char-card active" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 0.4rem;">
                <div class="hex-portrait ${e.role}" style="width: 70px; height: 80px; position: relative; cursor: pointer; transition: transform 0.2s; overflow: hidden;">
                  <img src="${e.imageUrl}" alt="${e.name}" style="object-fit: cover; width: 100%; height: 100%; mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);" data-fallback="${c(e.id)}" />
                </div>
                <div style="position: absolute; bottom: 34px; right: 6px; background: rgba(251, 191, 36, 0.95); color: #000; font-weight: bold; font-size: 0.62rem; padding: 1px 5px; border-radius: 999px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 0 6px rgba(0,0,0,0.25);">Lvl ${e.stats.loreLevel}</div>
                <div class="mini-bars" style="width: 60px;">
                  <div style="height: 4px; background: rgba(0,0,0,0.5); border-radius: 2px; margin-bottom: 2px; overflow: hidden;">
                    <div style="height: 100%; width: ${e.stats.hp/e.stats.maxHp*100}%; background: #10b981;"></div>
                  </div>
                    <div style="height: 3px; background: rgba(0,0,0,0.5); border-radius: 2px; overflow: hidden;">
                      <div style="height: 100%; width: ${e.expToNextLevel&&e.expToNextLevel>0?Math.min(100,e.currentExp/e.expToNextLevel*100):0}%; background: #0ea5e9; box-shadow: 0 0 5px rgba(14, 165, 233, 0.4);"></div>
                    </div>
                </div>
                <p style="margin: 0; font-size: 0.65rem; font-weight: bold; color: #e2e8f0; width: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${e.name}</p>
              </div>
            `:`
              <div class="char-card empty" style="opacity: 0.3;">
                <div class="hex-portrait" style="width: 70px; height: 80px; border: 1px dashed #475569; display: flex; align-items: center; justify-content: center;">
                  <div style="font-size: 1.5rem; color: #475569;">+</div>
                </div>
              </div>
            `).join(``)}
          </div>
        </section>

        <nav style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <button id="btn-start-battle" style="grid-column: span 2; padding: 1.2rem; font-size: 1.1rem; background: linear-gradient(135deg, #7c3aed, #4f46e5); box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3); border-radius: 12px; font-weight: bold; cursor: pointer; border: none; color: white;">🚀 ESPLORA CLUSTER</button>
          <button id="btn-open-roster" style="background: #1e293b; border: 1px solid #334155; padding: 1rem; border-radius: 10px; color: #e2e8f0; cursor: pointer; transition: background 0.2s;">🗃️ SQUADRA</button>
          <button id="btn-open-inventory" style="background: #1e293b; border: 1px solid #334155; padding: 1rem; border-radius: 10px; color: #e2e8f0; cursor: pointer; transition: background 0.2s;">🎒 ZAINO</button>
          <button id="btn-open-shop" style="background: #312e81; border: 1px solid #4338ca; padding: 1rem; border-radius: 10px; color: #fbbf24; cursor: pointer; font-weight: bold;">🏪 NEGOZIO</button>
          <button id="btn-open-codes" style="background: #065f46; border: 1px solid #059669; padding: 1rem; border-radius: 10px; color: #10b981; cursor: pointer; font-weight: bold;">🔑 CODICI</button>
          <button id="btn-open-archive" style="grid-column: span 2; background: linear-gradient(90deg, #1e293b, #312e81); border: 1px solid #4338ca; color: #e0e7ff; padding: 1rem; border-radius: 10px; cursor: pointer; font-weight: bold;">📚 ARCHIVIO LORE</button>
        </nav>
      </div>
    `,document.getElementById(`btn-start-battle`)?.addEventListener(`click`,n),document.getElementById(`btn-open-roster`)?.addEventListener(`click`,r),document.getElementById(`btn-open-inventory`)?.addEventListener(`click`,i),document.getElementById(`btn-open-shop`)?.addEventListener(`click`,a),document.getElementById(`btn-open-codes`)?.addEventListener(`click`,o),document.getElementById(`btn-open-archive`)?.addEventListener(`click`,()=>window.onOpenArchive?.()),s.querySelectorAll(`.hex-portrait`).forEach((t,n)=>{t.addEventListener(`click`,()=>{let t=e[n];t&&window.onShowStats?.(t.id)})}),l(s))}},f=class{static render(e,t,n,r,i){let a=document.getElementById(`app`);if(!a)return;a.innerHTML=`
      <div class="roster-container" style="padding: 1rem; max-width: 500px; margin: 0 auto; color: #e2e8f0; font-family: 'Inter', sans-serif;">
        <header style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
          <button id="btn-roster-back" style="padding: 0.8rem; background: rgba(51, 65, 85, 0.4); border: 1px solid #475569; border-radius: 50%; width: 45px; height: 45px; cursor: pointer; color: white;">←</button>
          <h1 style="font-size: 1.5rem; background: linear-gradient(90deg, #7c3aed, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">GESTIONE ROSTER</h1>
        </header>

        <section class="roster-active-section" style="margin-bottom: 2.5rem; background: rgba(22, 22, 45, 0.7); padding: 1.5rem; border-radius: 20px; border: 1px solid #312e81; box-shadow: 0 8px 32px rgba(0,0,0,0.4);">
          <h2 style="font-size: 0.9rem; margin-bottom: 1.2rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">TEAM ATTIVO (Seleziona uno slot)</h2>
          <div style="display: flex; justify-content: space-around; gap: 0.5rem;">
             ${t.map((e,t)=>e?`
              <div class="char-card active roster-slot" data-idx="${t}" style="position: relative; transition: transform 0.3s; cursor: pointer;">
                <button class="btn-remove-from-party" data-idx="${t}" style="position: absolute; top: -5px; right: -5px; width: 22px; height: 22px; background: #ef4444; border: none; border-radius: 50%; color: white; font-size: 12px; font-weight: bold; cursor: pointer; z-index: 10; border: 2px solid #16162d;">×</button>
                <div class="hex-portrait ${e.characterClass.toLowerCase()} btn-show-stats" data-id="${e.id}">
                  <img src="${e.imageUrl}" alt="${e.name}" data-fallback="${c(e.id||e.name)}" data-character-name="${e.name}" data-character-franchise="${e.franchise}" />
                  <div class="info-badge" style="position: absolute; bottom: 0; right: 8px; background: #7c3aed; color: white; font-size: 10px; padding: 2px 5px; border-radius: 4px; border: 1px solid #16162d;">INFO</div>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.65rem; font-weight: bold; color: #e2e8f0; text-align: center;">${e.name}</p>
              </div>
            `:`
              <div class="char-card roster-slot empty" data-idx="${t}" style="opacity: 0.4; transition: all 0.3s; cursor: pointer;">
                <div class="hex-portrait empty-hex" style="border: 2px dashed #475569; background: rgba(71, 85, 105, 0.1);">
                  <div style="font-size: 1.5rem; color: #475569;">+</div>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.65rem; font-weight: bold; color: #475569; text-align: center;">Slot ${t+1}</p>
              </div>
            `).join(``)}
          </div>
        </section>

        <section class="roster-bench-section">
          <h2 style="font-size: 0.9rem; margin-bottom: 1.2rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">PANCHINA (${e.length} Eroi)</h2>
          <div class="bench-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.8rem;">
            ${e.map((e,t)=>`
              <div class="bench-item" data-idx="${t}" style="cursor: pointer; text-align: center; transition: transform 0.2s;">
                <div class="hex-portrait ${e.characterClass.toLowerCase()} btn-show-stats" data-id="${e.id}">
                  <img src="${e.imageUrl}" alt="${e.name}" data-fallback="${c(e.id||e.name)}" data-character-name="${e.name}" data-character-franchise="${e.franchise}" />
                </div>
              </div>
            `).join(``)}
          </div>
        </section>
      </div>
    `,document.getElementById(`btn-roster-back`)?.addEventListener(`click`,i);let o=null;a.querySelectorAll(`.btn-show-stats`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-id`);n&&window.onShowStats?.(n)})}),a.querySelectorAll(`.roster-slot`).forEach(e=>{e.addEventListener(`click`,t=>{t.target.classList.contains(`btn-remove-from-party`)||t.target.closest(`.btn-show-stats`)||(o=parseInt(e.getAttribute(`data-idx`)||`0`),a.querySelectorAll(`.roster-slot`).forEach(e=>{e.style.transform=`scale(1)`,e.style.outline=`none`}),e.style.transform=`scale(1.1)`,e.style.outline=`2px solid #7c3aed`)})}),a.querySelectorAll(`.btn-remove-from-party`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),r(parseInt(e.getAttribute(`data-idx`)||`0`))})}),a.querySelectorAll(`.bench-item`).forEach(e=>{e.addEventListener(`click`,t=>{if(!t.target.closest(`.btn-show-stats`))if(o!==null){let t=parseInt(e.getAttribute(`data-idx`)||`0`);n(o,t)}else{let e=a.querySelector(`h2`);if(e){let t=e.innerText;e.innerText=`👉 SELEZIONA PRIMA UNO SLOT!`,e.style.color=`#fbbf24`,setTimeout(()=>{e.innerText=t,e.style.color=`#94a3b8`},2e3)}}})}),l(a)}},p=class{static render(e,t){let n=document.getElementById(`app`);if(!n)return;let r=document.createElement(`div`);r.className=`quiz-overlay`,r.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(13, 13, 26, 0.9);
      display: flex; align-items: center; justify-content: center;
      z-index: 1000; padding: 1.5rem; backdrop-filter: blur(10px);
    `,r.innerHTML=`
      <div class="quiz-card" style="background: #16162d; border: 2px solid #7c3aed; padding: 2rem; border-radius: 20px; width: 100%; max-width: 400px; box-shadow: 0 0 50px rgba(124, 58, 237, 0.4);">
        <header style="text-align: center; margin-bottom: 2rem;">
          <h2 style="color: #a855f7; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 0.5rem;">FOCUS LORE</h2>
          <div class="timer-container" style="width: 100%; height: 4px; background: #334155; border-radius: 2px; overflow: hidden;">
            <div id="quiz-timer-fill" style="width: 100%; height: 100%; background: #7c3aed; transition: width 0.1s linear;"></div>
          </div>
        </header>

        <p style="font-size: 1.2rem; font-weight: bold; text-align: center; margin-bottom: 2rem;">${e.question}</p>

        <div class="options-grid" style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${e.options.map((e,t)=>`
            <button class="quiz-opt" data-idx="${t}" style="text-align: left; padding: 1rem; background: #1e293b; border: 1px solid #334155; transition: all 0.2s;">
              ${e}
            </button>
          `).join(``)}
        </div>
      </div>
    `,n.appendChild(r);let i=10,a=document.getElementById(`quiz-timer-fill`),o=setInterval(()=>{i-=.1,a&&(a.style.width=`${i/10*100}%`),i<=0&&(clearInterval(o),s(!1))},100),s=e=>{clearInterval(o),r.remove(),t(e)};r.querySelectorAll(`.quiz-opt`).forEach(t=>{t.addEventListener(`click`,()=>{s(parseInt(t.getAttribute(`data-idx`)||`0`)===e.correctIndex)})})}},m=class{static render(e,t,n){let r=document.getElementById(`app`);r&&(r.innerHTML=`
      <div class="inventory-container" style="padding: 1rem; max-width: 500px; margin: 0 auto;">
        <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <button id="btn-inv-back" style="padding: 0.5rem 1rem; background: #334155;">←</button>
            <h1 style="font-size: 1.5rem;">ZAINO</h1>
          </div>
          <div style="color: #fbbf24; font-weight: bold;">✨ ${e.currency} Fragm.</div>
        </header>

        <section class="inventory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
          ${e.items.map((e,t)=>`
            <div class="inv-item" data-id="${e.id}" data-idx="${t}" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; position: relative;">
               <div class="hex-portrait consumable" style="width: 100%; height: auto; aspect-ratio: 1/1.1;">
                  <div style="font-size: 1.5rem;">📦</div>
               </div>
               <div style="position: absolute; bottom: 5px; right: 5px; font-size: 0.7rem; background: var(--bg-dark); padding: 2px 4px; border-radius: 4px; border: 1px solid var(--primary);">x${e.quantity}</div>
            </div>
          `).join(``)}
          ${Array(12-e.items.length).fill(0).map(()=>`
            <div style="aspect-ratio: 1/1.1; background: #0f172a; border: 1px dashed #334155; clip-path: var(--hex-path); opacity: 0.3;"></div>
          `).join(``)}
        </section>

        <section id="item-details" style="background: #16162d; padding: 1.5rem; border-radius: 12px; min-height: 150px; border-top: 2px solid #7c3aed;">
          <p style="color: #94a3b8; text-align: center;">Seleziona un oggetto per i dettagli</p>
        </section>
      </div>
    `,document.getElementById(`btn-inv-back`)?.addEventListener(`click`,t),r.querySelectorAll(`.inv-item`).forEach(t=>{t.addEventListener(`click`,()=>{let r=t.getAttribute(`data-id`),i=e.items.find(e=>e.id===r);this.showDetails(i,n)})}))}static showDetails(e,t){let n=document.getElementById(`item-details`);n&&(n.innerHTML=`
      <h3 style="color: #a855f7; margin-bottom: 0.5rem;">${e.name.toUpperCase()}</h3>
      <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">${e.description}</p>
      ${t?`<button id="btn-use-item" style="width: 100%; background: #7c3aed;">USA OGGETTO</button>`:``}
    `,t&&document.getElementById(`btn-use-item`)?.addEventListener(`click`,()=>t(e.id)))}},h=[{id:`scooby-doo`,name:`Scooby-Doo`,sourceId:`scooby-doo`,apiSource:`custom`,characterClass:`Mysterian`,franchise:`scooby`},{id:`courage`,name:`Leone il Cane Fifone`,sourceId:`courage`,apiSource:`custom`,characterClass:`Mysterian`,franchise:`scooby`},{id:`shaggy-rogers`,name:`Shaggy Rogers`,sourceId:`shaggy`,apiSource:`custom`,characterClass:`Mysterian`,franchise:`scooby`},{id:`velma-dinkley`,name:`Velma Dinkley`,sourceId:`velma`,apiSource:`custom`,characterClass:`Mysterian`,franchise:`scooby`},{id:`fred-jones`,name:`Fred Jones`,sourceId:`fred`,apiSource:`custom`,characterClass:`Mysterian`,franchise:`scooby`},{id:`daphne-blake`,name:`Daphne Blake`,sourceId:`daphne`,apiSource:`custom`,characterClass:`Mysterian`,franchise:`scooby`},{id:`harry-potter`,name:`Harry Potter`,sourceId:`9e3f6a9a-b276-4bd0-8588-bc6b971a8bc5`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`},{id:`hermione-granger`,name:`Hermione Granger`,sourceId:`4c7a5214-4113-4d4b-a7f4-d022b3956ca0`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`},{id:`albus-dumbledore`,name:`Albus Silente`,sourceId:`b415c865-64bc-4924-8a24-7488f5833441`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`},{id:`luna-lovegood`,name:`Luna Lovegood`,sourceId:`765d137b-8300-410a-ade6-c0c4578b8f2d`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`},{id:`draco-malfoy`,name:`Draco Malfoy`,sourceId:`10986fa8-4f7f-4100-8451-b0bad51f0431`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`},{id:`sirius-black`,name:`Sirius Black`,sourceId:`983ee23f-e8b8-4e8c-859a-18b7654a9918`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`},{id:`hagrid`,name:`Rubeus Hagrid`,sourceId:`40e06020-0985-455b-b9d3-568ea46f534a`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`},{id:`voldemort`,name:`Lord Voldemort`,sourceId:`770fa241-cd4c-47db-a2d9-1ab1955fb462`,apiSource:`hp-api`,characterClass:`Mysterian`,franchise:`harry_potter`,isEnemy:!0},{id:`goku`,name:`Goku`,sourceId:`246`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`vegeta`,name:`Vegeta`,sourceId:`545`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`gohan`,name:`Son Gohan`,sourceId:`2093`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`piccolo`,name:`Junior`,sourceId:`1411`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`naruto`,name:`Naruto Uzumaki`,sourceId:`17`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`sasuke`,name:`Sasuke Uchiha`,sourceId:`13`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`kakashi`,name:`Kakashi Hatake`,sourceId:`85`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`luffy`,name:`Monkey D. Luffy`,sourceId:`40`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`zoro`,name:`Roronoa Zoro`,sourceId:`62`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`},{id:`itachi`,name:`Itachi Uchiha`,sourceId:`61`,apiSource:`jikan`,characterClass:`Striker`,franchise:`anime`,isEnemy:!0},{id:`sora`,name:`Sora`,sourceId:`sora`,apiSource:`custom`,characterClass:`Ethereal`,franchise:`disney`},{id:`riku`,name:`Riku`,sourceId:`riku`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`aqua`,name:`Aqua`,sourceId:`aqua`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`mickey`,name:`Topolino`,sourceId:`mickey`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`axel`,name:`Axel`,sourceId:`axel`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`elsa`,name:`Elsa`,sourceId:`elsa`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`donald`,name:`Paperino`,sourceId:`donald`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`ventus`,name:`Ventus`,sourceId:`ventus`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`simba`,name:`Simba`,sourceId:`simba`,apiSource:`disney`,characterClass:`Ethereal`,franchise:`disney`},{id:`cloud`,name:`Cloud Strife`,sourceId:`cloud`,apiSource:`ffapi`,characterClass:`Ethereal`,franchise:`final_fantasy`},{id:`aerith`,name:`Aerith Gainsborough`,sourceId:`aerith`,apiSource:`ffapi`,characterClass:`Ethereal`,franchise:`final_fantasy`},{id:`squall`,name:`Squall Leonhart`,sourceId:`squall`,apiSource:`ffapi`,characterClass:`Ethereal`,franchise:`final_fantasy`},{id:`vivi`,name:`Vivi Ornitier`,sourceId:`vivi`,apiSource:`ffapi`,characterClass:`Ethereal`,franchise:`final_fantasy`},{id:`sephiroth`,name:`Sephiroth`,sourceId:`sephiroth`,apiSource:`ffapi`,characterClass:`Ethereal`,franchise:`final_fantasy`,isEnemy:!0}],g={Mysterians:[{id:`scooby-doo`,name:`Scooby-Doo`,img:`characters/scooby-doo.webp`},{id:`courage`,name:`Leone il Cane Fifone`,img:`characters/courage.webp`},{id:`shaggy-rogers`,name:`Shaggy Rogers`,img:`characters/shaggy-rogers.webp`},{id:`velma-dinkley`,name:`Velma Dinkley`,img:`characters/velma-dinkley.webp`},{id:`fred-jones`,name:`Fred Jones`,img:`characters/fred-jones.webp`},{id:`daphne-blake`,name:`Daphne Blake`,img:`characters/daphne-blake.webp`},{id:`harry-potter`,name:`Harry Potter`,img:`characters/harry-potter.webp`},{id:`hermione-granger`,name:`Hermione Granger`,img:`characters/hermione-granger.webp`},{id:`albus-dumbledore`,name:`Albus Silente`,img:`characters/albus-dumbledore.webp`},{id:`luna-lovegood`,name:`Luna Lovegood`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=luna-lovegood`},{id:`draco-malfoy`,name:`Draco Malfoy`,img:`characters/draco-malfoy.webp`},{id:`sirius-black`,name:`Sirius Black`,img:`characters/sirius-black.webp`},{id:`hagrid`,name:`Rubeus Hagrid`,img:`characters/hagrid.webp`},{id:`voldemort`,name:`Lord Voldemort`,img:`characters/voldemort.webp`}],Strikers:[{id:`goku`,name:`Goku`,img:`characters/goku.webp`},{id:`vegeta`,name:`Vegeta`,img:`characters/vegeta.webp`},{id:`gohan`,name:`Son Gohan`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=son-gohan`},{id:`piccolo`,name:`Junior`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=junior-piccolo`},{id:`naruto`,name:`Naruto Uzumaki`,img:`characters/naruto.webp`},{id:`sasuke`,name:`Sasuke Uchiha`,img:`characters/sasuke.webp`},{id:`kakashi`,name:`Kakashi Hatake`,img:`characters/kakashi.webp`},{id:`luffy`,name:`Monkey D. Luffy`,img:`characters/luffy.webp`},{id:`zoro`,name:`Roronoa Zoro`,img:`characters/zoro.webp`},{id:`itachi`,name:`Itachi Uchiha`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=itachi`}],Ethereals:[{id:`sora`,name:`Sora`,img:`characters/sora.webp`},{id:`riku`,name:`Riku`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=riku`},{id:`aqua`,name:`Aqua`,img:`characters/aqua.webp`},{id:`mickey`,name:`Topolino`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=mickey-mouse`},{id:`axel`,name:`Axel`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=axel-roxas`},{id:`elsa`,name:`Elsa`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=elsa-frozen`},{id:`donald`,name:`Paperino`,img:`characters/donald.webp`},{id:`ventus`,name:`Ventus`,img:`characters/ventus.webp`},{id:`simba`,name:`Simba`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=simba-lion`},{id:`cloud`,name:`Cloud Strife`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=cloud-strife`},{id:`aerith`,name:`Aerith Gainsborough`,img:`characters/aerith.webp`},{id:`squall`,name:`Squall Leonhart`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=squall-leonhart`},{id:`vivi`,name:`Vivi Ornitier`,img:`https://api.dicebear.com/9.x/adventurer/svg?seed=vivi-ornitier`},{id:`sephiroth`,name:`Sephiroth`,img:`characters/sephiroth.webp`}]},_=class{static JIKAN_BASE=`https://api.jikan.moe/v4`;static HP_API_BASE=`https://hp-api.onrender.com/api`;static DISNEY_API_BASE=`https://api.disneyapi.dev/character`;static CACHE_KEY=`mv_character_cache_v6`;static CACHE_TTL_MS=1e3*60*60*24*3;static async fetchCharacter(e){try{let t=[...g.Mysterians,...g.Ethereals,...g.Strikers].find(t=>t.id===e.id),n=t?.img||`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(e.id)}`;t?.img&&!t.img.startsWith(`/`)&&(n=`/${t.img}`);let i=this.getCachedCharacter(e.id);if(i)return i.currentExp===void 0&&(i.currentExp=0),i.expToNextLevel===void 0&&(i.expToNextLevel=100),i.stats.luck||(i.stats.luck=10),i.stats.mag||(i.stats.mag=20),i.stats.res||(i.stats.res=20),i.imageUrl=n,i;let a=e.name,o;switch(e.apiSource){case`jikan`:o=await this.fetchJikan(e.sourceId,e.name),a=this.cleanName(o?.name||a);break;case`hp-api`:o=await this.fetchHPApi(e.sourceId,e.name),a=o?.name||a;break;case`disney`:o=await this.fetchDisneyApi(e.sourceId),a=o?.name||a;break;default:break}let s={id:e.id,name:a,imageUrl:n,franchise:e.franchise,characterClass:e.characterClass,role:r[e.id]?.role??`balanced`,stats:this.generateStats(e),resource:{type:this.determineResourceType(e),current:r[e.id]?.mp||100,max:r[e.id]?.mp||100},isAlive:!0,activeEffects:[],currentExp:0,expToNextLevel:100,awakeningPoints:0,equipment:{weapon:null,armor:null,accessory:null}};return this.setCachedCharacter(s),s}catch(t){return console.error(`Error fetching character ${e.name}:`,t),this.fallbackCharacter(e)}}static async fetchJikan(e,t){let n=await fetch(`${this.JIKAN_BASE}/characters/${e}`),r=await n.json();if(n.ok&&r?.data)return r.data;let i=await fetch(`${this.JIKAN_BASE}/characters?q=${encodeURIComponent(t)}&limit=1`),a=(await i.json())?.data?.[0];if(i.ok&&a)return a;throw Error(`Jikan data not found for id: ${e}, name: ${t}`)}static async fetchHPApi(e,t){let n=await(await fetch(`${this.HP_API_BASE}/character/${e}`)).json();if(Array.isArray(n)&&n[0])return n[0];if(n&&typeof n==`object`&&!Array.isArray(n))return n;let r=await(await fetch(`${this.HP_API_BASE}/characters`)).json();if(Array.isArray(r)){let n=r.find(t=>t?.id===e);if(n)return n;let i=r.find(e=>e?.name?.toLowerCase()===t.toLowerCase());if(i)return i}throw Error(`HP API data not found for id: ${e}, name: ${t}`)}static async fetchDisneyApi(e){let t=(await(await fetch(`${this.DISNEY_API_BASE}?name=${encodeURIComponent(e)}`)).json())?.data;return Array.isArray(t)?t[0]||null:t||null}static determineResourceType(e){return e.characterClass===`Striker`&&e.franchise===`anime`?`Ki`:e.franchise===`scooby`?`Courage`:`MP`}static generateStats(e){let t=r[e.id];return t?{hp:t.hp,maxHp:t.hp,atk:t.atk,def:t.def,mag:t.mag||20,res:t.res||20,luck:t.luck||10,spd:t.spd,loreLevel:1}:{hp:900,maxHp:900,atk:100,def:100,mag:100,res:100,luck:50,spd:100,loreLevel:1}}static cleanName(e){return e.replace(/\s*\([\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]+\)/g,``).replace(/\s*\[[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]+\]/g,``).trim()}static fallbackCharacter(e){let t=[...g.Mysterians,...g.Ethereals,...g.Strikers].find(t=>t.id===e.id)?.img||`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(e.id)}`;return{id:e.id,name:e.name,imageUrl:t,franchise:e.franchise,characterClass:e.characterClass,role:r[e.id]?.role??`balanced`,stats:this.generateStats(e),resource:{type:this.determineResourceType(e),current:r[e.id]?.mp||100,max:r[e.id]?.mp||100},isAlive:!0,activeEffects:[],currentExp:0,expToNextLevel:100,awakeningPoints:0,equipment:{weapon:null,armor:null,accessory:null}}}static getCachedCharacter(e){try{let t=localStorage.getItem(this.CACHE_KEY);if(!t)return null;let n=JSON.parse(t)[e];return!n||Date.now()-n.ts>this.CACHE_TTL_MS?null:n.value}catch{return null}}static setCachedCharacter(e){try{let t=localStorage.getItem(this.CACHE_KEY),n=t?JSON.parse(t):{};n[e.id]={ts:Date.now(),value:e},localStorage.setItem(this.CACHE_KEY,JSON.stringify(n))}catch{}}},v=class{static async generateEnemy(e,t=!1){let n=h.filter(e=>e.isEnemy),r=n[Math.floor(Math.random()*n.length)];r||=h[Math.floor(Math.random()*h.length)];let i=await _.fetchCharacter(r),a=e*.8+.5,o=this.scaleStats(i.stats,a);return([`voldemort`,`sephiroth`,`itachi`].includes(r.id)||r.isEnemy)&&(o.hp=Math.round(o.hp*1.5),o.maxHp=Math.round(o.maxHp*1.5),o.atk=Math.round(o.atk*1.25)),{...i,stats:o,isBoss:t||r.isEnemy===!0}}static scaleStats(e,t){let n=Math.min(t,3),r=.4+n*.3,i=.5+n*.25;return{hp:Math.round(e.hp*r),maxHp:Math.round(e.maxHp*r),atk:Math.round(e.atk*i),def:Math.round(e.def*i),mag:Math.round(e.mag*i),res:Math.round(e.res*i),luck:Math.round(e.luck*i),spd:Math.round(e.spd*i),loreLevel:Math.max(1,Math.round(n))}}},y={"scooby-doo":{imageUrl:`/characters/scooby-doo.webp`,description:`Un Alano fifone ma adorabile, risolve misteri per Scooby Snacks.`},courage:{imageUrl:`/characters/courage.webp`,description:`Un cane rosa che vive in mezzo al nulla e affronta terrori per amore di Muriel.`},"shaggy-rogers":{imageUrl:`/characters/shaggy-rogers.webp`,description:`Il migliore amico di Scooby, sempre affamato e pronto a scappare dai fantasmi.`},"velma-dinkley":{imageUrl:`/characters/velma-dinkley.webp`,description:`Il cervello della Mystery Inc., non vede nulla senza i suoi occhiali.`},"fred-jones":{imageUrl:`/characters/fred-jones.webp`,description:`Leader della Mystery Inc., esperto in trappole elaborate.`},"daphne-blake":{imageUrl:`/characters/daphne-blake.webp`,description:`Sempre alla moda, finisce spesso nei guai ma sa come liberarsi.`},"harry-potter":{imageUrl:`/characters/harry-potter.webp`,description:`Il ragazzo che è sopravvissuto, l'eroe di Hogwarts.`},"hermione-granger":{imageUrl:`/characters/hermione.webp`,description:`La strega più brillante della sua età, sempre pronta con l'incantesimo giusto.`},"albus-dumbledore":{imageUrl:`/characters/albus-dumbledore.webp`,description:`Preside di Hogwarts e uno dei maghi più saggi e potenti della storia.`},"luna-lovegood":{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=luna-lovegood`,description:`Eccentrica e saggia, vede il mondo in modo completamente unico.`},"draco-malfoy":{imageUrl:`/characters/draco-malfoy.webp`,description:`Il rivale di Harry, tormentato tra dovere familiare e propria coscienza.`},"sirius-black":{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=sirius-black`,description:`Il padrino di Harry, Animagus leale fino alla fine.`},hagrid:{imageUrl:`/characters/hagrid.webp`,description:`Il guardiano delle chiavi di Hogwarts, cuore d'oro e passione per le creature magiche.`},voldemort:{imageUrl:`/characters/voldemort.webp`,description:`Colui che non deve essere nominato. Il mago oscuro più potente di tutti i tempi.`},goku:{imageUrl:`/characters/goku.webp`,description:`Il più grande guerriero Saiyan, sempre alla ricerca di avversari più forti.`},vegeta:{imageUrl:`/characters/vegeta.webp`,description:`Il Principe orgoglioso dei Saiyan, rivale e alleato di Goku.`},gohan:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=son-gohan`,description:`Il figlio di Goku, nasconde un potenziale immenso che si libera quando chi ama è in pericolo.`},piccolo:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=junior-piccolo`,description:`Il guerriero Namecciano, mentore di Gohan e alleato insostituibile.`},naruto:{imageUrl:`/characters/naruto.webp`,description:`Il ninja Jinchūriki che sogna di diventare Hokage. Credici!`},sasuke:{imageUrl:`/characters/sasuke.webp`,description:`L'ultimo degli Uchiha, percorre il confine tra luce e oscurità.`},kakashi:{imageUrl:`/characters/kakashi.webp`,description:`Il ninja che ha copiato oltre mille jutsu grazie al suo Sharingan.`},luffy:{imageUrl:`/characters/luffy.webp`,description:`Il capitano di gomma dei Pirati di Cappello di Paglia, vuole diventare Re dei Pirati.`},zoro:{imageUrl:`/characters/zoro.webp`,description:`Il maestro della Santoryu, mira a diventare il più grande spadaccino del mondo.`},itachi:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=itachi`,description:`Il ninja maledetto dal destino, portava un peso che nessuno capiva.`},sora:{imageUrl:`/characters/sora.webp`,description:`Il portatore della Keyblade che trova forza nei suoi amici.`},riku:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=riku`,description:`Il migliore amico di Sora, cammina nel confine tra luce e oscurità.`},aqua:{imageUrl:`/characters/aqua.webp`,description:`Un Master della Keyblade, rimasta intrappolata nel Realm of Darkness per proteggere gli amici.`},mickey:{imageUrl:`/characters/mickey.webp`,description:`Il Re del castello Disney, usa la Keyblade per difendere la luce.`},axel:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=axel`,description:`Il Nobody del fuoco, ricerca le emozioni perdute. Got it memorized?`},elsa:{imageUrl:`/characters/elsa.webp`,description:`La regina dei ghiacci di Arendelle, impara a controllare i suoi poteri.`},donald:{imageUrl:`/characters/donald.webp`,description:`Il mago irascibile della Disney, compagno inseparabile di Sora.`},ventus:{imageUrl:`/characters/ventus.webp`,description:`Il giovane portatore di Keyblade dal cuore puro, legato a Sora da un filo invisibile.`},simba:{imageUrl:`/characters/simba.webp`,description:`Il re leone che ha ritrovato il suo posto nella cerchia della vita.`},cloud:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=cloud`,description:`Ex-SOLDIER con la Buster Sword, combatte per il destino del pianeta.`},aerith:{imageUrl:`/characters/aerith.webp`,description:`L'ultima dei Cetra, in comunicazione con il Pianeta e chi non c'è più.`},squall:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=squall`,description:`Il comandante solitario degli SeeD, nasconde i sentimenti dietro un'armatura di silenzio.`},vivi:{imageUrl:`https://api.dicebear.com/9.x/adventurer/svg?seed=vivi`,description:`Il piccolo Black Mage di FF9, cerca il significato della propria esistenza.`},sephiroth:{imageUrl:`/characters/sephiroth.webp`,description:`L'Angelo con un'ala sola, un tempo eroe dei SOLDIER, ora minaccia planetaria.`}},b=class e{static STORAGE_VERSION=6;activeTrio=[null,null,null];bench=[];constructor(){this.loadFromStorage(),this.isRosterEmpty()&&this.bench.length}loadFromStorage(){let t=localStorage.getItem(`multiverse_roster`);if(t){let n=JSON.parse(t),r=n.schemaVersion??1;this.activeTrio=n.activeTrio||[null,null,null],this.bench=n.bench||[],this.migrateImages(),this.syncWithMetadata(),r<e.STORAGE_VERSION&&this.saveCharacters()}}migrateImages(){let e={"disney-sora":`sora`,"disney-riku":`riku`,"disney-kairi":`kairi`,"disney-mickey":`mickey`,"disney-donald":`donald`,"disney-goofy":`goofy`,"disney-aqua":`aqua`,"disney-terra":`terra`,"disney-ventus":`ventus`,"disney-axel":`axel`,"disney-maleficent":`maleficent`,"disney-stitch":`stitch`,"disney-genie":`genie`,"disney-elsa":`elsa`,"disney-hercules":`hercules`,"disney-simba":`simba`,"disney-baymax":`baymax`,"disney-mulan":`mulan`,"disney-ursula":`ursula`,"disney-jack-skellington":`jack-skellington`,"anime-goku":`goku`,"anime-vegeta":`vegeta`,"anime-naruto":`naruto`,"anime-sasuke":`sasuke`,"anime-luffy":`luffy`,"anime-zoro":`zoro`,"anime-eren":`eren`,"anime-mikasa":`mikasa`,"anime-saitama":`saitama`,"anime-midoriya":`midoriya`,"hp-harry-potter":`harry-potter`,"hp-hermione-granger":`hermione-granger`,"hp-severus-snape":`severus-snape`,"courage-the-cowardly-dog":`courage`,"lord-voldemort":`voldemort`,"hp-lord-voldemort":`voldemort`,"hp-luna-lovegood":`luna-lovegood`,"hp-rubeus-hagrid":`hagrid`,"hp-bellatrix-lestrange":`bellatrix`,"hp-draco-malfoy":`draco-malfoy`,"hp-sirius-black":`sirius-black`,"ff7-cloud":`cloud`,"ff7-sephiroth":`sephiroth`,"ff7-tifa":`tifa`,"ff7-aerith":`aerith`,"ff8-squall":`squall`,"ff15-noctis":`noctis`,"ff13-lightning":`lightning`,"ff9-vivi":`vivi`,"ff7-zack":`zack`,"ff7-yuffie":`yuffie`,"courage-dog":`courage`,"eustace-bagge":`eustace`,"muriel-bagge":`muriel`,"the-director":`director`},t=[...g.Mysterians,...g.Ethereals,...g.Strikers],n=n=>{if(!n)return;e[n.id]&&(n.id=e[n.id]);let r=t.find(e=>e.id===n.id);if(r?.img)n.imageUrl=r.img;else{let e=y[n.id]?.imageUrl||c(n.id||n.name);e&&(n.imageUrl=e)}};this.activeTrio.forEach(e=>e&&n(e)),this.bench.forEach(e=>n(e))}syncWithMetadata(){let e=new Set(h.map(e=>e.id));this.bench=this.bench.filter(t=>e.has(t.id)),this.activeTrio=this.activeTrio.map(t=>t&&e.has(t.id)?t:null);let t=e=>{let t=h.find(t=>t.id===e.id);t&&(e.name=t.name,e.franchise=t.franchise,e.characterClass=t.characterClass);let n=r[e.id];if(n){(e.stats.mag===void 0||e.stats.mag===null)&&(e.stats.mag=n.mag),(e.stats.res===void 0||e.stats.res===null)&&(e.stats.res=n.res),(e.stats.luck===void 0||e.stats.luck===null)&&(e.stats.luck=n.luck),(e.stats.spd===void 0||e.stats.spd===null)&&(e.stats.spd=n.spd);let t=e.stats.loreLevel||1;e.stats.loreLevel=t;let r=i.calculateLevelUpStats(n,t,n.growthRates);e.stats.hp=r.hp,e.stats.maxHp=r.maxHp,e.stats.atk=r.atk,e.stats.mag=r.mag,e.stats.res=r.res,e.stats.luck=r.luck,e.stats.spd=r.spd,e.role=n.role}(e.currentExp===void 0||e.currentExp===null)&&(e.currentExp=0),(!e.expToNextLevel||e.expToNextLevel<=0)&&(e.expToNextLevel=i.calculateExpToNextLevel(e.stats.loreLevel||1)),e.equipment||={weapon:null,armor:null,accessory:null},e.activeEffects||=[]};this.activeTrio.forEach(e=>e&&t(e)),this.bench.forEach(e=>t(e)),this.saveCharacters()}saveCharacters(){localStorage.setItem(`multiverse_roster`,JSON.stringify({schemaVersion:e.STORAGE_VERSION,activeTrio:this.activeTrio,bench:this.bench}))}async initializeRoster(e){if(this.isRosterEmpty()&&this.bench.length===0){for(let t=0;t<Math.min(e.length,3);t++){let n=h.find(n=>n.id===e[t]);if(n){let e=await _.fetchCharacter(n);this.activeTrio[t]=e}}let t=new Set([...this.activeTrio.filter(Boolean).map(e=>e.id),...this.bench.map(e=>e.id)]),n=h.filter(e=>!t.has(e.id));for(let e of n){if(this.bench.length>=57)break;if(this.bench.some(t=>t.id===e.id))continue;let t=await _.fetchCharacter(e);this.bench.push(t)}}this.applyLocalImages(),this.saveCharacters()}applyLocalImages(){let e=[...g.Mysterians,...g.Ethereals,...g.Strikers],t=t=>{if(!t)return;let n=e.find(e=>e.id===t.id);n?.img?t.imageUrl=n.img:t.imageUrl=`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(t.id)}`};this.activeTrio.forEach(e=>e&&t(e)),this.bench.forEach(e=>t(e))}getActiveTrio(){return[...this.activeTrio]}getActiveAverageLevel(){let e=this.activeTrio.filter(e=>!!e);if(e.length===0)return 1;let t=e.reduce((e,t)=>e+(t.stats.loreLevel||1),0);return Math.max(1,Math.round(t/e.length))}isRosterEmpty(){return this.activeTrio.every(e=>e===null)}getBench(){return[...this.bench]}swapWithBench(e,t){if(e<0||e>=3||t<0||t>=this.bench.length)return;let n=this.activeTrio[e];this.activeTrio[e]=this.bench[t],n?this.bench[t]=n:this.bench.splice(t,1),this.saveCharacters()}removeFromParty(e){if(e<0||e>=3)return;let t=this.activeTrio[e];t&&(this.bench.push(t),this.activeTrio[e]=null,this.saveCharacters())}filterBench(e,t){return this.bench.filter(n=>{let r=e?n.franchise===e:!0,i=t?n.characterClass===t:!0;return r&&i})}sortBench(e){return[...this.bench].sort((t,n)=>e===`name`?t.name.localeCompare(n.name):e===`hp`?n.stats.hp-t.stats.hp:e===`atk`?n.stats.atk-t.stats.atk:0)}async unlockCharacterById(e){let t=h.find(t=>t.id===e);if(t){let e=await _.fetchCharacter(t);this.addToRoster(e)}}addToRoster(e){this.bench.length<57&&(this.bench.find(t=>t.id===e.id)||(this.bench.push(e),this.saveCharacters()))}addExperience(e,t){console.log(`[Roster] Updating ${e} with +${t} EXP`);let n=this.activeTrio.find(t=>t?.id===e)||this.bench.find(t=>t.id===e);if(!n)return console.warn(`[Roster] CHARACTER NOT FOUND IN ACTIVE OR BENCH:`,e),null;let r=i.addExperience(n,t);return this.saveCharacters(),r.levelsGained>0?(console.log(`✨ [Roster] ${n.name} LEVELED UP! Now at lvl ${n.stats.loreLevel}`),`${n.name} è salito al livello ${n.stats.loreLevel}!`):null}},x={characters:[{characterId:`scooby-doo`,questions:[{question:`Qual è il cibo preferito di Scooby-Doo?`,options:[`Pizza`,`Scooby Snacks`,`Hamburger`,`Hot Dog`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Qual è la razza di Scooby-Doo?`,options:[`Alano`,`Mastino`,`Dalmata`,`Bulldog`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Chi è il nipote di Scooby-Doo?`,options:[`Scrappy-Doo`,`Duffy-Doo`,`Scooby-Dum`,`Snappy-Doo`],correctIndex:0,difficulty:`medium`,source:`local`,franchise:`scooby`},{question:`Di che colore è il collare di Scooby?`,options:[`Rosso`,`Blu`,`Verde`,`Turchese`],correctIndex:3,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Come si chiama il furgone della banda di Scooby?`,options:[`Mystery Machine`,`Ghost Bus`,`Scooby Van`,`Horror Bus`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Qual è la frase iconica di Scooby-Doo?`,options:[`Scooby-Dooby-Doo!`,`Ruh-Roh!`,`Yabba-Dabba-Doo!`,`Zoinks!`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Chi dice sempre 'Zoinks!' nel gruppo di Scooby?`,options:[`Fred`,`Daphne`,`Velma`,`Shaggy`],correctIndex:3,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Qual è il soprannome del gruppo di Scooby-Doo?`,options:[`Mystery Inc.`,`Ghost Hunters`,`Scooby Squad`,`Fright Club`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Cosa perde sempre Velma durante le fughe?`,options:[`La sciarpa`,`Gli occhiali`,`Il libro`,`La torcia`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Quanti sono i membri della Mystery Inc.?`,options:[`3`,`4`,`5`,`6`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Come si chiama per intero Shaggy Rogers?`,options:[`Norman Rogers`,`Norville Rogers`,`Nathan Rogers`,`Nicholas Rogers`],correctIndex:1,difficulty:`hard`,source:`local`,franchise:`scooby`},{question:`In quale città vive il gruppo di Scooby-Doo?`,options:[`Crystal Cove`,`Coolsville`,`Cartoon City`,`Spooky Town`],correctIndex:1,difficulty:`medium`,source:`local`,franchise:`scooby`},{question:`Qual è la specialità di Fred Jones nel gruppo?`,options:[`Cucinare`,`Costruire trappole`,`Leggere mappe`,`Guidare`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Di che colore sono i capelli di Daphne Blake?`,options:[`Biondi`,`Neri`,`Rossi`,`Castani`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Come finisce di solito un episodio di Scooby-Doo?`,options:[`Il fantasma scappa`,`La banda si arrende`,`Il mostro viene smascherato`,`Scooby mangia tutto`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`scooby`}]},{characterId:`courage`,questions:[{question:`Come si chiama la padrona di Leone il Cane Fifone?`,options:[`Violet`,`Muriel`,`Edna`,`Marge`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Come si chiama il marito burbero di Muriel?`,options:[`Eustace`,`Edgar`,`Eugene`,`Ernest`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`In quale posto sperduto vive Leone il Cane Fifone?`,options:[`Nel mezzo del Kansas`,`Nel mezzo del nulla`,`In riva al mare`,`In una città fantasma`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Di che colore è Leone il Cane Fifone?`,options:[`Giallo`,`Arancione`,`Rosa`,`Beige`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Come si chiama in originale la serie di Leone il Cane Fifone?`,options:[`Courage the Cowardly Dog`,`Brave Little Dog`,`Scaredy Dog`,`Frightened Hound`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Cosa usa spesso Leone per comunicare i pericoli?`,options:[`Un megafono`,`Un computer magico`,`Segnali di fumo`,`Disegni`],correctIndex:1,difficulty:`medium`,source:`local`,franchise:`scooby`},{question:`Quale personaggio ritorna spesso come antagonista di Leone?`,options:[`Il Dottor Katz`,`Fred Fredburger`,`Katz`,`Il Muratore`],correctIndex:2,difficulty:`medium`,source:`local`,franchise:`scooby`},{question:`Nonostante la paura, Leone protegge sempre chi?`,options:[`Il marito burbero`,`Muriel e Eustace`,`Solo Muriel`,`Il suo osso`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Qual è la caratteristica principale di Eustace con Leone?`,options:[`Lo coccola sempre`,`Lo tratta male e lo spaventa`,`Lo porta a passeggio ogni giorno`,`Lo nutre con carne speciale`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`In quale rete è andata in onda la serie Leone il Cane Fifone?`,options:[`Nickelodeon`,`Cartoon Network`,`Disney Channel`,`Fox Kids`],correctIndex:1,difficulty:`medium`,source:`local`,franchise:`scooby`}]},{characterId:`harry-potter`,questions:[{question:`In quale casa viene smistato Harry?`,options:[`Serpeverde`,`Grifondoro`,`Tassorosso`,`Corvonero`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`harry_potter`},{question:`Qual è la forma del Patronus di Harry?`,options:[`Cervo`,`Lupo`,`Gatto`,`Lontra`],correctIndex:0,difficulty:`medium`,source:`local`,franchise:`harry_potter`},{question:`Chi è il padrino di Harry Potter?`,options:[`Severus Piton`,`Sirius Black`,`Remus Lupin`,`Albus Silente`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`harry_potter`},{question:`Qual è il nucleo della bacchetta di Harry?`,options:[`Unicorno`,`Drago`,`Fenice`,`Vane`],correctIndex:2,difficulty:`hard`,source:`local`,franchise:`harry_potter`},{question:`Come si chiama l'elfo amico di Harry?`,options:[`Kreacher`,`Dobby`,`Winky`,`Hokey`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`harry_potter`},{question:`Qual è l'incantesimo di disarmo usato da Harry?`,options:[`Expelliarmus`,`Stupefy`,`Wingardium Leviosa`,`Avada Kedavra`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`harry_potter`},{question:`Da quanti libri è composta la saga di Harry Potter?`,options:[`5`,`6`,`7`,`8`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`harry_potter`}]},{characterId:`goku`,questions:[{question:`Qual è il vero nome Saiyan di Goku?`,options:[`Kakarot`,`Bardock`,`Raditz`,`Broly`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Chi ha insegnato la Kamehameha a Goku?`,options:[`Dio`,`Re Kaioh`,`Maestro Muten`,`Nonno Gohan`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Quale trasformazione raggiunge Goku contro Freezer?`,options:[`Super Saiyan`,`Super Saiyan 2`,`Super Saiyan 3`,`Super Saiyan God`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Come si chiama il figlio maggiore di Goku?`,options:[`Goten`,`Gohan`,`Trunks`,`Pan`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Chi è l'eterno rivale di Goku?`,options:[`Piccolo`,`Frieza`,`Vegeta`,`Cell`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Qual è la tecnica di fusione di Goku e Vegeta?`,options:[`Potara`,`Kamehameha doppia`,`Fusion Dance`,`Spiraling Aura`],correctIndex:2,difficulty:`medium`,source:`local`,franchise:`anime`}]}],franchises:[{franchise:`scooby`,questions:[{question:`Quale frase dice Fred quando smascherano il mostro?`,options:[`Era il custode!`,`L'avrei preso anch'io!`,`E l'avremmo fatto franca...`,`Smettila Scooby!`],correctIndex:0,difficulty:`medium`,source:`local`,franchise:`scooby`},{question:`In quale anno debuttò Scooby-Doo in TV?`,options:[`1965`,`1969`,`1972`,`1975`],correctIndex:1,difficulty:`hard`,source:`local`,franchise:`scooby`},{question:`Come si chiama lo show originale di Scooby-Doo?`,options:[`Scooby-Doo, Where Are You!`,`The Scooby Show`,`Mystery Squad`,`Scooby and Friends`],correctIndex:0,difficulty:`medium`,source:`local`,franchise:`scooby`},{question:`Qual è il colore della Mystery Machine?`,options:[`Gialla e rossa`,`Verde e azzurra`,`Verde acqua con fiori arancioni`,`Viola scura`],correctIndex:2,difficulty:`medium`,source:`local`,franchise:`scooby`},{question:`Chi dice spesso 'Jinkies!'?`,options:[`Daphne`,`Fred`,`Velma`,`Scooby`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Qual è la specialità di Velma nel gruppo?`,options:[`Guidare il furgone`,`Costruire trappole`,`Analizzare indizi`,`Cucinare per il gruppo`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`scooby`},{question:`Leone il Cane Fifone è prodotto da quale studio?`,options:[`Hanna-Barbera`,`Cartoon Network Studios`,`Warner Bros Animation`,`DreamWorks`],correctIndex:1,difficulty:`hard`,source:`local`,franchise:`scooby`},{question:`Come si chiama la città di Crystal Cove in quale versione reboot?`,options:[`Mystery Incorporated`,`New Scooby-Doo Movies`,`Be Cool Scooby-Doo`,`A Pup Named Scooby-Doo`],correctIndex:0,difficulty:`hard`,source:`local`,franchise:`scooby`}]},{franchise:`anime`,questions:[{question:`In Dragon Ball Z, chi è il padre di Goku?`,options:[`Vegeta`,`Bardock`,`Raditz`,`Paragus`],correctIndex:1,difficulty:`medium`,source:`local`,franchise:`anime`},{question:`Qual è il clan di Sasuke Uchiha?`,options:[`Clan Hyuga`,`Clan Uchiha`,`Clan Senju`,`Clan Uzumaki`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Cosa c'è sigillato dentro Naruto Uzumaki?`,options:[`Kyubi - La Volpe a Nove Code`,`Eight Tails Ox`,`Tre Code`,`Cinque Code`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Qual è l'arma di Rufy in One Piece?`,options:[`Spada`,`Pistola`,`I suoi pugni di gomma`,`Un tridente`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Come si chiama la tecnica definitiva di Zoro?`,options:[`Santoryu`,`Ittoryu`,`Nitoryu`,`Yontoryu`],correctIndex:0,difficulty:`medium`,source:`local`,franchise:`anime`},{question:`Cos'è il Chakra in Naruto?`,options:[`Un tipo di spada`,`Energia fisica e spirituale`,`Una tecnica specifica`,`Un tipo di Jutsu`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Qual è il sogno di Naruto fin da bambino?`,options:[`Diventare il ninja più forte`,`Diventare Hokage`,`Vendicare il suo clan`,`Trovare il leggendario tesoro`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`anime`},{question:`Chi è il mentore di Goku da bambino?`,options:[`Maestro Roshi`,`Kamisama`,`Re Kaioh`,`Nonno Gohan`],correctIndex:3,difficulty:`hard`,source:`local`,franchise:`anime`},{question:`Come si chiama il luogo dove si allena Goku nell'Ultra Istinto?`,options:[`Hyperbolic Time Chamber`,`Realm of Gods`,`Snake Way`,`Planet Namek`],correctIndex:0,difficulty:`hard`,source:`local`,franchise:`anime`},{question:`Qual è l'haki di Re in One Piece?`,options:[`Haki del Colore dell'Armatura`,`Haki del Colore dell'Osservazione`,`Haki del Conquistatore`,`Haki del Drago`],correctIndex:2,difficulty:`hard`,source:`local`,franchise:`anime`}]},{franchise:`harry_potter`,questions:[{question:`Come si chiama la scuola di magia di Harry Potter?`,options:[`Durmstrang`,`Beauxbatons`,`Hogwarts`,`Ilvermorny`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`harry_potter`},{question:`Chi ha ucciso i genitori di Harry Potter?`,options:[`Bellatrix`,`Voldemort`,`Peter Minus`,`Fenrir`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`harry_potter`},{question:`Qual è la parola d'ordine per entrare nel dormitorio di Grifondoro?`,options:[`Lumos`,`Expecto Patronum`,`Ogni episodio è diversa`,`Accio`],correctIndex:2,difficulty:`medium`,source:`local`,franchise:`harry_potter`},{question:`Qual è il soprannome di Albus Silente in italiano?`,options:[`Il Vecchio Mago`,`Il Grande Silente`,`L'immortale`,`Il Saggio`],correctIndex:1,difficulty:`hard`,source:`local`,franchise:`harry_potter`},{question:`Che animale domestico ha Hermione?`,options:[`Un gufo`,`Un rospo`,`Un gatto`,`Un topo`],correctIndex:2,difficulty:`easy`,source:`local`,franchise:`harry_potter`},{question:`Dove è nascosta la bacchetta dei maghi secondo la leggenda dei Doni della Morte?`,options:[`Nella tomba di Silente`,`In un pozzo antico`,`Nel bosco proibito`,`Nell'anello di Riddle`],correctIndex:0,difficulty:`hard`,source:`local`,franchise:`harry_potter`}]},{franchise:`disney`,questions:[{question:`Chi è il protagonista di Kingdom Hearts?`,options:[`Riku`,`Sora`,`Kairi`,`Mickey`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`disney`},{question:`Qual è l'arma iconica di Sora?`,options:[`Spada Laser`,`Keyblade`,`Buster Sword`,`Gungnir`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`disney`},{question:`Come si chiama l'amico fedele di Simba col muso largo?`,options:[`Timon`,`Pumbaa`,`Zazu`,`Rafiki`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`disney`},{question:`Qual è il potere di Elsa in Frozen?`,options:[`Controllare il fuoco`,`Controllare il ghiaccio`,`Volare`,`Vedere il futuro`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`disney`},{question:`Chi è il villain principale di Kingdom Hearts?`,options:[`Ansem`,`Xehanort`,`Xemnas`,`Marluxia`],correctIndex:1,difficulty:`hard`,source:`local`,franchise:`disney`},{question:`Cosa significa 'Hakuna Matata' ne Il Re Leone?`,options:[`Nessun problema`,`Vita è bella`,`Amicizia vera`,`Tutto passa`],correctIndex:0,difficulty:`easy`,source:`local`,franchise:`disney`}]},{franchise:`final_fantasy`,questions:[{question:`Chi è il protagonista di Final Fantasy VII?`,options:[`Squall`,`Cloud`,`Noctis`,`Tidus`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`final_fantasy`},{question:`Come si chiama la spada enorme di Cloud?`,options:[`Masamune`,`Buster Sword`,`Gunblade`,`Excalibur`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`final_fantasy`},{question:`Chi è il villain principale di Final Fantasy VII?`,options:[`Kefka`,`Sephiroth`,`Seifer`,`Exdeath`],correctIndex:1,difficulty:`easy`,source:`local`,franchise:`final_fantasy`},{question:`Come si chiama l'organizzazione antagonista in FF7?`,options:[`Shinra`,`Wutai`,`AVALANCHE`,`Turks`],correctIndex:0,difficulty:`medium`,source:`local`,franchise:`final_fantasy`},{question:`Qual è la summon acquatica più famosa in Final Fantasy?`,options:[`Ramuh`,`Leviathan`,`Ifrit`,`Bahamut`],correctIndex:1,difficulty:`medium`,source:`local`,franchise:`final_fantasy`}]}]},S=class e{static lastQuestionText=``;static async generateQuiz(t,n){let r=JSON.parse(localStorage.getItem(`quiz_history`)||`{}`),i=Date.now(),a=!!n,o=[],s=[];x.characters.forEach(e=>{e.questions.forEach(n=>{o.push(n),(e.characterId===t.id||e.characterId.endsWith(`-${t.id}`))&&s.push(n)})}),x.franchises.forEach(e=>{e.questions.forEach(n=>{o.push(n),e.franchise===t.franchise&&s.push(n)})});let c=e=>a?e.filter(e=>e.difficulty===`hard`||e.difficulty===`medium`):e,l=t=>{let n=t.filter(t=>t.question!==e.lastQuestionText&&i-(r[t.question]||0)>864e5),a=t.filter(t=>t.question!==e.lastQuestionText);return n.length>0?n:a.length>0?a:t},u=c(s),d=c(o),f=l(u.length>0?u:d),p=f.length>0?f:d;return p.length>0?this.pickAndStore(p,r,i):{question:`Qual è il potere principale di ${t.name}?`,options:[`Manipolazione Magica`,`Forza Bruta`,`Velocità Estrema`,`Intelletto Superiore`],correctIndex:0,difficulty:a?`hard`:`easy`,source:`local`,franchise:t.franchise}}static async generateHubQuiz(e=`general`){let t=[];return e===`general`?(x.characters.forEach(e=>t.push(...e.questions)),x.franchises.forEach(e=>t.push(...e.questions))):(x.franchises.forEach(n=>{n.franchise===e&&t.push(...n.questions)}),x.characters.forEach(n=>{n.franchise===e&&t.push(...n.questions)})),t.length===0?{question:`Chi ha creato il Multiverso?`,options:[`Il Direttore`,`I Saggi`,`Gli Antichi`,`Nessuno`],correctIndex:0,difficulty:`medium`,source:`local`,franchise:e}:t[Math.floor(Math.random()*t.length)]}static pickAndStore(t,n,r){let i=t[Math.floor(Math.random()*t.length)];return e.lastQuestionText=i.question,n[i.question]=r,localStorage.setItem(`quiz_history`,JSON.stringify(n)),i}},C=class{static equipWeapon(e,t){let n=e.equipment.weapon;return e.equipment.weapon=t,n}static unequipWeapon(e){let t=e.equipment.weapon;return e.equipment.weapon=null,t}static equipArmor(e,t){let n=e.equipment.armor;return e.equipment.armor=t,n}static unequipArmor(e){let t=e.equipment.armor;return e.equipment.armor=null,t}static equipAccessory(e,t){let n=e.equipment.accessory;return e.equipment.accessory=t,n}static unequipAccessory(e){let t=e.equipment.accessory;return e.equipment.accessory=null,t}},w=class e{static STORAGE_VERSION=2;inventory={items:[],currency:100};constructor(){this.loadFromStorage(),this.inventory.items.length===0&&this.addDefaultItems()}loadFromStorage(){let t=localStorage.getItem(`multiverse_inventory`);if(t){let n=JSON.parse(t);this.inventory=n.inventory??n,(n.schemaVersion??1)<e.STORAGE_VERSION&&this.saveToStorage()}}saveToStorage(){localStorage.setItem(`multiverse_inventory`,JSON.stringify({schemaVersion:e.STORAGE_VERSION,inventory:this.inventory}))}addDefaultItems(){this.addItem({id:`scooby-snack`,name:`Scooby Snack`,description:`Cura 50 HP. Uno spuntino leggendario.`,type:`consumable`,effect:{hp:50},quantity:5}),this.addItem({id:`hp-elixir`,name:`Elisir di Hogwarts`,description:`Ripristina 30 MP.`,type:`consumable`,effect:{mp:30},quantity:3})}addItem(e){let t=this.inventory.items.find(t=>t.id===e.id);t?t.quantity+=e.quantity:this.inventory.items.push(e),this.saveToStorage()}useItem(e,t){let n=this.inventory.items.findIndex(t=>t.id===e);if(n===-1)return!1;let r=this.inventory.items[n];if(r.quantity<=0)return!1;if(r.type===`consumable`&&r.effect)r.effect.hp&&(t.stats.hp=Math.min(t.stats.maxHp,t.stats.hp+r.effect.hp)),r.effect.mp&&(t.resource.current=Math.min(t.resource.max,t.resource.current+r.effect.mp)),r.effect.revive&&!t.isAlive&&(t.isAlive=!0,t.stats.hp=Math.round(t.stats.maxHp*.2)),r.quantity--;else if(r.type===`weapon`&&r.stats){let e={id:r.id,name:r.name,atk:r.stats.atk||0,mag:r.stats.mag,element:r.element},n=C.equipWeapon(t,e);n&&this.addItemFromEntity(n,`weapon`),r.quantity--}else if(r.type===`armor`&&r.stats){let e={id:r.id,name:r.name,def:r.stats.def||0,res:r.stats.res||0,hp:r.stats.hp},n=C.equipArmor(t,e);n&&this.addItemFromEntity(n,`armor`),r.quantity--}else if(r.type===`accessory`&&r.stats){let e={id:r.id,name:r.name,luck:r.stats.luck},n=C.equipAccessory(t,e);n&&this.addItemFromEntity(n,`accessory`),r.quantity--}return r.quantity<=0&&this.inventory.items.splice(n,1),t.stats=i.getEffectiveStats(t),this.saveToStorage(),!0}addItemFromEntity(e,t){this.addItem({id:e.id,name:e.name,description:`Oggetto disequipaggiato.`,type:t,quantity:1,stats:e})}getInventory(){return{...this.inventory}}addCurrency(e){this.inventory.currency+=e,this.saveToStorage()}},T=class{static render(e,t,n){if(!document.getElementById(`app`))return;let r=y[e.id]||{description:`Un misterioso abitante del multiverso.`},i=t.findIndex(t=>t?.id===e.id),a=document.createElement(`div`);a.className=`stats-modal-overlay`,a.innerHTML=`
      <style>
        .stats-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }
        .stats-modal-card {
          position: relative;
          background: #0f172a;
          border: 1px solid rgba(124, 58, 237, 0.4);
          border-radius: 20px;
          padding: 2rem;
          max-width: 400px;
          width: 100%;
          color: white;
          box-shadow: 0 0 30px rgba(124, 58, 237, 0.2);
          animation: modalAppear 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
        }
        .modal-hex {
          width: 100px;
          height: 110px;
          margin: 0 auto 1rem;
          background: #1e293b;
          mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          -webkit-mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          border: 2px solid #7c3aed;
        }
        .modal-hex img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .stats-grid-compact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 1.5rem;
          margin: 1.5rem 0;
        }
        .stat-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 4px 0;
          font-size: 0.85rem;
        }
        .stat-label { color: #94a3b8; font-weight: 500; }
        .stat-val { font-weight: bold; }
        .exp-bar-container {
          height: 8px;
          background: #1e293b;
          border-radius: 4px;
          overflow: hidden;
          margin: 0.5rem 0 1.5rem;
        }
        .exp-fill {
          height: 100%;
          background: linear-gradient(90deg, #0ea5e9, #67e8f9);
          transition: width 1s ease;
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
        }
        .btn-modal-action {
          width: 100%;
          padding: 0.8rem;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-equip { background: #7c3aed; color: white; }
        .btn-remove { background: #ef4444; color: white; }
      </style>

      <div class="stats-modal-card">
        <button id="btn-close-modal" class="close-btn">&times;</button>
        
        <div class="modal-header" style="text-align: center;">
          <div class="modal-hex">
            <img src="${e.imageUrl}" alt="${e.name}" data-fallback="${c(e.id)}" />
          </div>
          <h2 style="margin: 0; font-size: 1.5rem;">${e.name}</h2>
          <p style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">${e.role} • ${e.characterClass}</p>
        </div>

        <p style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; margin: 1rem 0; text-align: center;">${r.description}</p>

        <div class="stats-grid-compact">
          <div class="stat-item"><span class="stat-label">HP</span><span class="stat-val" style="color:#10b981">${e.stats.hp}/${e.stats.maxHp}</span></div>
          <div class="stat-item"><span class="stat-label">ATK</span><span class="stat-val" style="color:#ef4444">${e.stats.atk}</span></div>
          <div class="stat-item"><span class="stat-label">DEF</span><span class="stat-val" style="color:#3b82f6">${e.stats.def}</span></div>
          <div class="stat-item"><span class="stat-label">MAG</span><span class="stat-val" style="color:#c084fc">${e.stats.mag||0}</span></div>
          <div class="stat-item"><span class="stat-label">RES</span><span class="stat-val" style="color:#6366f1">${e.stats.res||0}</span></div>
          <div class="stat-item"><span class="stat-label">SPD</span><span class="stat-val" style="color:#fbbf24">${e.stats.spd||0}</span></div>
          <div class="stat-item" style="grid-column: span 2; border:none; padding-top: 8px;">
            <span class="stat-label">🍀 LUCK</span>
            <span class="stat-val" style="color:#eab308">${e.stats.luck||0}</span>
          </div>
        </div>

        <div class="exp-box">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem;">
            <span style="color: #fbbf24; font-weight: bold;">Lvl ${e.stats.loreLevel}</span>
            <span style="color: #94a3b8;">EXP: ${e.currentExp??0} / ${e.expToNextLevel??100}</span>
          </div>
          <div class="exp-bar-container">
            <div class="exp-fill" style="width: ${e.expToNextLevel&&e.expToNextLevel>0?Math.min(100,(e.currentExp??0)/e.expToNextLevel*100):0}%"></div>
          </div>
        </div>

        <div class="modal-actions">
          ${i===-1?`
            <p style="font-size: 0.7rem; color: #64748b; margin-bottom: 0.5rem; text-align: center;">EQUIPAGGIA IN:</p>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn-modal-action btn-equip" data-slot="0">SLOT 1</button>
              <button class="btn-modal-action btn-equip" data-slot="1">SLOT 2</button>
              <button class="btn-modal-action btn-equip" data-slot="2">SLOT 3</button>
            </div>
          `:`
            <button class="btn-modal-action btn-remove" data-action="remove">RIMUOVI DALLA SQUADRA</button>
          `}
        </div>
      </div>
    `,document.body.appendChild(a);let o=()=>a.remove();document.getElementById(`btn-close-modal`)?.addEventListener(`click`,o),a.addEventListener(`click`,e=>{e.target===a&&o()}),a.querySelectorAll(`.btn-modal-action`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-action`),r=e.getAttribute(`data-slot`);t===`remove`?n(-1):r!==null&&n(parseInt(r)),a.remove()})}),l(a)}},E=class{static STOCK=[{id:`scooby-snack`,name:`Scooby Snack`,description:`Cura 50 HP. Croccanti!`,type:`consumable`,effect:{hp:50},quantity:1,price:25},{id:`hp-elixir`,name:`Elisir Hogwarts`,description:`Ripristina 40 MP. Magico.`,type:`consumable`,effect:{mp:40},quantity:1,price:50},{id:`phoenix-feather`,name:`Piuma Fenice`,description:`Rianima un alleato caduto.`,type:`consumable`,effect:{revive:!0},quantity:1,price:150},{id:`iron-blade`,name:`Lama di Ferro`,description:`ATK +15. Tagliente.`,type:`weapon`,stats:{atk:15},quantity:1,price:300},{id:`leather-vest`,name:`Gilet Pelle`,description:`DEF +10, RES +5. Robusto.`,type:`armor`,stats:{def:10,res:5},quantity:1,price:250},{id:`luck-charm`,name:`Amuleto Fortuna`,description:`LUCK +20. Porta bene.`,type:`accessory`,stats:{luck:20},quantity:1,price:400}];static render(e){let t=document.getElementById(`app`);if(!t)return;let n=new w,r=n.getInventory(),i=document.createElement(`div`);i.className=`shop-overlay glass-dark`,i.innerHTML=`
      <div class="shop-content animate-pop">
        <header class="shop-header">
          <div class="header-left">
            <h2>🛒 NEXUS BAZAAR</h2>
            <div class="currency-display">💎 ${r.currency} Shards</div>
          </div>
          <button id="btn-close-shop" class="close-badge">✕</button>
        </header>

        <div class="shop-grid scrollable-v">
          ${this.STOCK.map(e=>`
            <div class="shop-card">
              <div class="shop-card-main">
                <div class="item-icon-circle ${e.type}">
                  ${this.getIcon(e.type)}
                </div>
                <div class="item-info">
                  <span class="item-name">${e.name}</span>
                  <p class="item-desc">${e.description}</p>
                </div>
              </div>
              <div class="shop-card-footer">
                <button class="btn-buy ${r.currency>=e.price?``:`disabled`}" 
                        data-id="${e.id}" 
                        ${r.currency>=e.price?``:`disabled`}>
                  COMPRA | 💰 ${e.price}
                </button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <style>
        .shop-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .shop-content {
          width: 100%;
          max-width: 500px;
          max-height: 85vh;
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        .shop-header {
          padding: 1.5rem;
          background: rgba(0,0,0,0.3);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-left h2 { margin: 0; font-size: 1.2rem; color: #facc15; }
        .currency-display { font-size: 0.9rem; color: #fbbf24; font-weight: bold; margin-top: 0.2rem; }
        .close-badge { background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 1.2rem; }
        
        .shop-grid {
          padding: 1rem;
          display: grid;
          gap: 1rem;
          overflow-y: auto;
        }
        .shop-card {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transition: all 0.2s;
        }
        .shop-card:hover { background: rgba(30, 41, 59, 0.8); border-color: rgba(250, 204, 21, 0.3); }
        .shop-card-main { display: flex; gap: 1rem; align-items: center; }
        .item-icon-circle {
          width: 50px; height: 50px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
        }
        .item-icon-circle.consumable { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .item-icon-circle.weapon { background: rgba(239, 68, 68, 0.2); color: #f87171; }
        .item-icon-circle.armor { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .item-icon-circle.accessory { background: rgba(168, 85, 247, 0.2); color: #c084fc; }
        
        .item-info { flex: 1; }
        .item-name { font-weight: bold; font-size: 1rem; display: block; }
        .item-desc { font-size: 0.75rem; color: #94a3b8; margin: 0.2rem 0 0; line-height: 1.2; }
        
        .btn-buy {
          width: 100%;
          padding: 0.6rem;
          background: linear-gradient(135deg, #facc15, #eab308);
          border: none;
          border-radius: 8px;
          color: #422006;
          font-weight: bold;
          font-size: 0.85rem;
          cursor: pointer;
          transition: transform 0.1s;
        }
        .btn-buy:active { transform: scale(0.98); }
        .btn-buy.disabled { background: #334155; color: #64748b; cursor: not-allowed; transform: none; }
      </style>
    `,t.appendChild(i),document.getElementById(`btn-close-shop`)?.addEventListener(`click`,()=>{i.remove(),e()}),i.querySelectorAll(`.btn-buy`).forEach(t=>{t.addEventListener(`click`,()=>{let a=t.getAttribute(`data-id`),o=this.STOCK.find(e=>e.id===a);o&&r.currency>=o.price&&(n.addCurrency(-o.price),n.addItem({...o,quantity:1}),this.showToast(`Hai acquistato ${o.name}!`),i.remove(),this.render(e))})})}static getIcon(e){return e===`weapon`?`⚔️`:e===`armor`?`🛡️`:e===`accessory`?`💍`:`🧪`}static showToast(e){let t=document.createElement(`div`);t.className=`shop-toast animate-slide-up`,t.textContent=e,t.style.cssText=`
      position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
      background: #22c55e; color: white; padding: 10px 20px; border-radius: 30px;
      z-index: 11000; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `,document.body.appendChild(t),setTimeout(()=>t.remove(),2500)}},D=class{static render(e,t){let n=document.getElementById(`app`);if(!n)return;let r=document.createElement(`div`);r.className=`stats-modal-overlay`,r.style.zIndex=`3000`,r.innerHTML=`
      <div class="stats-modal-card" style="max-width: 350px; text-align: center; background: #0f172a; border: 2px solid #10b981; box-shadow: 0 0 25px rgba(16, 185, 129, 0.2);">
        <h2 style="color: #10b981; margin-bottom: 0.5rem; letter-spacing: 2px;">NEXUS CODES</h2>
        <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 1.5rem;">Inserisci un codice segreto per manipolare il multiverso.</p>
        
        <input type="text" id="input-code" placeholder="####" maxlength="10" 
          style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid #334155; border-radius: 8px; color: white; font-size: 1.5rem; text-align: center; letter-spacing: 5px; margin-bottom: 1rem; outline: none;" />
        
        <div id="code-error" style="color: #ef4444; font-size: 0.8rem; margin-bottom: 1rem; display: none;">Codice non valido o errato!</div>
        <div id="code-success" style="color: #10b981; font-size: 0.8rem; margin-bottom: 1rem; display: none;">Codice accettato! Sincronizzazione...</div>

        <div style="display: flex; gap: 10px;">
          <button id="btn-cancel-codes" style="flex: 1; padding: 0.8rem; background: #1e293b; color: white; border: none; border-radius: 8px; cursor: pointer;">ANNULLA</button>
          <button id="btn-submit-codes" style="flex: 2; padding: 0.8rem; background: #10b981; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">RISCATTA</button>
        </div>
      </div>
    `,n.appendChild(r);let i=r.querySelector(`#input-code`),a=r.querySelector(`#code-error`),o=r.querySelector(`#code-success`);i.focus();let s=()=>{e(i.value.trim())?(a.style.display=`none`,o.style.display=`block`,i.disabled=!0,setTimeout(()=>{r.remove(),t()},1500)):(a.style.display=`block`,o.style.display=`none`,i.value=``,i.focus())};document.getElementById(`btn-submit-codes`)?.addEventListener(`click`,s),document.getElementById(`btn-cancel-codes`)?.addEventListener(`click`,()=>{r.remove()}),i.addEventListener(`keydown`,e=>{e.key===`Enter`&&s()})}},O=class{static render(e,t,n,r,i){let a=document.getElementById(`app`);if(!a)return;let o=[{id:`vegeta`,cost:1e3,franchise:`anime`},{id:`hermione-granger`,cost:800,franchise:`harry_potter`},{id:`shaggy-rogers`,cost:600,franchise:`scooby`},{id:`sephiroth`,cost:1500,franchise:`final_fantasy`},{id:`itachi`,cost:1200,franchise:`anime`},{id:`elsa`,cost:900,franchise:`disney`}];a.innerHTML=`
      <div class="archive-container-premium" style="
        min-height: 100vh; background: #020617; color: #e2e8f0; font-family: 'Outfit', sans-serif;
        padding-bottom: 2rem;
      ">
        <!-- HEADER -->
        <header style="
          position: sticky; top: 0; z-index: 100; background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(10px); padding: 1rem 1.5rem; border-bottom: 1px solid rgba(124, 58, 237, 0.2);
          display: flex; justify-content: space-between; align-items: center;
        ">
          <button id="btn-back-hub" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;">←</button>
          <div style="text-align: center;">
            <h1 style="font-size: 1.1rem; letter-spacing: 2px; margin: 0; color: #fbbf24; font-weight: 900;">BIBLIOTECA DELLE OMBRE</h1>
            <p style="font-size: 0.6rem; color: #64748b; margin: 0; text-transform: uppercase;">Custode della Conoscenza Multiversale</p>
          </div>
          <div style="background: linear-gradient(135deg, #1e293b, #0f172a); padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid #fbbf24; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 0.9rem;">📚</span>
            <span style="font-weight: 900; color: #fbbf24; font-size: 0.9rem;">${e}</span>
          </div>
        </header>

        <!-- TABS NAV -->
        <nav style="display: flex; gap: 4px; padding: 1rem 1.5rem; justify-content: center;">
           <button class="archive-tab-btn active" data-tab="unlocks" style="flex: 1; padding: 0.8rem; border: none; background: #1e1b4b; color: white; border-radius: 12px 0 0 12px; font-weight: bold; font-size: 0.8rem; cursor: pointer; border: 1px solid #4338ca;">SBLOCCHI</button>
           <button class="archive-tab-btn" data-tab="journal" style="flex: 1; padding: 0.8rem; border: none; background: #0f172a; color: #94a3b8; border-radius: 0 12px 12px 0; font-weight: bold; font-size: 0.8rem; cursor: pointer; border: 1px solid #1e293b;">DIARIO LORE</button>
        </nav>

        <main id="archive-main-content" style="padding: 0 1.5rem;">
           <!-- CONTENT INJECTED BY TABS -->
        </main>
      </div>

      <style>
        .archive-tab-btn.active { background: #4338ca !important; color: white !important; border-color: #6366f1 !important; box-shadow: 0 0 15px rgba(99, 102, 241, 0.3); }
        .daily-card {
          background: linear-gradient(135deg, #1e1b4b, #312e81);
          border-radius: 20px; padding: 1.5rem; position: relative; overflow: hidden; margin-bottom: 2rem;
          border: 1px solid #4338ca; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .daily-card::before { content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%); pointer-events: none; }
        .unlock-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; }
        .journal-card {
          background: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 1rem;
          display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .hex-portrait { border: 2px solid #334155; border-radius: 12px; overflow: hidden; }
        .hex-portrait.anime { border-color: #ef4444; }
        .hex-portrait.harry_potter { border-color: #7c3aed; }
        .hex-portrait.scooby { border-color: #22c55e; }
        .hex-portrait.final_fantasy { border-color: #3b82f6; }
        .hex-portrait.disney { border-color: #fce71b; }
      </style>
    `;let s=document.getElementById(`archive-main-content`),u=n=>{if(n===`unlocks`)s.innerHTML=`
          <!-- DAILY CHALLENGE -->
          <div class="daily-card">
            <div style="display: flex; gap: 1rem; align-items: center;">
              <div style="font-size: 2.5rem; animation: bounce 2s infinite;">⚡</div>
              <div style="flex: 1;">
                <h3 style="margin: 0; font-size: 1rem; color: #fbbf24;">SFIDA DEL CUSTODE</h3>
                <p style="margin: 0.2rem 0 0.8rem 0; font-size: 0.75rem; color: #94a3b8;">Scegli una categoria e ottieni 50 LP!</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
                  <button class="btn-start-challenge" data-cat="general" style="background:#fbbf24; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">GENERALE</button>
                  <button class="btn-start-challenge" data-cat="anime" style="background:#ef4444; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">ANIME</button>
                  <button class="btn-start-challenge" data-cat="harry_potter" style="background:#7c3aed; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">MAGIA</button>
                  <button class="btn-start-challenge" data-cat="disney" style="background:#3b82f6; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">DISNEY</button>
                </div>
              </div>
            </div>
          </div>

          <h2 style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Eroi Perduti nel Nexus</h2>
          <div class="unlock-grid">
            ${o.map(n=>{let r=h.find(e=>e.id===n.id),i=t.includes(n.id),a=e>=n.cost;return`
                <div style="background: #0f172a; border: 1px solid ${i?`#22c55e`:`#1e293b`}; border-radius: 16px; padding: 1rem; text-align: center; position: relative; opacity: ${i?1:.8}; transition: transform 0.2s;">
                  <div class="hex-portrait ${n.franchise}" style="width: 60px; height: 68px; margin: 0 auto; filter: ${i?`none`:`grayscale(1) contrast(1.2)`}; opacity: ${i?1:.6}">
                     <img src="" data-fallback="${c(n.id)}" />
                  </div>
                  <h4 style="margin: 0.8rem 0 0.2rem 0; font-size: 0.8rem;">${r?.name||n.id}</h4>
                  <p style="font-size: 0.6rem; color: #64748b; margin-bottom: 0.8rem; text-transform: uppercase;">${n.franchise.replace(`_`,` `)}</p>
                  
                  ${i?`
                    <div style="color: #22c55e; font-size: 0.7rem; font-weight: bold; background: rgba(34,197,94,0.1); padding: 4px; border-radius: 4px;">SBLOCCATO</div>
                  `:`
                    <button class="btn-unlock-char" data-id="${n.id}" data-cost="${n.cost}" ${a?``:`disabled`} style="width: 100%; border: none; background: ${a?`#fbbf24`:`#1e293b`}; color: ${a?`black`:`#94a3b8`}; padding: 0.5rem; border-radius: 8px; font-size: 0.7rem; font-weight: bold; cursor: ${a?`pointer`:`not-allowed`}; box-shadow: ${a?`0 4px 10px rgba(251,191,36,0.3)`:`none`};">
                      SBLOCCA (${n.cost} LP)
                    </button>
                  `}
                </div>
              `}).join(``)}
          </div>
        `,s.querySelectorAll(`.btn-start-challenge`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-cat`)||`general`;this.startChallenge(i,t)})}),s.querySelectorAll(`.btn-unlock-char`).forEach(e=>{e.addEventListener(`click`,()=>{r(e.getAttribute(`data-id`),parseInt(e.getAttribute(`data-cost`)))})});else{let e=Object.entries(y).filter(([e])=>t.includes(e)||[`scooby-doo`,`courage`,`goku`].includes(e));s.innerHTML=`
          <h2 style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">I Tuoi Incontri</h2>
          <div class="journal-list">
            ${e.map(([e,t])=>{let n=t,r=h.find(t=>t.id===e);return`
                <div class="journal-card">
                  <div class="hex-portrait ${r?.franchise||`anime`}" style="width: 50px; height: 55px; flex-shrink: 0;">
                    <img src="" data-fallback="${c(e)}" />
                  </div>
                  <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 0.9rem; color: #fbbf24;">${r?.name||e}</h4>
                    <p style="margin: 4px 0 0 0; font-size: 0.7rem; color: #94a3b8; line-height: 1.4;">${n.description}</p>
                  </div>
                </div>
              `}).join(``)}
            ${e.length===0?`<p style="text-align: center; color: #64748b; padding: 2rem;">Nessuna voce registrata nel diario.</p>`:``}
          </div>
        `}l(s)};a.querySelectorAll(`.archive-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{a.querySelectorAll(`.archive-tab-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),u(e.getAttribute(`data-tab`))})}),document.getElementById(`btn-back-hub`)?.addEventListener(`click`,n),u(`unlocks`)}static async startChallenge(e,t=`general`){let n=0,r=async()=>{if(n===3){alert(`✨ ECCELLENTE! ✨
Hai dimostrato una profonda conoscenza del Nexus.

Ricevi 50 Lore Points!`),e(50);return}let i=await S.generateHubQuiz(t);p.render(i,t=>{t?(n++,setTimeout(r,500)):(alert(`❌ ERRORE NEL NEXUS

La tua conoscenza è ancora frammentata. Riprova più tardi per ottenere i punti!`),e(0))})};r()}};function k(){if(!(`serviceWorker`in navigator))return;let e=async()=>{let e=await navigator.serviceWorker.getRegistration(`/multiversenexus/`);e&&await e.update()};window.addEventListener(`load`,async()=>{try{await e();let t=await navigator.serviceWorker.register(`/multiversenexus/sw.js`);await t.update(),setInterval(()=>t.update(),6e4),t.addEventListener(`updatefound`,()=>{let e=t.installing;e&&e.addEventListener(`statechange`,()=>{e.state===`installed`&&navigator.serviceWorker.controller&&window.location.reload()})}),navigator.serviceWorker.addEventListener(`controllerchange`,()=>{window.location.reload()})}catch(e){console.error(`Service worker registration failed`,e)}})}function A(){let e=null;window.addEventListener(`beforeinstallprompt`,t=>{if(t.preventDefault(),e=t,!document.getElementById(`app`)||document.getElementById(`pwa-install-toast`))return;let n=document.createElement(`div`);n.id=`pwa-install-toast`,n.style.cssText=`position:fixed;left:12px;right:12px;bottom:16px;z-index:2000;background:#16162d;border:1px solid #7c3aed;border-radius:12px;padding:12px;color:#e2e8f0;display:flex;gap:10px;align-items:center;justify-content:space-between;`,n.innerHTML=`
      <div style="font-size:0.88rem;">📲 Installa Multiverse Nexus sul telefono per giocare full-screen offline.</div>
      <button id="btn-pwa-install" style="background:#7c3aed;color:white;border:none;border-radius:8px;padding:8px 10px;cursor:pointer;">Installa</button>
    `,document.body.appendChild(n),document.getElementById(`btn-pwa-install`)?.addEventListener(`click`,async()=>{e&&(e.prompt(),await e.userChoice,e=null,n.remove())})})}var j=class{currentView=`HUB`;rosterService;inventoryService;battleEngine=null;battleTimer=null;isHandlingQuiz=!1;isHandlingVictory=!1;lorePoints=0;unlockedCharacters=[];constructor(){this.rosterService=new b,this.inventoryService=new w,this.lorePoints=parseInt(localStorage.getItem(`lore_points`)||`0`),this.unlockedCharacters=JSON.parse(localStorage.getItem(`unlocked_chars`)||`[]`),window.onCaptureRequested=()=>this.handleCapture(),window.onItemMenuRequested=()=>{this.currentView=`INVENTORY`,this.render()},window.onShowStats=e=>this.handleShowStats(e),window.onOpenArchive=()=>{this.currentView=`LORE_ARCHIVE`,this.render()},this.init()}async init(){console.log(`Multiverse Nexus Initializing...`),await this.rosterService.initializeRoster([`scooby-doo`,`courage`,`goku`]),this.render()}async startBattle(){let e=this.rosterService.getActiveTrio();if(e.some(e=>e===null)){alert(`Devi avere 3 personaggi nel team attivo!`);return}let t=this.rosterService.getActiveAverageLevel();this.battleEngine=new o(e,await v.generateEnemy(t,!1),`bg-style-${Math.floor(Math.random()*5)+1}`),this.isHandlingVictory=!1,this.currentView=`BATTLE`,this.render(),this.startBattleLoop()}startBattleLoop(){let e=``,t=null,n=0;this.battleTimer=window.setInterval(()=>{if(!this.battleEngine||this.currentView!==`BATTLE`)return;let r=this.battleEngine.getState();if(r.phase===`victory`){this.isHandlingVictory||(this.isHandlingVictory=!0,this.battleTimer&&clearInterval(this.battleTimer),this.handleVictory());return}if(r.phase===`defeat`){this.battleTimer&&clearInterval(this.battleTimer),setTimeout(()=>{this.rosterService.getActiveTrio().forEach(e=>{e&&(e.stats.hp=Math.ceil(e.stats.maxHp*.3),e.resource.current=Math.ceil(e.resource.max*.5),e.isAlive=!0)}),this.rosterService.saveCharacters(),this.battleEngine=null,this.currentView=`HUB`,this.render()},3e3);return}if(r.phase===`quiz`){this.isHandlingQuiz||(this.isHandlingQuiz=!0,this.handleQuiz());return}else this.isHandlingQuiz=!1;r.phase!==e||r.phase===`player_turn`&&r.activeTurnIndex!==t||r.log.length!==n?(u.render(r,e=>this.battleEngine?.executeMove(e),()=>{this.currentView=`INVENTORY`,this.render()},()=>{this.battleTimer&&clearInterval(this.battleTimer),this.rosterService.getActiveTrio().forEach(e=>{e&&(e.stats.hp=e.stats.maxHp,e.resource.current=e.resource.max,e.isAlive=!0)}),this.rosterService.saveCharacters(),this.battleEngine=null,this.currentView=`HUB`,this.render()}),e=r.phase,t=r.activeTurnIndex,n=r.log.length):u.updateBars(r)},50)}render(){switch(this.currentView){case`HUB`:d.render(this.rosterService.getActiveTrio(),this.inventoryService.getInventory().currency,()=>this.startBattle(),()=>{this.currentView=`ROSTER`,this.render()},()=>{this.currentView=`INVENTORY`,this.render()},()=>E.render(()=>this.render()),()=>D.render(e=>(this.handleApplyCode(e),!0),()=>this.render()));break;case`BATTLE`:this.battleEngine&&u.render(this.battleEngine.getState(),e=>{this.battleEngine&&this.battleEngine.executeMove(e)},()=>{this.currentView=`INVENTORY`,this.render()},()=>{this.battleTimer&&clearInterval(this.battleTimer),this.rosterService.getActiveTrio().forEach(e=>{e&&(e.stats.hp=e.stats.maxHp,e.resource.current=e.resource.max,e.isAlive=!0)}),this.rosterService.saveCharacters(),this.battleEngine=null,this.currentView=`HUB`,this.render()});break;case`ROSTER`:f.render(this.rosterService.getBench(),this.rosterService.getActiveTrio(),(e,t)=>{this.rosterService.swapWithBench(e,t),this.render()},e=>{this.rosterService.removeFromParty(e),this.render()},()=>{this.currentView=`HUB`,this.render()});break;case`INVENTORY`:m.render(this.inventoryService.getInventory(),()=>{this.currentView=this.battleEngine&&this.currentView!==`HUB`?`BATTLE`:`HUB`,this.render()},e=>{let t=!!this.battleEngine,n=t?this.battleEngine.getState():null,r=n?.activeTurnIndex!==null&&n?.activeTurnIndex!==void 0?n.activeTurnIndex:0,i=this.rosterService.getActiveTrio()[r];i&&this.inventoryService.useItem(e,i)&&(t&&(this.battleEngine.getState().log.push(`🎒 Usato oggetto su ${i.name}!`),this.currentView=`BATTLE`),this.render())});break;case`LORE_ARCHIVE`:O.render(this.lorePoints,this.unlockedCharacters,()=>{this.currentView=`HUB`,this.render()},(e,t)=>this.handleUnlock(e,t),e=>{this.lorePoints+=e,localStorage.setItem(`lore_points`,this.lorePoints.toString()),this.render()});break}}async handleUnlock(e,t){this.lorePoints>=t&&(this.lorePoints-=t,this.unlockedCharacters.push(e),localStorage.setItem(`lore_points`,this.lorePoints.toString()),localStorage.setItem(`unlocked_chars`,JSON.stringify(this.unlockedCharacters)),await this.rosterService.unlockCharacterById(e),this.render())}handleApplyCode(e){return e===`1111`?(this.rosterService.getActiveTrio().forEach(e=>{e&&(e.stats.hp=e.stats.maxHp,e.resource.current=e.resource.max)}),alert(`⚠️ Sincronizzazione Party Ripristinata!`),!0):e===`3333`?(this.inventoryService.addCurrency(1e3),alert(`✨ 1000 Nexus Shards ottenuti!`),!0):e===`9999`?(this.rosterService.getActiveTrio().forEach(e=>{if(e){e.stats.loreLevel=Math.max(e.stats.loreLevel,2),e.currentExp=0,e.expToNextLevel=i.calculateExpToNextLevel(e.stats.loreLevel);let t=r[e.id];t&&(e.stats=i.calculateLevelUpStats(t,e.stats.loreLevel,t.growthRates)),e.stats.hp=e.stats.maxHp}}),this.rosterService.saveCharacters(),alert(`🚀 REFRESH COMPLETO: Team livellato e sincronizzato!`),!0):(alert(`❌ Codice non valido`),this.render(),!1)}async handleQuiz(){if(!this.battleEngine)return;let e=this.battleEngine.getState();if(e.phase!==`quiz`){this.isHandlingQuiz=!1;return}let t=e.enemy,n=e.pendingMove,r=await S.generateQuiz(t,n?.id);p.render(r,e=>{this.isHandlingQuiz=!1,this.battleEngine.setQuizResult(e),this.render()})}async handleVictory(){if(!this.battleEngine)return;let e=this.battleEngine.getState();this.rosterService.getActiveTrio().forEach(e=>{e&&(e.stats.hp=e.stats.maxHp,e.resource&&(e.resource.current=e.resource.max),e.isAlive=!0)});let t=e.enemy.stats.loreLevel||1,n=80+t*20,r=30+t*10;this.inventoryService.addCurrency(r),e.log.push(`✨ Vittoria! +${r} Frammenti di Memoria!`),e.party.forEach(t=>{if(!t)return;let r=t.isAlive?n:Math.floor(n*.5);try{let n=this.rosterService.addExperience(t.id,r);n&&e.log.push(`🎊 ${n}`)}catch(e){console.error(`Error adding exp to`,t.name,e)}e.log.push(`⭐ ${t.name} +${r} EXP`)}),this.rosterService.saveCharacters(),u.render(e,()=>{},()=>{},()=>{}),setTimeout(()=>{this.battleEngine=null,this.currentView=`HUB`,this.render()},3500)}async handleCapture(){if(!this.battleEngine)return;let e=this.battleEngine.getState().enemy;this.battleEngine.getState().log.push(`⚠️ SINCRONIZZAZIONE AVVIATA: Sfida Finale (3 domande)!`),this.render();let t=0,n=async()=>{if(t===3){this.battleEngine.getState().log.push(`✨ SINCRONIZZAZIONE COMPLETA! ${e.name} è tuo!`),this.rosterService.addToRoster(e),this.battleEngine.setPhase(`victory`),this.render();return}let r=await S.generateQuiz(e);p.render(r,r=>{r?(t++,this.battleEngine.getState().log.push(`✅ Domanda ${t}/3 Corretta!`),this.render(),setTimeout(n,500)):(this.battleEngine.getState().log.push(`❌ ERRORE! ${e.name} è fuggito nell'iperspazio!`),this.battleEngine.setPhase(`defeat`),this.render())})};n()}handleShowStats(e){let t=null;if(t=this.rosterService.getActiveTrio().find(t=>t?.id===e)||null,t||=this.rosterService.getBench().find(t=>t?.id===e)||null,!t&&this.battleEngine){let n=this.battleEngine.getState();t=n.enemy.id===e?n.enemy:n.party.find(t=>t?.id===e)||null}t&&T.render(t,this.rosterService.getActiveTrio(),t=>{if(t===-1){let t=this.rosterService.getActiveTrio().findIndex(t=>t?.id===e);t!==-1&&(this.rosterService.removeFromParty(t),this.render())}else{let n=this.rosterService.getBench().findIndex(t=>t.id===e);n===-1?this.rosterService.getActiveTrio().findIndex(t=>t?.id===e):(this.rosterService.swapWithBench(t,n),this.render())}})}};function M(){localStorage.getItem(`mv_roster_version`)!==`6`&&(localStorage.removeItem(`mv_character_cache_v3`),localStorage.removeItem(`mv_character_cache_v2`),localStorage.removeItem(`quiz_history`),localStorage.removeItem(`multiverse_roster`),localStorage.setItem(`mv_roster_version`,`6`),console.log(`Roster resettato alla v6: rimosse voci obsolete.`))}M(),k(),A(),new j;