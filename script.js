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

function cleanUpCreate() {
	let mainContent = document.querySelector('.main')

	mainContent.innerHTML = ""
}

function renderCreate(contact) {
	let mainContent = document.querySelector('.main')

    let paramList = ['name', 'email', 'phone', 'address']

    let fieldNodes = []

    for (let i = 0; i < 4; i++) {
        toAdd = `<div class="contact${paramList[i]}">${paramList[i]}: ${contact[paramList[i]]}</div>`
        fieldNodes.push(toAdd)
    }

    let buttonsNode = 
    `<div class="buttons">
        <button class="button edit" value="Edit">Edit</button>
        <button class="button close" value="Close">Close</button>
    </div>`

    let imageNode = `<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">`

    mainContent.insertAdjacentHTML('afterbegin', `<div class='contactinfo'></div>`)

    let contactinfoContent = document.querySelector('.contactinfo')

    for (let i = 0; i < 4; i++) {
        contactinfoContent.insertAdjacentHTML('beforeend', fieldNodes[i])
    }
    contactinfoContent.insertAdjacentHTML('beforeend', buttonsNode)
    
    document.querySelector('.contactname').insertAdjacentHTML('beforeend', imageNode)
}