const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const main = document.getElementById('main');
const search = document.getElementById('search')
async function getUser(username){
    try {
        const {data} = await axios(APIURL + username)
    
    createUserCard(data)
    }
    catch(err){
        console.log(err)
    }  
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = search.value

  if(user) {
    getUser(user)

    search.value = ''
  }
})


function createUserCard(user){
  const cardHtml = `
  <div class="card">
        <div>
             <img src="${user.avatar_url}" alt="" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p> ${user.bio}</p>
            <ul>
                <li style=padding:5px>${user.followers} <strong> Followers  </strong>
                </li>
                <li style=padding:5px>${user.following} <strong> Following  </strong>
                </li>
                <li style=padding:5px>${user.public_repos} <strong> Repos  </strong>
                </li>
            </ul>
            
        </div>
       </div>`;
  main.innerHTML = cardHtml
}






