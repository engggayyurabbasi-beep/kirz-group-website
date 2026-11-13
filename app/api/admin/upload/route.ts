import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
export const runtime = "nodejs";
export async function POST(request:NextRequest){
 if(!isAdminRequest(request))return NextResponse.json({error:"Unauthorized"},{status:401});
 try{
  const data=await request.formData();const file=data.get("file");
  if(!(file instanceof File))return NextResponse.json({error:"Image file is required."},{status:400});
  const allowed:Record<string,string>={"image/png":"png","image/jpeg":"jpg","image/webp":"webp"};
  const ext=allowed[file.type];if(!ext)return NextResponse.json({error:"केवल PNG, JPG या WEBP इमेज अपलोड करें।"},{status:400});
  if(file.size>5*1024*1024)return NextResponse.json({error:"Image size 5 MB से कम होना चाहिए।"},{status:400});
  const dir=path.join(process.cwd(),"public","uploads");await mkdir(dir,{recursive:true});
  const name=`${Date.now()}-${randomUUID()}.${ext}`;await writeFile(path.join(dir,name),Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({url:`/uploads/${name}`});
 }catch{return NextResponse.json({error:"Upload failed."},{status:400});}
}
