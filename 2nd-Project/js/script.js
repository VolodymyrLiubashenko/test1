//burger
let body = document.getElementsByTagName('body')[0]
let burger = document.getElementById('burger')
let header = document.getElementsByClassName('header')[0]
let nav = document.getElementsByClassName('header-navigation')[0]
burger.addEventListener('click',function(){
	this.classList.toggle('active')
	header.classList.toggle('active')
	nav.classList.toggle('is-hidden')
	body.classList.toggle('lock')
})




window.addEventListener('scroll',()=>{
	if(window.scrollY != 0){
		header.classList.add('scroll')
		burger.classList.add('scroll')
		burger.nextElementSibling.classList.add('scroll')
	}
	else{
		header.classList.remove('scroll')
		burger.classList.remove('scroll')
		burger.nextElementSibling.classList.remove('scroll')
	}
})


//Block 'solve-problems'
function createSliderElements(el) {
	let solveProblemsRow = document.createElement('div')
	solveProblemsRow.classList.add('solve-problems-row')
	let solveProblemsItem = document.createElement('div')
	solveProblemsItem.classList.add('solve-problems-item')
	solveProblemsRow.appendChild(solveProblemsItem)
	let h4 = document.createElement('h4')
	h4.innerHTML = DataArr[i].h4
	let p = document. createElement('p')
	p.innerHTML = DataArr[i].p
	solveProblemsItem.appendChild(h4)
	solveProblemsItem.appendChild(p)
	let imageContainer = document.createElement('div')
	imageContainer.classList.add('solve-problems-item')
	let image = document.createElement('img')
	image.src = DataArr[i].img
	imageContainer.appendChild(image)
	solveProblemsRow.appendChild(imageContainer)
	solveProblemsRow.dataset.index = i
	el.appendChild(solveProblemsRow)
	let span = document.createElement('span')
	span.addEventListener('click',changeSlideByClickOnDots)
	span.addEventListener('click',()=>clearInterval(interval))
	span.dataset.index = i
	solveProblemsSliderDots.appendChild(span)
}
let solveProblemsSliderDots = document.getElementsByClassName('solve-problems-slider-dots')[0]
let solveSlider = document.getElementsByClassName('solve-slider')[0];
let solveSliderItems = solveSlider.getElementsByClassName('solve-problems-row');
let interval = setInterval(changeSlideAutomaticly,3000)

let elementsNumberSolveSlider = 9
let elementsNumberReviews = 5

function checkScreenWidth (){
	if(window.innerWidth < 1024){
		elementsNumberSolveSlider = 4
		elementsNumberReviews = 3
	}
}

function changeSlideByClickOnDots(){
	let that = this
	for(el of solveProblemsSliderDots.children){
		el.classList.remove('active')
	}
	that.classList.add('active')
	for(el of solveSliderItems){
		if(el.dataset.index == that.dataset.index && el != solveSlider.children[0]){
			let cloneEl = el.cloneNode(true)
			solveSlider.removeChild(el)
			solveSlider.insertBefore(cloneEl,solveSlider.children[1])
			changeSlideAutomaticly()
		}
	}
}

checkScreenWidth ()

for( i = 0 ; i < elementsNumberSolveSlider; i++){
	createSliderElements(solveSlider)
}
solveProblemsSliderDots.children[0].classList.add('active')

function changeSlideAutomaticly(){
	for(el of solveProblemsSliderDots.children){
		el.classList.remove('active')
	}
	for(el of solveProblemsSliderDots.children){
		if(el.dataset.index == solveSliderItems[1].dataset.index){
			el.classList.add('active')
		}
	}
	for(el of solveSliderItems){
		el.classList.add('moove')
	}
	for(el of solveProblemsSliderDots.children){
		el.removeEventListener('click',changeSlideByClickOnDots)
	}
	window.setTimeout(removeClass,1000);
	window.setTimeout(removeElem,1000);
	window.setTimeout(function(){
		for(el of solveProblemsSliderDots.children){
		el.addEventListener('click',changeSlideByClickOnDots)
			}
		},1000)
}

function removeClass(){
	for(el of solveSliderItems){
		el.classList.remove('moove')
	}
}
function removeElem(){
	let clone = solveSliderItems[0].cloneNode(true)
	solveSlider.removeChild(solveSliderItems[0])
	solveSlider.appendChild(clone)
}



//Block "reviews"
let reviewsCarusel = document.getElementsByClassName('reviews-carusel')[0]
let reviewsContainer = document.getElementsByClassName('reviews-container')[0]



