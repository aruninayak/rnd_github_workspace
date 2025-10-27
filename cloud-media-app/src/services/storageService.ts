import { Storage } from 'aws-amplify'; // Assuming AWS Amplify is used for storage

export const uploadMedia = async (file: File, folder: string) => {
    try {
        const result = await Storage.put(`${folder}/${file.name}`, file, {
            contentType: file.type,
        });
        return result.key; // Return the key of the uploaded file
    } catch (error) {
        console.error("Error uploading media:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
};

export const listMedia = async (folder: string) => {
    try {
        const result = await Storage.list(folder);
        return result; // Return the list of media files
    } catch (error) {
        console.error("Error listing media:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
};

export const deleteMedia = async (key: string) => {
    try {
        await Storage.remove(key);
    } catch (error) {
        console.error("Error deleting media:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
};