const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];

const sumbmitOrder = document.querySelector(".sumbmitOrder");
const article = document.querySelector("article");
const spicy = document.querySelector("input[name=spicy]");

const foodOrder = () => {
    foods.forEach(foodList => {
        const foodListHtml = `
			<div class="list" data-id="${foodList.id}" data-spicy="${foodList.spicy}" data-vegetarian="${foodList.vegetarian}">
				<p>${foodList.title}</p>
				<p>${foodList.price}Ar</p>
				<button class="add">Add</button>
			</div>
        `;
        article.innerHTML += foodListHtml; 
    });
};

// Filter the list when the check box is checked
// Return only the value that has types of food checked

const handleSpicyCheckbox = () => {
	if (true/*spicy.checked*/) {
		//article.removeChild(article.childNodes[5]);
		for (let i=0; i<article.getElementsByTagName('*').length-5;i++) {
			article.removeChild(article.childNodes[i+5]);
		}
		console.log("tree");
		const filterSpicyFood = foods.filter(food => food.spicy);
		filterSpicyFood.map(food => {
			const myHtml = `
				<div class="list" data-id="${food.id}" data-spicy="${food.spicy}" data-vegetarian="${food.vegetarian}">
					<p>${food.title}</p>
					<p>${food.price}Ar</p>
					<button class="add">Add</button>
				</div>
			`;
			article.innerHTML += myHtml;
		});
	}
};



// addYourOrder = e => {
// 	const parent = e.target.closest(".list");
	
// }

// const handleSumbmitOrder = () => {
// 	console.log("Ordered food");
// }

//spicy.addEventListener('change', handleSpicyCheckbox);
//window.addEventListener("click", handleSpicyCheckbox);
// sumbmitOrder.addEventListener("click", handleSumbmitOrder);
foodOrder();
handleSpicyCheckbox();