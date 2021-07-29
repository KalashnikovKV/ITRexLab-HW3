
const fetch = require('node-fetch')

class Users {
  constructor(number) {
    this.number = number
  }
  
  async getUsers() {
    const response = await fetch(
      `https://randomuser.me/api/?results=${this.number}`
      );
    const data = await response.json()
    
    data.results.forEach((element) => {
      console.log(`
      Person: ${element.name.title} ${element.name.first} ${element.name.last}
      Gender: ${element.gender}
      Timezone: ${element.location.timezone.offset} ${element.location.timezone.description}
      Cell: ${element.cell}  
      Phone:  ${element.phone}
      ID: ${element.id.name} ${element.id.value}
      Email:  ${element.email}
      Nationality: ${element.nat}`)
    })
  }
}

const users = new Users(2)
users.getUsers()