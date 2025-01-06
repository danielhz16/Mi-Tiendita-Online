export const stockStatus = (stock: number) => {
    if(stock > 30) {
        return {
            severity: 'success',
            message: 'En stock',
        };
    } else if (stock > 1) {
        return  {
            severity: 'warning',
            message: 'Poco stock',
        };
    }
        return {
            severity: 'danger',
            message: 'Sin stock',
        }    
};