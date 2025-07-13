

addEventListener("DOMContentLoaded",()=>{


    gsap.registerPlugin(ScrollTrigger);

    
    ScrollTrigger.matchMedia({
        "(min-width:1501px)": function(){
            const tl=gsap.timeline({
                scrollTrigger:{
                    trigger:".video-cnt",
                    start:"top top",
                    end:"bottom 40%",
                    scrub:1,
                  
                }
               })

               
               tl.to(".video-cnt",{padding:"0 15.5rem"})
            
        }
    })


    document.querySelectorAll(".mobile-wrapper").forEach(wrapper=>{
        const items=wrapper.querySelectorAll(".items");

        gsap.from(items,{
            y:50,
            opacity:0,
            duration:0.5,
            ease:"power2.out",
            stagger:0.2,
            scrollTrigger:{
                trigger:wrapper,
       
                toggleActions:"play none none none",
                start:"top 70%"
            }
        })
    })

    const heading= document.querySelectorAll(".title")
      console.log(heading)

      heading.forEach(head=>{
        gsap.from(head,{
          y:0,
          opacity:0,
          duration:1,
          delay:0.2,
          scrollTrigger:{
            trigger:head,
            start:"top 80%",
            toggleActions:"play none none none"
          
          }
        })
      })


     ScrollTrigger.create({
        start:0,
        end:"max",
        onUpdate:(event)=>{
                if(event.direction==1 && event.scroll()>100){
                  gsap.to("#navbar",{
                    y:"-100%",
                    opacity:0,
                    duration:0.3
                  })
                }
                else
                {
                  gsap.to("#navbar",{
                    y:"0%",
                    opacity:1,
                    duration:0.3,
                
                  })
                }
        }
      })

      gsap.to("nav",{backgroundColor:"white",duration:0.2 ,
      scrollTrigger:{
        trigger:"#bg-video",
        start:"bottom top",
        toggleActions:"play none reverse none",
     
      }
  })

    


})
