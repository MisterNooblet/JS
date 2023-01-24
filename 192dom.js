const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
];


const orderedList = document.querySelector('ol')
orderedList.style.listStyleType = 'none';

users.forEach(element => {
    let child = document.createElement('li')
    child.setAttribute('data-id',`${element.id}`)
    child.textContent = `${element.firstName} ${element.lastName}`
    orderedList.appendChild(child);
    console.log(element.id);
        
});