var resetForm=document.getElementById("resetForm");
resetForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    var resetusername=document.getElementById("resetusername").value;
    (async () => {
        const response=await helper(resetusername);
        console.log(response);
      })();
});

async function helper(resetusername)
{
      try {
            let response=await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
        body:JSON.stringify({
            title: resetusername,
            body: "temp",
            id:1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
      });
      response=response.json();
    //   console.log(response);
      return response;
      
        } catch (error) {
            console.log("Something went wrong",error);
        }   
}

