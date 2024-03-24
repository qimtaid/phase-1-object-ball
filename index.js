// Function to build the game object with team and player information
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 4,
            steals: 5,
            blocks: 1,
            slamDunks: 0,
          },
          // ... (other players for home team)
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 40,
            shoe: 18,
            points: 10,
            rebounds: 14,
            assists: 4,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 28,
            shoe: 16,
            points: 12,
            rebounds: 12,
            assists: 3,
            steals: 7,
            blocks: 15,
            slamDunks: 0,
          },
          // ... (other players for away team)
        },
      },
    };
  }
  
  // Function to get the number of points scored by a player
  function numPointsScored(playerName) {
    const game = gameObject();
    let points = -1; // Default value if player not found
  
    for (const team in game) {
      for (const player in game[team].players) {
        if (player === playerName) {
          points = game[team].players[player].points;
          break; // Exit inner loop after finding the player
        }
      }
    }
  
    return points;
  }
  
  // Function to get the shoe size of a player
  function shoeSize(playerName) {
    const game = gameObject();
    let shoeSize = -1; // Default value if player not found
  
    for (const team in game) {
      for (const player in game[team].players) {
        if (player === playerName) {
          shoeSize = game[team].players[player].shoe;
          break; // Exit inner loop after finding the player
        }
      }
    }
  
    return shoeSize;
  }
  
  // Function to get the team colors
  function teamColors(teamName) {
    const game = gameObject();
    let colors = []; // Default value if team not found
  
    if (game.home.teamName === teamName) {
      colors = game.home.colors;
    } else if (game.away.teamName === teamName) {
      colors = game.away.colors;
    }
  
    return colors;
  }
  
  // Function to get an array of team names
  function teamNames() {
    const game = gameObject();
    const teamNames = [];
  
    for (const team in game) {
      teamNames.push(game[team].teamName);
    }
  
    return teamNames;
  }
  
  // Function to get an array of player jersey numbers for a team
  function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
  
    if (game.home.teamName === teamName) {
      for (const player in game.home.players) {
        numbers.push(game.home.players[player].number);
      }
    } else if (game.away.teamName === teamName) {
      for (const player in game.away.players) {
        numbers.push(game.away.players[player].number);
      }
    }
  
    return numbers;
  }
  
  // Function to get all stats for a player
  function playerStats(playerName) {
    const game = gameObject();
    let player
  }

  