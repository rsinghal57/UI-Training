var loginForm=document.getElementById("loginForm");
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("pass").value;

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title: username,
            body: password,
            id:1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
      }).then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error)=>{
          console.log("Something went wrong",error);
      });

});





