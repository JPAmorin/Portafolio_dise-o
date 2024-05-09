export const getDogPhoto = async () => {
    const url = "https://random.dog/woof.json";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        return payload;
      } else {
        console.error("An error happened");
        return [];
      }
    } catch (error) {
      console.error(error);
    }
  };