export default function ProductDetail(
    {
        params
    }:{
        params: {
            parameters: string[]
        }
    }
){
   let {parameters}=params;
   if(parameters?.length>0)
   {
    return <h2>{`Orders page nesting level is ${parameters?.length} at ${parameters[parameters?.length-1]}`}</h2>
   }
   return <h2>Orders Main Page</h2>
}