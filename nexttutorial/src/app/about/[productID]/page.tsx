import { Metadata } from "next"
// export const metadata={
//     title:"Ujuices"
// }

type Props={
    params: {
        productID: string
    }
}

export const generateMetadata=async ({params}:Props): Promise<Metadata> => {

    let title=await new Promise<string>(resolve=>{
        setTimeout(() => {
            resolve (`Iphone ${params.productID}`)
        },1000)

    }
       
    )
     
    return {
        title:title,
    }
}

export default function ProductDetail(
    {
        params
    }:Props
){
   return <h2>Details about product: {params.productID}</h2> 
}