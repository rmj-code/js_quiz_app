// const startButton = $("#startButton");

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const qstnContainerElement = document.getElementById('question-container')


const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex // initialise as undefined


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++	// Increment current Q to next question
	setNextQuestion()
})

function startGame() {
	startButton.classList.add('hide')				// Hide start button

	// Get random next question ready
	shuffledQuestions = questions.sort( () => Math.random() - 0.5 )
	currentQuestionIndex = 0


	qstnContainerElement.classList.remove('hide')	// Unhide questions
	setNextQuestion()	// Get next question ready
}



function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])

}


function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {	// Whilst there still exists a button
		answerButtonsElement.removeChild (answerButtonsElement.firstChild)
	}
}

function showQuestion(question) {
	questionElement.innerText = question.question

	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click',selectAnswer)
		answerButtonsElement.appendChild(button)		
	})
}

function setStatusClass(element, correct) {
	clearStatusClass(element)	// Function to clear status
	if (correct) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


function selectAnswer(e) {
	const selectedButton = e.target					// Get selected button (answer)
	const correct = selectedButton.dataset.correct	// Get dataset "correct" property of button 
	setStatusClass(document.body, correct)			// Convert to array since returns live collection which can't loop through
	Array.from(answerButtonsElement.children).forEach( button => {	// Loop through buttons
		setStatusClass(button, button.dataset.correct)	// Set status based on if correct or not
	})

	// Check if any more questions exist
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide')				// Show next button after answer
	} else {
		startButton.innerText ='Restart'		// Change text to 'Resteart' 
		startButton.classList.remove('hide')	// Show start button (as 'Restart')
	}

}


const questions = [
	{
		question: "What is 2 + 2?",
		answers: [
			{ text: '4', correct: true},
			{ text: '22', correct: false}
		]
	},
	{
		question: "What is 2 + 3?",
		answers: [
			{ text: '23', correct: true},
			{ text: '5', correct: false}
		]
	},
	{
		question: "What is 4 + 2?",
		answers: [
			{ text: '6', correct: true},
			{ text: '42', correct: false}
		]
	},
]