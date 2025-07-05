import { Product } from "@/types";
import { db } from "../appwrite";
import { ID } from "../appwrite";

const databaseId = '686945dd001dfa010b85'; //database id 
const collectionId = '686945ec003584fe7742'; // 'products'
//write products

export async function WriteProducts(Product:{Product:Product}){

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
    try {
        const Response = await db.listDocuments(
            databaseId ,
            collectionId ,

        )
        return Response.documents
    } catch (error) {
        
    }
}