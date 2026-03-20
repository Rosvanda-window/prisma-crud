import { prisma } from "@/lib/prisma";
import { updateTag } from "next/cache";
import { NextResponse } from "next/server";


export async function GET(_,{params}){
    const { id } = await params;
    const user = await prisma.users.findUnique({
        where:{
            id: +id,
        },
    })
    return NextResponse.json({
        status:200,
        message:`Get user ID: ${id} successfully`,
        payLoad:user,
    })
}

export async function DELETE(_,{params}){
    const { id } = await params;
    await prisma.users.delete({
        where:{
            id: +id,
        },
    })
    return NextResponse.json({
        status:200,
        message:`Delete user ID ${id} successfully!` ,
    })
}

export async function PUT(request, {params}){
    const {name, email} = await request.json();
    const {id} = await params;
    const userUpdate = await prisma.users.update({
        data:{
            name,email,
        },
        where:{
            id: +id,
        },
    })
    return NextResponse.json({
        status:201,
        message:`update user ID ${id} successfully!`, 
        payLoad:userUpdate,
    })

}