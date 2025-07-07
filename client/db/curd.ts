import { Product } from "@/types";
import { db } from "../appwrite";
import { ID } from "../appwrite";
import { Query } from "appwrite";
import { auth } from "@clerk/nextjs/server";

const databaseId = '686945dd001dfa010b85'; //database id 
const collectionId = '686945ec003584fe7742'; // 'products'
//write products

export async function WriteProducts(Product:{Product:Product}){
   if(!Product) return false
   try {
    const Response = await db.createDocument(
        databaseId ,
        collectionId ,
        ID.unique(),
        Product
    )
    return Response
   } catch (error) {
      console.log('error',error)
   }
}

//get products
export async function GetProducts() {
    const {userId} = await auth()
    try {
        const Response = await db.listDocuments(
            databaseId ,
            collectionId ,
           [
           Query.equal("userId", userId!)
          ]
        )
        return Response.documents
    } catch (error) {
        
    }
}

export async function Delete(id:string) {
    const {userId} = await auth()
    try {
        const Response = await db.deleteDocument(
            databaseId ,
            collectionId ,
            id
        )
        return Response
    } catch (error) {
        
    }
}
export async function GetProductsStore(userId:string) {
    try {
        const Response = await db.listDocuments(
            databaseId ,
            collectionId ,
           [
           Query.equal("userId", userId!)
          ]
        )
        return Response.documents
    } catch (error) {
        
    }
}

export async function getById(id:string) {
    const {userId} = await auth()
    try {
        const Response = await db.getDocument(
            databaseId ,
            collectionId ,
            id
        )
        return Response
    } catch (error) {
        
    }
}