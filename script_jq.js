$(document).ready(function(){

	// Add click events to start and next buttons
	$('#start-btn').click(startGame)	// Run startGame()
	$('#next-btn').click( () => {
		iQstn++			// Increment question
		setNextQstn()	// Run setNextQstn()
	})


	// To be run once "Start" pressed 
	function startGame() {
		$('#start-btn').fadeOut();	// Hide start btn

		shuffledQstns = qstnsLst.sort( () => Math.random() - 0.5 )	// Sort questions randomly
		iQstn = 0	// Index of current question

		
		$('#question-container').fadeIn()	// Show question/answers  
		setNxtQstn()						// run setNxtQstn()
	}


	function setNxtQstn() {
		resetState()	
		showQstn(shuffledQstns[iQstn])
	}




	// *********** FIX THIS WHILE LOOP **********
	// *********** FIX THIS WHILE LOOP **********
	// *********** FIX THIS WHILE LOOP **********
	// *********** FIX THIS WHILE LOOP **********
	// *********** FIX THIS WHILE LOOP **********

	
	function resetState() {
		$('body').removeClass('correct')	// Clear correct class if exists
		$('body').removeClass('wrong')		// Clear correct class if exists

		$('#answer-buttons').children().remove() 	// Remove all answer btns from #answer-buttons div
		$('#next-btn').fadeOut().addClass('hide')	// Add 'hide' class and fadeOut
	}


	function showQstn(qstn) {
		$('#question').html(qstn.question)	// Add question to place

		qstn.answrsLst.forEach( answer => {
			$('#answer-buttons').append(`<button class="btn ${answer.correct}">${answer.txt}</button>`)
			$('#answer-buttons').last().click(selectAnswr)
		})
	}	


	function selectAnswr (e) {

		////

	}


	// List of question objects
	const qstnsLst = [
		{
			qstn: "What is 2 + 2?",
			answrsLst: [
				{ txt: '4',  correct: true },
				{ txt: '22', correct: false}
			]
		},

		{
			qstn: "What is 2 + 3?",
			answrsLst: [
				{ txt: '23', correct: false },
				{ txt: '5',  correct: true }
			]
		},

		{
			qstn: "What is 2 + 4?",
			answrsLst: [
				{ txt: '6',  correct: true },
				{ txt: '24', correct: false },
			]
		}

	]




})
