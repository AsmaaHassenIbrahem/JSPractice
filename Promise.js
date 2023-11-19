
// Promises
// Create your function that takes url of required service to be consumed and return a promise.
// Make request using your function to consume the service of the following link
// “https://jsonplaceholder.typicode.com/users”.

const url = "https://jsonplaceholder.typicode.com/users"

async function fetchData(url) {
    let response = await fetch(url)
    let json = await response.json()
    return json
  }
  
  async function test(url){
    try{
        let json = await fetchData(url)
        console.log(json)
    }catch(err){
        console.log(err)
    }

  }

  test(url)