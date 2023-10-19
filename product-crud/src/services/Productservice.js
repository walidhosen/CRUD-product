import { apiurl } from "@/environment/environment";

async function getEmployee() {
    const response = await fetch(`${apiurl}/Product`);
   
    try {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
async function addEmployee(data) {
    console.log(data);
    try {
        const response = await fetch(`${apiurl}/Product`, {
            method: 'POST',
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: `);
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding Employee:', error);
        throw error;
    }
}

async function getSingleProduct(id) {
    try {
        const response = await fetch(`${apiurl}/Product/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function updateProduct(id, data) {

    try {
        const response = await fetch(`${apiurl}/Product/${id}`, {
            method: 'PUT',
            body: data,
        });

        if (!response.ok) {
            const responseBody = await response.text();
            
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const response = await fetch(`${apiurl}/Product?id=${id}`, { 
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: `);
        }

        return true; 
    } catch (error) {
        console.error('Error deleting Department:', error);
        throw error;
    }
}



export{
    getEmployee,
    addEmployee,
    getSingleProduct,
    updateProduct,
    deleteProduct

}