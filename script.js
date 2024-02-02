const ratingEl = document.querySelectorAll(".rating");
const btnEl =document.getElementById("btn");

const containerEl = document.getElementById("container")
let selectedRating = "";

ratingEl.forEach((ratingEl) => {
ratingEl.addEventListener("click",(Event) => {
console.log(Event.target.innerText || Event.target.parentNode.innerText );

selectedRating = Event.target.innerText || Event.target.parentNode.innerText;



//code eeor in this  list.


    // Event.target.ClassList.add("active")
    // Eventvent.target.parentNode.classList.add("active");

});
});
// in below code from this we can direct one pace to anothe page

btnEl.addEventListener("click", ()=> {
   if(selectedRating !==""){
    containerEl.innerHTML = `
    <h1>Thanku you!</h1>
    <h5> Yourfeedback : ${selectedRating}</h5>
    <h3> Your Feedback makes Happy
    </h3>
    <h4> And we try to improve it.</h4>
    `
   }
})

    
