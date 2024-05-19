const inputUser = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const regexPatternWithSpacesAndDashes = /^[1]\s[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithSpacesAndParentheses = /^[1]\s\([0-9][0-9][0-9]\)\s[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithoutSpacesDashesAndParentheses = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

const regexPatternWithDashes = /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithParenthesesAndDashes = /^\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

const regexPatternWithSpaces = /^1\s[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]$/;

const regexPatternwithParenthesesAndDashesWithoutSpaces = /^[1]\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/

const denyList = [regexPatternWithSpacesAndDashes, regexPatternWithSpacesAndParentheses,
regexPatternWithoutSpacesDashesAndParentheses,
regexPatternWithDashes, regexPatternWithParenthesesAndDashes, regexPatternWithSpaces,
regexPatternwithParenthesesAndDashesWithoutSpaces];

const handleInputUser = () => {
  result.classList.remove('active');

  if (inputUser.value === "") {
    alert('Please provide a phone number')
    return
  }

  const resultMatchRegex = checkStringMatchesRegex(inputUser.value);

  console.log(resultMatchRegex)

  if(resultMatchRegex) {
    result.classList.add('active');
    result.textContent += `Valid US number: ${inputUser.value}`
    return
  }

  if(!resultMatchRegex) {
    result.classList.add('active');
    result.textContent += `Invalid US number: ${inputUser.value}`
    return
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

checkBtn.addEventListener('click', handleInputUser);
clearBtn.addEventListener('click', clearDivResult);
