function createcard(title,cname,views,monthsold,duration,link)
{
    let viewstr
    if(views<100000)
    {
        viewstr=views/1000+"K"
    }
    else if(views>1000000)
    {
        viewstr=views/1000000+"M";
    }
    else{
        viewstr=views/1000+"K";
    }
    let html=`<div class="card">
       
    <div class="image">
        <img src=${link} alt=""></img>
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
           <p>${cname} . ${viewstr} views . ${monthsold}months ago</p> 
    </div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;

}
createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
function createcard(title,cname,views,monthsold,duration,link)
{
    let viewstr
    if(views<100000)
    {
        viewstr=views/1000+"K"
    }
    else if(views>1000000)
    {
        viewstr=views/1000000+"M";
    }
    else{
        viewstr=views/1000+"K";
    }
    let html=`<div class="card">
       
    <div class="image">
        <img src=${link} alt=""></img>
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
           <p>${cname} . ${viewstr} views . ${monthsold}months ago</p> 
    </div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;

}
createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
        createcard("JavaScript Basics", "CodeWithHarry", 1200000, 2, "20:15", "https://i.ytimg.com/vi/1ZoD4JH4Fwc/hqdefault.jpg");
        createcard("CSS Flexbox Guide", "CodeWithHarry", 85000, 5, "18:45", "https://i.ytimg.com/vi/OHbHboDfa-E/hqdefault.jpg");
