//burger
let burger = document.getElementById('burger')
let header = document.getElementsByClassName('header')[0]
let headerMenu = document.getElementsByClassName('header-menu')[0]
let menuItem = headerMenu.getElementsByTagName('li')
let headerButtonsClass = document.getElementsByClassName('header-buttons')[0]
let headerButtons = headerButtonsClass.getElementsByTagName('button')
burger.addEventListener('click',function(){
	this.classList.toggle('active')
	header.classList.toggle('active')
	headerMenu.classList.toggle('active')
})
for(elem of menuItem){
	elem.addEventListener('click',function(){
	for(elem of menuItem){
		elem.classList.remove('active')
	}
	this.classList.add('active')
	header.nextElementSibling.innerHTML =  this.textContent 
})
}



window.addEventListener('scroll',()=>{
	if(window.scrollY != 0){
		header.classList.add('scroll')
		burger.classList.add('scroll')
		burger.nextElementSibling.classList.add('scroll')
		for(elem of menuItem ){
			elem.classList.add('scroll')
		}
		for( elem of headerButtons){
			elem.classList.add('scroll')
		}
	}
	else{
		header.classList.remove('scroll')
		burger.classList.remove('scroll')
		burger.nextElementSibling.classList.remove('scroll')
		for(elem of menuItem ){
			elem.classList.remove('scroll')
		}
		for( elem of headerButtons){
			elem.classList.remove('scroll')
		}
	}
})


//subtitle
let subMenuItem = document.	getElementsByClassName('sub-menu-item')

for(elem of subMenuItem){
	elem.addEventListener('click',function(){
		for(elem of subMenuItem){
			elem.classList.remove('active')
		}
	this.classList.add('active')
	})
}

//tips

let accordionSummary = document.getElementsByClassName('accordion-summary')
let accordionContent = document.getElementsByClassName('accordion-content')
for(elem of accordionSummary){
	elem.addEventListener('click',function(){
		if(this.classList.contains('active')){
			this.classList.remove('active')
			this.nextElementSibling.classList.remove('active')
		}
		else{
			for(elem of accordionSummary){
			elem.classList.remove('active')
			elem.nextElementSibling.classList.remove('active')
			}
			this.classList.add('active')
			this.nextElementSibling.classList.add('active')
		}
		
	})
}
//glossary
let glossaryList = document.getElementsByClassName('glossary-list')[0]
let glossaryListElements = glossaryList.getElementsByTagName('li')
let definitionTitle = document.getElementsByClassName('definition-title')[0]
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let LISTITEMKeys = Object.keys(LISTITEM)
let count = 0;
let glossaryListIndex 
function setGlossaryListIndex(){
	if(window.innerWidth<1024){
	glossaryListIndex = 5
	}
	else{
	glossaryListIndex = 15
	}
}
setGlossaryListIndex()
//Fill ul with
addElemToTheListnext()
// Remove the previous list items and add the following
// Change styles to buttons
function addElemToTheListnext() {
	if(count > LISTITEMKeys.length-1){
		return
	}
	clearContainer(glossaryList)
	for( i = count ; i <count +  glossaryListIndex; i++){
		if(LISTITEMKeys[i]){
			let li = document.createElement('li')
			li.innerHTML = LISTITEMKeys[i]
			li.classList.add('list-items')
			li.addEventListener('click',getDefinitionFromList)
			glossaryList.appendChild(li)
			}
			else{
				count = i
				next.classList.add('stop')
				return
			}
	}
	prev.classList.remove('stop')
	count += glossaryListIndex
}

function addElemToTheListprev(){
	if(count <= glossaryListIndex){
		return count = glossaryListIndex
	}
	let LISTITEMs = document.querySelectorAll('.list-items')
	let a = count-LISTITEMs.length-glossaryListIndex
	clearContainer(glossaryList)
	for( i = a ; i < a + glossaryListIndex; i++ ){
		if(LISTITEMKeys[i]){
			let li = document.createElement('li')
			li.innerHTML = LISTITEMKeys[i]
			li.classList.add('list-items')
			li.addEventListener('click',getDefinitionFromList)
			glossaryList.appendChild(li)
			}
		}	
		count -= LISTITEMs.length
		if(count<=glossaryListIndex){
			prev.classList.add('stop')	
			}
		next.classList.remove('stop')
}
//clean the container
function clearContainer(elem){
	let count =  elem.children.length
	for(i = 0 ; i <=count-1; i++){
		elem.firstElementChild.remove()
	}
}
next.addEventListener('click',addElemToTheListnext)
prev.addEventListener('click',addElemToTheListprev)
// Functions filling fields with a term and corresponding designation
function getDefinitionFromList(){
	for( elem of glossaryListElements){
		elem.classList.remove('active')
	}
	this.classList.add('active')
	definitionTitle.innerHTML = this.textContent
	getExplonation()
}

function getExplonation(){
definitionTitle.nextElementSibling.innerHTML = LISTITEM[definitionTitle.textContent]
}

//FAQs
let faqsQuestion = document.getElementsByClassName('faqs-question')
let faqsUnswer = document.getElementsByClassName('faqs-unswer')

for(elem of faqsQuestion){
	elem.addEventListener('click',function(){
		if(this.classList.contains('active')){
			this.classList.remove('active')
			this.nextElementSibling.classList.remove('active')
		}
		else{
			for(elem of faqsQuestion){
			elem.classList.remove('active')
			elem.nextElementSibling.classList.remove('active')
			}
			this.classList.add('active')
			this.nextElementSibling.classList.add('active')
		}
	})
}
