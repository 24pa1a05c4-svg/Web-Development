var users=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"john.png",
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"jane.png",
    }
]
var index=0;
function toggleUser(){
    if(index==0){
        index=1;
    }
    else
        index=0;
    document.getElementById("user-name").innerHTML=users[index].name;
    document.getElementById("gender").innerHTML=users[index].gender;
    document.getElementById("user-image").src=users[index].image;    
}
async function randomUser(){
    const response=await fetch("https://randomuser.me/api/");
    const data=await response.json();
    data
    document.getElementById("user-name").innerHTML=data.results[0].name.first + " " + data.results[0].name.last;
    document.getElementById("gender").innerHTML=data.results[0].gender;
    document.getElementById("user-image").src=data.results[0].picture.medium;
}
randomUser();