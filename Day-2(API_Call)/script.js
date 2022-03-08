async function fetchDetails(){
    try {
        let response=await fetch('https://reqres.in/api/users?page=2');
        let data=await response.json();
        data=data.data;
        console.log(data);
        console.log("Inside function");
        display(data);
    } catch (error) {
        console.log("Error occured",error);
    }
   
}
function display(arr)
{
    var table=document.getElementById("mytable");
    for(let i=0;i<arr.length;i++)
    {
        let row=`<tr>
        <th scope="row">${arr[i].id}</th>
        <td>${arr[i].email}</td>
        <td>${arr[i].first_name}</td>
        <td>${arr[i].last_name}</td>
        <td><img src="${arr[i].avatar}" alt=""></td>
        </tr>`
        table.innerHTML+=row;
    }
}


fetchDetails();
