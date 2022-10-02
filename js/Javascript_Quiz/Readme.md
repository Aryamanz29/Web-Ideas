## DESCRIPTION

I've created a Javascript Quiz by using HTML, CSS, JAVASCRIPT.

## SETUP INSTRUCTIONS

To set up the structure of our JavaScript quiz, we’ll need to start with the following HTML:
* A `<div>` to hold the quiz.
* A `<button>` to submit the quiz.
* A `<div>` to display the results.

Here’s how that would look:

```js
<div id="quiz"></div>
<button id="submit">Submit Quiz</button>
<div id="results"></div>
```

Next we’ll need a way to build a quiz, show results, and put it all together.

```js
function buildQuiz(){}
function showResults(){} // display quiz right away
buildQuiz(); // on submit, show results
submitButton.addEventListener('click', showResults);
```

The next thing our quiz needs is some questions to display. We’ll use object literals to represent the individual questions and an array to hold all of the questions that make up our quiz. Using an array will make the questions easy to iterate over:

```js
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
]
```

Next, we can start building the HTML for each question. We’ll need to loop through each question like so:

```js
myQuestions.forEach( (currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
});
```
Now that we’ve generated the HTML for each question, we can join it all together and show it on the page:

```js
quizContainer.innerHTML = output.join('');
```

Once the answer-checking loop is finished, we can show how many questions the user got right:

```js
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
```

## RESULT

![Javascript_Quiz](https://user-images.githubusercontent.com/52233275/138302216-72815845-9245-4aa9-8194-845f6fa9b35c.png)

## AFTER SUBMITTING THE QUIZ

![Javascript_Quiz_Output](https://user-images.githubusercontent.com/52233275/138302249-789bc50d-826b-4a55-84a8-77a91d1d3be1.png)
