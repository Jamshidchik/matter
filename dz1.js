

 let matter = +prompt ("Nechta misol ishlaysiz? ")
 while(isNaN(matter) || matter==0)
 matter = +prompt( "Iltimos qaytadan urinib ko'ring")

 function random(min, max) {
  return Math.round(Math.random() * (max - min) + min)
 }
 

 for (let i = 0; i <matter; i++) {
  let num1 = random(25, 35),
      num2 = random(15, 25),
      symbol = random(1, 5),
      question,
      answer
      if (symbol == 1) {
        question =`${num1} + ${num2} = ?`
        answer = num1+num2
      }else if (symbol == 2) {
        question = `${num1} - ${num2} = ?`
        answer = num1-num2
      }else if (symbol == 3) {
        question = `${num1} * ${num2} = ?`
        answer = num1*num2
      }else if (symbol == 4) {
        question =`${num1} / ${num2} = ?`
        answer = num1/num2
      }else if (symbol == 5) {
        question =`${num1} % ${num2} = ?`
        answer = num1 % num2
      }
      let example = +prompt(`${i+1} - misolni ishlang: ${question}`)
      if(example==answer){
        console.log(`Sizning javobingiz to'g'ri: ${answer}`);
        alert(`Sizning javobingiz to'g'ri: ${answer}`)
      }else{
        console.log(`Sizning javobizda xatolik mavjud: ${example}  || To'g'ri javob ${answer}`);
        alert(`Sizning javobingiz xato: ${answer}`)
      }
 }
  
