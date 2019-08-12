if(localStorage.getItem('likes') == null){
      localStorage.setItem('likes',0);

}
if(localStorage.getItem('dislikes') == null){
    localStorage.setItem('dislikes',0);
}
var currentLikes=localStorage.getItem('likes');
var currentDislikes=localStorage.getItem('dislikes');
document.getElementById('likes').innerHTML=currentLikes;
document.getElementById('dislikes').innerHTML=currentDislikes;
function like() {
    currentLikes++;
    localStorage.setItem('likes',currentLikes);
    document.getElementById('likes').innerHTML=currentLikes;
}
function dislike() {
    currentDislikes++;
    localStorage.setItem('dislikes',currentDislikes);
    document.getElementById('dislikes').innerHTML=currentDislikes;
}