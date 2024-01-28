let btn=document.querySelector("#btn");
let popup_container=document.querySelector(".popup-container");

let profile_container=document.querySelector(".profile-container");
let profile=document.querySelector(".profile");

function toggle(){
    if(popup_container.style.display==="none"){
        popup_container.style.display="flex";
        profile_container.classList.add("active");
        profile.classList.add("profileActive");
    }else{
        popup_container.style.display="none";
        profile_container.classList.remove("active");
        profile.classList.remove("profileActive");
    }


}
btn.addEventListener("click",toggle)