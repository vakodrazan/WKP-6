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
const section = document.querySelector(".section-list")
const article = document.querySelector("article")

const foodOrder = () => {
    foods.forEach(foodList => {

        const foodListHtml = `
			<div class="content" data-spicy="${foodList.spicy}" data-vegetarian="${foodList.vegetarian}">
				<div class="list"  data-id="${foodList.id}">
					<p>${foodList.title}</p>
					<p>${foodList.price}</p>
					<button class="add">Add</button>
				</div>
			</div>
        `;
        article.innerHTML += foodListHtml; 
    });
};

const handleSumbmitOrder = () => {
	console.log("Ordered food")
}


sumbmitOrder.addEventListener("click", handleSumbmitOrder);
foodOrder();