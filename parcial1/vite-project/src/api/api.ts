export const getApiGames = async () => {
    const url = "http://localhost:3000/api/games";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        console.log("Fetch payload successful")
        return payload;
      } else {
        console.error("An error happened");
        return [];
      }
    } catch (error) {
      console.error(error);
    }
  };

  export const getGameById = async (id) => {
    const url = "http://localhost:3000/api/games";
    try {
      const response = await fetch(url);
      if (response.ok) {
        let game
        const payload = await response.json();
        payload.forEach(element => {
          if (element.id === id){
            game = element
          }
        });
        return game;
      } else {
        console.error("An error happened");
        return [];
      }
    } catch (error) {
      console.error(error);
    }
  }
  ;export const deleteGame = async (gameId) => {
    const url = `http://localhost:3000/api/games/${gameId}`;
    
    try {
      const response = await fetch(url, {
        method: "DELETE"
      });
  
      if (response.ok) {
        console.log(`Game with ID ${gameId} deleted successfully.`);
        return true;
      } else {
        console.error("Failed to delete game.");
        return false;
      }
    } catch (error) {
      console.error("Error deleting game:", error);
      return false;
    }
  };
  export const createGame = async (newGame) => {
    const url = "http://localhost:3000/api/games";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
      });
  
      if (response.ok) {
        const createdGame = await response.json();
        console.log("Game created:", createdGame);
        return createdGame;
      } else {
        console.error("Failed to create game:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error creating game:", error);
      return null;
    }
  }