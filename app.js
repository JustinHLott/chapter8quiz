const correctAnswers = ['B','B','C','C','D'];
const theForm = document.querySelector('.quiz-form');
const theOutput = document.querySelector('p span');
const theResult = document.querySelector('.result');


theForm.addEventListener('submit',e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [theForm.q1.value,theForm.q2.value,theForm.q3.value,theForm.q4.value,theForm.q5.value];//looks at the two radio buttons and gets the value of the one that is checked.

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer===correctAnswers[index]){
            score += 20;
        }
    });

    //show result on page
    theResult.querySelector('span').textContent = `${score}%`;
    theResult.classList.remove('d-none');

    //scroll to top of screen
    scrollTo(0,0);

    //roll through numbers from 0-score.
    let i = 0;
    const timer = setInterval(()=>{
        theResult.querySelector('span').textContent = `${i}%`;
        if(i===score){
            clearInterval(timer);
        }else{
            i++;
        }
    },10);
});

theForm.addEventListener('reset',e => {
    // theForm.q1.value='A';
    // theForm.q2.value='A';
    // theForm.q3.value='A';
    // theForm.q4.value='A';
    // theForm.q5.value='A';

    //scroll to top of screen
    this.scrollTo(0,0);

    //Add the classlist to hide the results again
    theResult.classList.add('d-none');

});
