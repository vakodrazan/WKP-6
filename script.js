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
const spicy = document.querySelector("#spicy");

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

if (spicy.checked) {
	console.log("Hello");
}




// const addYourOrder = e => {
// 	const button = e.target;
//     const parent = button.closest('div.list');
// 	const id = parent.dataset.id;
// 	const foodOrder = foods.find(singleRecipe => singleRecipe.id === id);
// }

const handleSumbmitOrder = () => {
	console.log("Ordered food")
}

// window.addEventListener("click", addYourOrder);
sumbmitOrder.addEventListener("click", handleSumbmitOrder);
foodOrder();