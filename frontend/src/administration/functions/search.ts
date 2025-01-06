export const search = (value: string, data: any[]) => {
    return data.filter((item: any) => {
      const searchValue = value.toLowerCase();
      return Object.values(item).some((val) => 
        String(val).toLowerCase().includes(searchValue)
      );
    });
  };
  