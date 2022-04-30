var a = document.getElementsByClassName('topbtn');
var btn = a[0];

window.onscroll = function() { scrolltop() };

function scrolltop() {
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// hello my name is priyanshu garg and i am from chtikara university btech cse 2110992065