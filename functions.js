

async function onloadIndex(){
  
    try {
        let response= await fetch("https://jsonplaceholder.typicode.com/users",
        );

        if(response.ok){
            let parsedJson = await response.json()
           
            console.log(parsedJson)
           
         
          
               
                let selectiondropdown=document.querySelectorAll('.dropdown-item')
                for(let i=0;i<selectiondropdown.length;i++){       
                    selectiondropdown[i].addEventListener('click' , function(){
                        let usersul_ref=document.querySelector('.userslist')
                        usersul_ref.innerHTML=''

                        if(selectiondropdown[i].innerText.toLowerCase()==='name'){
                            
                        parsedJson.forEach(user=>{
                        buildlistItem(user,user.name)
                        })
                            
                        }
                        else if(selectiondropdown[i].innerText.toLowerCase()==='email'){
                            parsedJson.forEach(user=>{
                                buildlistItem(user,user.email)
                            })
                            
                        }
                        else if(selectiondropdown[i].innerText.toLowerCase()==='username'){
                            parsedJson.forEach(user=>{
                                buildlistItem(user,user.username)
                            })
                            
                        }
                    })
                   
                    }
                
            
            
            }

        
    } catch (error) {
        console.log(error)
        
    }
}
 function buildlistItem(user,selection){

    let usersul_ref=document.querySelector('.userslist')
    let newli=document.createElement('li') 
    newli.className+= ' list-group-item list-group-item-primary'
    newli.innerHTML=selection+'<br>'+stringifyAddress(user.address)
    usersul_ref.appendChild(newli)

    let liarray_ref=document.querySelectorAll('li')
  
    for(let i=0;i<liarray_ref.length;i++){
        liarray_ref[i].addEventListener('click',function(e){
            window.location.href=`details.html?userinfo=${e.currentTarget.innerText}`
 
            
        })
    }

    
  


    


}
function stringifyAddress(useraddress){
    let addressArray=Object.values(useraddress)
    let stringaddresswithchars= JSON. stringify(addressArray)
    let stringaddress=stringaddresswithchars.replace(/['['""{}:'[']/g,'').replace(']','')
    return stringaddress
}

function onloadDetails(){
    
    let urlparam=new URLSearchParams(window.location.search)
    user=urlparam.get('userinfo')
    console.log(user)
    
}