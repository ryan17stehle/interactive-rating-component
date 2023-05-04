/* DOM Elements */
const ratingsDivs = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit');
// Disable the submitBtn until the user has selected their number of stars
submitBtn.disabled = true;
const ratingStateContainer = document.querySelector('.rating-state-container');
const thankYouStateContainer = document.querySelector('.thank-you-state-container');
const starCountSpan = document.querySelector('.star-count')
let starCount;

/* Give ratingsDivs "click" event handlers */
ratingsDivs.forEach((rating, index) => rating.addEventListener('click', () => {
    removeSelected();
    setSelected(rating, index);
}))

/* The '.selected' class must be removed from the other ratingsDivs */
function removeSelected() {
    ratingsDivs.forEach(rating => rating.classList.remove('selected'));
}

/* When the rating is selected, the '.selected' class is added */
function setSelected(rating, index) {
    rating.classList.add('selected');
    starCount = index + 1;
    submitBtn.disabled = false;
    starCountSpan.textContent = starCount.toString();
}

submitBtn.addEventListener('click', () => {
    ratingStateContainer.classList.toggle('toggle-show')
    thankYouStateContainer.classList.toggle('toggle-show')
})