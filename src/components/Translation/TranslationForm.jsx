import { useState } from "react";
import TranslationSign from "./TranslationSign";

const TranslationForm = () => {
  const [userInput, setUserInput] = useState("");
  const [sentenceInSigns, setSentenceInSigns] = useState("");

  const handleTranslationBtn = () => {
    let sentence = [];
    for(let i = 0; i < userInput.length; i++){
      let letter = userInput[i].toLocaleLowerCase();
      let signImage = signLanguage.find(obj => obj.letter === letter);
      if(signImage) {
        sentence.push(signImage);
      }
    }
    setSentenceInSigns(sentence);
    console.log(userInput);
    console.log(sentence);
  }

  const createTranslationSentence = () => {
    return sentenceInSigns.map((sentence, index) => {
      return (
        <TranslationSign
        key={index} 
        letter={sentence.letter} 
        image={sentence.image}
        />
      )
    })
  }

  const updateUserInput = (event) => {
    setUserInput(event.target.value);
  }

  const signLanguage = [
    {letter: 'a', image: 'img/a.png'},
    {letter: 'b', image: 'img/b.png'},
    {letter: 'c', image: 'img/c.png'},
    {letter: 'd', image: 'img/d.png'},
    {letter: 'e', image: 'img/e.png'},
    {letter: 'f', image: 'img/f.png'},
    {letter: 'g', image: 'img/g.png'},
    {letter: 'h', image: 'img/h.png'},
    {letter: 'i', image: 'img/i.png'},
    {letter: 'j', image: 'img/j.png'},
    {letter: 'k', image: 'img/k.png'},
    {letter: 'l', image: 'img/l.png'},
    {letter: 'm', image: 'img/m.png'},
    {letter: 'n', image: 'img/n.png'},
    {letter: 'o', image: 'img/o.png'},
    {letter: 'p', image: 'img/p.png'},
    {letter: 'q', image: 'img/q.png'},
    {letter: 'r', image: 'img/r.png'},
    {letter: 's', image: 'img/s.png'},
    {letter: 't', image: 'img/t.png'},
    {letter: 'u', image: 'img/u.png'},
    {letter: 'v', image: 'img/v.png'},
    {letter: 'w', image: 'img/w.png'},
    {letter: 'x', image: 'img/x.png'},
    {letter: 'y', image: 'img/y.png'},
    {letter: 'z', image: 'img/z.png'}
  ];

  return (
    <div>
        <div>
            <input type="text" onChange={updateUserInput} />
            <input
                type="button"
                value="Translate"
                onClick={handleTranslationBtn}
            />
        </div>
        <div style={{display: 'flex'}}>
            {createTranslationSentence()}
        </div>
    </div>
  );
}

export default TranslationForm;
