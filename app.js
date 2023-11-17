const SettingMenu =  document.querySelector('.settings');
const Avatar = document.querySelector('.avatar');


Avatar.addEventListener('click',()=>{
    SettingMenu.classList.toggle("activeAvatar")
})
