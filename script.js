const inputUser = document.getElementById('user-input');
const form = document.getElementById('form');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const regexPatternWithSpacesAndDashes = /^[1]\s[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithSpacesAndParentheses = /^[1]\s\([0-9][0-9][0-9]\)\s[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithoutSpacesDashesAndParentheses = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

const regexPatternWithDashes = /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithParenthesesAndDashes = /^\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithSpaces = /^1\s[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]$/;

const regexPatternWithParenthesesAndDashesWithoutSpaces = /^[1]\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const denyList = [regexPatternWithSpacesAndDashes, regexPatternWithSpacesAndParentheses,
regexPatternWithoutSpacesDashesAndParentheses,
regexPatternWithDashes, regexPatternWithParenthesesAndDashes, regexPatternWithSpaces,
regexPatternWithParenthesesAndDashesWithoutSpaces];

inputUser.focus();

const handleInputUser = (event) => {
  event.preventDefault();
  result.classList.remove('active');
  result.textContent = "";

  if (inputUser.value === "") {
    alert('Please provide a phone number')
    return
  }

  const resultMatchRegex = checkStringMatchesRegex(inputUser.value);

  if(resultMatchRegex) {
    setTimeout(() => {
      addClassActive();
    }, 50);
    result.textContent += `Valid US number: ${inputUser.value}`
    inputUser.value = "";
    return
  }

  if(!resultMatchRegex) {
    setTimeout(() => {
      addClassActive();
    }, 50);
    result.textContent += `Invalid US number: ${inputUser.value}`
    inputUser.value = "";
  }

}

const checkStringMatchesRegex = (string) => {
  const matchRegex = denyList.some(regex => regex.test(string));
  return matchRegex
}

const clearDivResult = () => {
  result.textContent = ""
  result.classList.remove('active');
}

const addClassActive = () => {
  result.classList.add('active');
}

form.addEventListener('submit', handleInputUser);
clearBtn.addEventListener('click', clearDivResult);