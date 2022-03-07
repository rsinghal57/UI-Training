let parent=[{
    "id": 1,
    "parent_id": "null"
}, {
    "id": 2,
    "parent_id": "null"
}, {
    "id": 3,
    "parent_id": 1
}];


function isPresent(obj,id)
{
   for(let i=0;i<parent.length;i++)
   {
       if(parent[i].parent_id===id)
       {
           return parent[i];
       }
   }
   return null;
}

parent.map((i)=>{
    const child=isPresent(i,i.id);
     if(child===null)
     {
        return i["children"]=[];
     }
     else
     {
        return i["children"]=[child];
     }
   });

console.log(parent);