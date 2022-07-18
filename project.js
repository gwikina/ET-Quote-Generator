btn = document.querySelector("#new-quote")
quote = document.querySelector(".quote")
person = document.querySelector(".person")

const quotes = [
    {
        quote: `"If you can look up, you can get up"`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"I use pain to push me to greatness"`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"The only way to get out of mediocrity is to keep shooting for excellence."`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"Desire and imagination have the potential to position a person for greatness"`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"Don't make a habit out of choosing what feels good over what's actually good for you"`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"Done is better than perfect if perfect ain't done."`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"You can get through this. you are bigger than your pain, don't give up don't give in"`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"I do not take constructive criticism from people who have never constructed anything"`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"Success begins when we take ownership and actively take responsibility for our part in the shortcomings of our life."`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"Be phenomenal or be forgotten."`, 
        person: 'Eric Thomas'
    }, 
    {
        quote: `"When you want to succeed as bad as you want to breathe, then you'll be successful"`, 
        person: 'Eric Thomas'
    }
]
btn.addEventListener('click', function (){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

})