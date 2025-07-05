import { Client, Databases } from 'appwrite';

export const client = new Client();

client
.setEndpoint('https://fra.cloud.appwrite.io/v1')
.setProject('686940ae00001842f66c'); 

export const db = new Databases(client);
export { ID } from 'appwrite';
