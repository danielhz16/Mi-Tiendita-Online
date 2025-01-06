export const getPhotoUrl = (photo: any) => {
    if (photo && photo.data) {
      const blob = new Blob([new Uint8Array(photo.data)], { type: 'image/jpeg' });
      return URL.createObjectURL(blob);
    }
    return null;
  };