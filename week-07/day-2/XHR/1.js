let request = new XMLHttpRequest()
 request.open('GET','https://https://api.giphy.com/v1/gifs/search?api_key=sj5CXPXYjE3PV3imvFO2r0JReLKN04S6&q= &limit=16&offset=0&rating=PG-13&lang=en.giphy.com/docs/sdk',true)

request.onload = function(){
  let response = JSON.parse(request.responseText)
  console.log(response)
}
