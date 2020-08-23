setInterval(()=>{
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;


    document.getElementsByClassName("hour")[0].style.transform=`rotate(${hrotation}deg)`;
    document.getElementsByClassName("min")[0].style.transform=`rotate(${mrotation}deg)`;
    document.getElementsByClassName("sec")[0].style.transform=`rotate(${srotation}deg)`;
},1000);