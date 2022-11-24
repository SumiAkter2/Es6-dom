console.log('alhamdulillah');
 
document.getElementById('add-border').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    container.style.border = "3px solid red";
    container.style.padding = "10px"
})

function addBackground(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
}

// document.getElementById('add-friend').addEventListener('click', function(){
//     const container = document.getElementById('friend-container');
//     const friendDiv =  document.createElement('div');
//     friendDiv.classList.add('friend');
//     friendDiv.innerHTML=`
//     <h3 class="friend-name">New friend</h3>
//     <p>Impedit, laborum!</p>`
//     container.appendChild(friendDiv);
// })
document.getElementById('add-friend').addEventListener('click', function(){
    const friendDiv = document.getElementById('friend-container');
    const friendAdd = document.createElement('div');
    friendAdd.classList.add('friend');
    friendAdd.innerHTML=
    `
    <h3 class="friend-name">friend-3</h3>
    <p>Impedit, laborum!</p>
    
    `
    friendDiv.appendChild(friendAdd);
})