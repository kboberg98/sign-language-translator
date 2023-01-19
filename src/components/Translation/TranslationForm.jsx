import { useState } from "react";

function TranslationForm() {
  const [userInput, setUserInput] = useState("");

  function handleTranslationBtn() {
    console.log(userInput)
  }

  function updateUserInput(event) {
    setUserInput(event.target.value);
  }

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
        <div>
            
        </div>
    </div>
  );
}

export default TranslationForm;
