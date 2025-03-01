const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function mouseMoveCircle(xscale,yscale){
    window.addEventListener('mousemove',(dets)=>{
        document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
        document.querySelector('#minicircle').style.display = 'block'
    })
    document.body.addEventListener('mouseleave',()=>{
        document.querySelector('#minicircle').style.display = 'none'
    })
    document.body.addEventListener('mouseenter',()=>{
        document.querySelector('#minicircle').style.display = 'block'
    })
    

}

mouseMoveCircle()



function firstPageAnim(){
    var tl = gsap.timeline();

   tl.from('#nav',{
        y:10,
        opacity:0,
        duration:1,
        ease:Expo
    })
    .from('.delay',{
        y:50,
        opacity:0,
        duration:1.5,
        stagger:.1,
        ease:Expo
    })
    .from('#footer-text h4',{
        y:-40,
        opacity:0,
        duration:.8,
        ease:Power1
    })
    .from('.herofooter',{
        y:-5,
        opacity:0,
        duration:1.2,
        ease: Expo
    })
    .from('#circle i',{
        y:-10,
        opacity:0,
        ease:Expo
    })
    

}

firstPageAnim()


let timout;

function mouseKoChapta(){
    
    let xscale = 1;
    let yscale = 1;
    
    let xprev = 0;
    let yprev = 0;
    window.addEventListener('mousemove',(dets)=>{
        clearTimeout(timout)
        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev; 
        xprev = dets.clientX;
        yprev = dets.clientY;
        
        xscale = gsap.utils.clamp(0.8,1.2,xdiff)
        yscale = gsap.utils.clamp(0.8,1.2,ydiff)

        mouseMoveCircle(xscale,yscale)

        timout = setTimeout(() => {
            document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
        }, 100);
    })
}
mouseKoChapta()

function menu(){
    let menu = document.querySelector('#nav h4')
    menu.addEventListener('click',()=>{
        document.querySelector('#nav .menu').style.display = 'block'
        menu.style.display= 'none'
        
        gsap.from('.menu',{
            y:-20,
            opacity:0,
            duration:1
        })
    })
}

menu()

function downArrow(){
    document.querySelector('.iconset')
    .addEventListener('click')
}

function imageAnim(){
    document.querySelectorAll("#elem").forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;
      
        elem.addEventListener("mouseleave", function (dets) {
          gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
          });
        });
      
        elem.addEventListener("mousemove", function (dets) {
          var diff = dets.clientY - elem.getBoundingClientRect().top;
          diffrot = dets.clientX - rotate;
          rotate = dets.clientX;
          gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
          });
        });
      });


}

imageAnim()