function createReviewsCarusel(el){
	for(i = 0 ; i <elementsNumberReviews; i++){
		let reviewsRow = document.createElement('div')
	reviewsRow.classList.add('reviews-row')
	reviewsRow.dataset.logo = dataLogoArray[i]
	let reviewsLogo = document.createElement('div')
	reviewsLogo.classList.add('reviews-item','reviews-logo')
	let image = document.createElement('img')
	image.src = dataReviewArray[i].img
	reviewsRow.appendChild(reviewsLogo).appendChild(image)
	let reviewsCite = document.createElement('blockquote')
	reviewsCite.classList.add('reviews-item', 'reviews-cite')
	let p = document.createElement('p')
	p.innerHTML = dataReviewArray[i].p
	let cite = document.createElement('cite')
	cite.innerHTML = dataReviewArray[i].cite
	reviewsCite.appendChild(p)
	reviewsCite.appendChild(cite)
	reviewsRow.appendChild(reviewsCite)
	el.appendChild(reviewsRow)
	}
}
function createLogoSlide (el) {
	let reviewsLogoSlide = document.createElement('ul')
	reviewsLogoSlide.classList.add('reviews-logo-slide')
	for(i = 0; i < elementsNumberReviews; i++ ){
		let li = document.createElement('li')
		li.dataset.logo = dataLogoArray[i]
		if(elementsNumberReviews == 3){
			li.dataset.position = dataPositionArrayMobile[i]
		}
		else{
			li.dataset.position = dataPositionArray[i]
		}
		let logoImage = document.createElement('img')
		logoImage.src = dataReviewArray[i].img
		reviewsLogoSlide.appendChild(li).appendChild(logoImage)
	}
	el.appendChild(reviewsLogoSlide)
}
function createsliderBar(el){
	let reviewSliderLine = document.createElement('div')
	reviewSliderLine.classList.add('reviews-slider-line')
	let sliderBar = document.createElement('span')
	sliderBar.classList.add('slider-bar')
	el.appendChild(reviewSliderLine).appendChild(sliderBar) 
}

function ChangeSlideAutomaticlyReview (){
	setBarPositionautomaticly()
	removeEventShowElement()
	for(el of reviewsRow){
		el.classList.add('moove')
	}
	window.setTimeout(removeClassFromEl,1000)
	window.setTimeout(removeReviewsElem,1000)
	window.setTimeout(addEventshowElement,1000)
}


function removeClassFromEl(){
	for(el of reviewsRow){
		el.classList.remove('moove')
	}

}

function removeReviewsElem(){
	let clone = reviewsRow[0].cloneNode(true)
	reviewsCarusel.removeChild(reviewsRow[0])
	reviewsCarusel.appendChild(clone)
}

function insertEl(that,parent,child){
	for(el of child){
		if(el.dataset.logo == that.dataset.logo && el != parent.children[0]){
			let cloneEl = el.cloneNode(true)
			parent.removeChild(el)
			parent.insertBefore(cloneEl,parent.children[1])
			ChangeSlideAutomaticlyReview ()
		}
	}
}
let removeEventShowElement = () =>{
	for(el of logoItem ){
	el.removeEventListener('click',showElement)
	}
}
function showElement(){
	removeEventShowElement()
	let that = this
	insertEl(that,reviewsCarusel,reviewsRow)
	setBarPosition(that)
	window.setTimeout(addEventshowElement,1000)
}
let addEventshowElement = () =>{
	for(el of logoItem ){
	el.addEventListener('click',showElement)
	el.addEventListener('click',()=> clearInterval(reviewsInterval))
	}	
}


function setBarPosition(that){
	for(el of logoItem){
	if(el.dataset.logo == that.dataset.logo){
	slideBar.style.left = that.dataset.position
		}
	}
}

function setBarPositionautomaticly(){
	for(el of logoItem){
		if(reviewsCarusel.children[1].dataset.logo == el.dataset.logo){
			slideBar.style.left = el.dataset.position
		}
	}
}



createReviewsCarusel(reviewsCarusel)
createLogoSlide(reviewsContainer)
createsliderBar(reviewsContainer)
let reviewsRow = reviewsCarusel.getElementsByClassName('reviews-row')
let logoItem = document.getElementsByClassName('reviews-logo-slide')[0].getElementsByTagName('li')
let slideBar = document.getElementsByClassName('slider-bar')[0]
let reviewsInterval =  setInterval(ChangeSlideAutomaticlyReview,3000)
addEventshowElement()



