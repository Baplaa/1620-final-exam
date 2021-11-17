const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]


function cleanUpIndex() {
    let mainContent = document.querySelector('.main')
    
    mainContent.innerHTML = ""
}

function createSingleIndex(contact) {
    return `<a href="page3.html"><div class="contact">${contact.name}</div></a>`
}

function renderIndex(contactArray) {
    let mainContent = document.querySelector('.main')
    for (let i = 0; i < contactArray.length; i++) {
        mainContent.innerHTML += createSingleIndex(contactArray[i])
    }
}

function cleanUpView() {
    let mainContent = document.querySelector('.main')
    
    mainContent.innerHTML = ""
}

function renderView() {
    let mainContent = document.querySelector('.main')
    
    let inputTypeList = ['text', 'tel', 'text', 'email']
    let placeholderList = ['Name', 'Phone', 'Address', 'Email']
	let fieldTypeList = placeholderList.slice(0)

	for (let i = 0; i < fieldTypeList.length; i++) (
		fieldTypeList[i] = fieldTypeList[i].toLowerCase()
	)

    let inputContainerList = []

	for (let i = 0; i < 4; i++) {
		inputContainerList[i] = 
		`<div class="inputcontainer">
			<input type="${inputTypeList[i]}" id="contact${fieldTypeList[i]}" name="contact${fieldTypeList[i]}" placeholder="Contact ${placeholderList[i]}">
			<button class="extrafield" id="extra${fieldTypeList[i]}field" name="extra${fieldTypeList[i]}field">+</button>
		</div>`
	}

	mainContent.innerHTML += 
	`<div class="contactedit">
		<div class="contactimg">
			<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
		</div>
		<div class="form">
			<form>
			</form>
		</div>	
	</div>`

	let formContent = document.querySelector('form')

	for (let i = 0; i < inputContainerList.length; i++) {
		formContent.innerHTML += inputContainerList[i]
	}

	let page2ButtonHTML = 
	`<div class="buttons">
		<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
		<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
	</div>`

	formContent.insertAdjacentHTML('beforeend', page2ButtonHTML)


}