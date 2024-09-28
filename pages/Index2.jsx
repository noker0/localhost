import Image from "next/image"
import neru from '../public/neru.jpg'
import negr from '../public/negr.jpg'
import noru from '../public/noru.jpg'

const Index2 = () => {
  return (
   <>
    <div className="flex justify-center gap-[50px] m-[50px]">
        <Image src={neru} alt="Neru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={negr} alt="Negr" width={200} height={200} className="rounded-[25px]"/>
        <Image src={noru} alt="Noru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={neru} alt="Neru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={negr} alt="Negr" width={200} height={200} className="rounded-[25px]"/>
        <Image src={noru} alt="Noru" width={200} height={200} className="rounded-[25px]"/>
    </div>
    <div className="flex justify-center gap-[50px] m-[50px]">
        <Image src={neru} alt="Neru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={negr} alt="Negr" width={200} height={200} className="rounded-[25px]"/>
        <Image src={noru} alt="Noru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={neru} alt="Neru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={negr} alt="Negr" width={200} height={200} className="rounded-[25px]"/>
        <Image src={noru} alt="Noru" width={200} height={200} className="rounded-[25px]"/>
    </div>
    <div className="flex justify-center gap-[50px] m-[50px]">
        <Image src={neru} alt="Neru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={negr} alt="Negr" width={200} height={200} className="rounded-[25px]"/>
        <Image src={noru} alt="Noru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={neru} alt="Neru" width={200} height={200} className="rounded-[25px]"/>
        <Image src={negr} alt="Negr" width={200} height={200} className="rounded-[25px]"/>
        <Image src={noru} alt="Noru" width={200} height={200} className="rounded-[25px]"/>
    </div>
   </>
  )
}

export default Index2