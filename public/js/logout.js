const logout = async () => {
    const request = await fetch('/api/user/logout', {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
    })
    
    if(request.ok){
      document.location.replace('/')
    } else{
      console.log('Logout failed')
    }
  }

  

  
    document.querySelector('#sign-out').addEventListener('click', logout)
   