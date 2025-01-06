export const formatDate = (date: string | Date | null | undefined): string => {
    if (!date) {
      return 'No especificada';
    }
  
    const parsedDate = new Date(date);
    return parsedDate.toISOString().split('T')[0];
  };
  