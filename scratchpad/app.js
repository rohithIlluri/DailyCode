const API_KEY = ""
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector("#output")
const inputElement = document.querySelector("#input")
const historyElement = document.querySelector(".history")
async function fetchData(){
   const response = await fetch("https://api.openai.com/v1/completions" , {
     method: "POST",
     headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"

     },
     body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
            role: "user",
            content: "Hello!"
        },]
     })
     })

     const data = await response.json()
     console.log(data) 
}

async function getMessage(){
    console.log("clicked!")
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: {
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:"Hello!"}]
            max_tokens: 100
        }
    }
    try {

        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            historyElement.append(pElement)
        }
    } catch (error){
        console.log(error )

    }
}

fetchData()