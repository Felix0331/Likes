var postLikes = [0,0,0];

function hitLike(id){
    postLikes[id]++;
    document.getElementById(id).innerHTML= postLikes[id]+ " Like(s)"
};