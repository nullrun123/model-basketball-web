import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { contain } from 'three/src/extras/TextureUtils.js';
gsap.registerPlugin(ScrollTrigger,SplitText)
function TextAnima({children,
    animateOnscroll=true  ,  // เล่นแอนิเมชันเมื่อเลื่อนหน้าจอ (default: true)
    delay=0   ,              // ความล่าช้าก่อนเริ่มแอนิเมชัน (วินาที)
    blockColor="#000" ,        // สีของแท่งปิดเผย (default: ดำ)
    stagger=0.15 ,         // ความเว้นระหว่างแต่ละบรรทัด (วินาที)
    duration=0.75  ,        // ความยาวของแอนิเมชัน (วินาที)
}) {
    const containerRef = useRef(null);        // อ้างอิงถึง container
        const splitRefs = useRef([]);             // เก็บ split text objects
    const lines = useRef([]);                 // เก็บแต่ละบรรทัด
    const blocks = useRef([]);                // เก็บแท่งปิดเผย    
    
    useGSAP(()=>{

        if(!containerRef.current) return;

        splitRefs.current = [];
        lines.current = [];
        blocks.current = [];

        let element = [];

        // ถ้า div มี attribute data-copy-wrapper → จะ animate ลูกทุกตัว แยกกัน
        if(containerRef.current.hasAttribute("data-copy-wrapper")){
            element = Array.from(containerRef.current.children);

        }else{
            element = [containerRef.current];
        }

        //  ตัดข้อความเป็นบรรทัด
        element.forEach((element)=>{
            const split = SplitText.create(element,{
                type: "lines",              // แยกเป็นบรรทัด (ไม่ใช่คำหรือตัวอักษร)
                linesClass: "block-line++",
                lineThreshold:0.1,
            })

            splitRefs.current.push(split);

            split.lines.forEach((line)=>{
                //  สร้าง Wrapper + Block ให้แต่ละบรรทัด
                // Wrapper ครอบบรรทัด
                const wrapper = document.createElement("div");
                wrapper.className = "block-line-wrapper";
                line.parentNode?.insertBefore(wrapper,line);
                wrapper.appendChild(line);


                // แท่งปิดเผย
                const block = document.createElement("div");
                block.className = "block-revealer"; // position: absolute, เต็มพื้นที่

                block.style.backgroundColor = blockColor;
                wrapper.appendChild(block);


                lines.current.push(line);
                blocks.current.push(block);
            })

        });

        gsap.set(lines.current, { opacity: 0 })        // ซ่อนข้อความ
        gsap.set(blocks.current, {
            scaleX: 0,
            transformOrigin: "left center"              // scale จากซ้าย
        })

        const createBlockRevealAnimation = (block,line,index)=>{
            const tl= gsap.timeline({delay:delay+index *stagger});

             // แท่งขยายปิด →
            tl.to(block,{
                scaleX:1,
                duration:duration,
                ease:"power4.inOut"
            })
             // เผยข้อความ
            tl.set(line,{
                opacity:1,
            })
            // เปลี่ยนจุด pivot
            tl.set(block,{
                transformOrigin:"right center"
            })

            // แท่งหด ←
            tl.to(block,{
                scaleX:0,
                duration,
                ease:"power4.inOut"
            })

            // [แท่งขยายจากซ้าย →] [ข้อความโผล่] [แท่งหดไปขวา →] [เหลือแต่ข้อความ]

            return tl;
            
            
        }

        
        // เงื่อนไข ScrollTrigger
        if(animateOnscroll){
                blocks.current.forEach((block,index)=>{
                    const tl= createBlockRevealAnimation(
                        block,
                        lines.current[index],
                        index
                    )
                    tl.pause();


                   ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top 90%",   // เริ่มเมื่อ top ของ element อยู่ที่ 90% ของหน้าจอ
                    once: true,          // เล่นแค่ครั้งเดียว
                    onEnter: () => tl.play()
                    });


                })
        }else{
            blocks.current.forEach((block,index)=>{
                createBlockRevealAnimation(block,lines.current[index],index);
            })
        }


        return () => {
    splitRefs.current.forEach(split => split?.revert()); // คืน DOM กลับ

    const wrappers = containerRef.current?.querySelectorAll('.block-line-wrapper');
    wrappers?.forEach(wrapper => {
        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
        wrapper.remove(); // ลบ wrapper ที่สร้างเพิ่ม
    })
}
    },{scope:containerRef,dependencies:[ animateOnscroll,delay,blockColor,stagger,duration]})

    return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  )
}

export default TextAnima
