/*
Tarea 5: Experimente con permitir al jugador subir de nivel en función de los puntos de experiencia ganados.
○ Un punto de experiencia es un número. Una subida de nivel debería producirse cuando un jugador gana
suficientes puntos de experiencia.
○ Intenta añadir un método que permita a un jugador ganar un número determinado de puntos de experiencia.
○ ¿Cuántos puntos de experiencia deberían dar lugar a una subida de nivel? ¿Cómo puede controlar esta cifra?
*/
import promptSync from "prompt-sync"; // Cambia require por import
const prompt = promptSync();

export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
    this.point = 0  
    this.nextLevel = 10
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
    
  }
  levelUp(){
    this.level += 1;
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  experience(exp){
    this.point += exp;
    console.log(`${this.name} has gained ${exp} experience points!`);
      while (this.point >= this.nextLevel){
        this.point -= this.nextLevel;
        this.levelUp ();
      }
  }
  gainExp(expPoints){
    let exp = 0;
    if (expPoints == 1){
        exp = 5
    }else if (expPoints == 2){
        exp = 15
    }else if (expPoints == 3){
        exp = 25
    }else if (expPoints == 4){
        exp = 35
    }else{
      console.log("This option does not exist");
      return;
    }
    this.experience(exp);
  }
}

const player1 = new Player("Grog", 4)
let point1 = Number(prompt("Ingrese puntos ganados: "));
player1.gainExp(point1);
