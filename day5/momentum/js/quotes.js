const quotes = [
	{
		quote: "Just do it",
		author: "nike"
	},
	{
		quote: "Impossible is nothing",
		author: "adidas"
	},
	{
		quote: "Be formless, shapeless, like water. Water can flow or it can crash. Be water, my friend.",
		author: "Bruce Lee"
	},
	{
		quote: "You will face many defeats in life, but never let yourself be defeated.",
		author: "Maya Angelou"
	},
	{
		quote: "The graetest glory in living lies not in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela"
	},
	{
		quote: "Only I can change me life, no one can do it for me.",
		author: "Carol Burnett"
	},
	{
		quote: "The two most important day in your life are the day you are born and the day you find out why.",
		author: "Mark Twain"
	},
	{
		quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
		author: "Jim Rohn"
	},
	{
		quote: "Success is walking from failure to failure with no loss of enthusiasm.",
		author: "Winston Churchill"
	},
	{
		quote: "Don't be afraid to give up the good to go for the great.",
		author: "John D. Rockefeller"
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[10 - 1]);

console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;