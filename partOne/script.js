var counter =0;
function hitLike(){
    console.log(counter);
    ++counter;
    document.getElementById("num-likes").innerHTML= counter+ " Like(s)"
};