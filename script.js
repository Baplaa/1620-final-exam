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
    let eleList = document.querySelector('.main')
    
    eleList.innerHTML = ""
}


function renderIndex(contactArray) {
    let body = document.querySelector('.main')
    for (let i = 0; i < contactArray.length; i++) {
        body.innerHTML += '<a href="page3.html"><div class="contact">' + contactArray[i].name + '</div></a>'
    }
}