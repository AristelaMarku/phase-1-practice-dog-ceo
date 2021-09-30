//console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let breeds=[]

function newDogContainer(imageUrl){
    const img=document.createElement('img')
    img.src=imageUrl
    img.style.height = '300px';
    img.style.width = '300px';
    //console.log(img)
    dogContainer.append(img)
}

    const dogContainer=document.querySelector("#dog-image-container")
    fetch(imgUrl)
    .then(response=>response.json())
    .then(dogImg=>{
        //console.log(dogImg)
        dogImg.message.forEach(newDogContainer)
            
    })


    function newListofLi(breeds){
        return breeds.forEach(everybreed=>{
            const ul=document.querySelector('#dog-breeds') 
            const li=document.createElement('li')
             li.innerText=everybreed
          // console.log(li)
             ul.append(li)
             li.addEventListener('click',function(e){
                e.target.style.color='red'
                      
                   })
        })

    }

    fetch(breedUrl)
    .then(res=>res.json())
    .then(data=>{
        //console.log(data)
        breeds=Object.keys(data.message)
        //console.log(breeds)
        newListofLi(breeds)


    })

    
    
    function handeChange(e){
       const letter=e.target.value
        //console.log(breeds)
        
       const filteredBreeds= breeds.filter(breed=>breed.startsWith(letter))
       //console.log(filteredBreeds)
       const ul=document.querySelector('#dog-breeds') 
       filteredBreeds.forEach(everybreed=>{
        const li=document.createElement('li')
         li.innerText=everybreed
         ul.appendChild(li)
       })
      
    }
    const dropdown=document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change',handeChange)



    })
