
// let tableBody=document.querySelector("#postsTable tbody");
// fetch ('https://jsonplaceholder.typicode.com/posts').then((response)=>
//     response.json())
// .then((post)=>{
//     post.forEach((post )=>{
//         let row =document.createElement("tr");
//         row.innerHTML=`
//         <td>${post.id}</td>
//         <td>${post.title}</td>
//         <td>${post.body}</td>

//         `;

//      tableBody.appendChild(row);

//     });
// });


let row=document.querySelector(".row");
const fetchData =async () =>{
    try{
        const response=await fetch ('https://jsonplaceholder.typicode.com/photos')
        const posts = await response.json();
        
        
        posts.slice(0,16).forEach((photo)=>
        {
            // let row =document.createElement("tr");
         row.innerHTML +=`
         
         
            <div class="col-3">
            <div class="card">

           
            <h2>${photo.id}</h2>
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="Custom Image" class="img-fluid" />
            
            <a href="${photo.url}" 
        </div>

         `;
        //  row.appendChild(row);
        });

    }
    catch(err){
        console.log(err);
    }
};

fetchData();