const loaderContainer = document.querySelector('.loader-container');
const mainContent = document.querySelector('.main-content');

const displayLoadingSpinner = () => {
	loaderContainer.style.display = 'flex';
};
const hideLoadingSpinner = () => {
	loaderContainer.style.display = 'none';
};
const displayLoadingBody = () => {
	mainContent.style.display = 'flex';
};
const hideLoadingBody = () => {
	mainContent.style.display = 'none';
};
displayLoadingSpinner(); 
hideLoadingBody()
window.addEventListener('load', () => {
	setTimeout(function () {
	displayLoadingBody();
	hideLoadingSpinner();
	}, 1000);

})