

setInterval(function() {

    // define our colors
    var colors = ["#CCCCCC", "#333333", "#990099", "#28ec9d", "#ecb979", "#0b8baa", "#16cfdb", "#88bbdd", "#77aaee", "#6f11b7", "#86cef8", "#75b3ec", "#8ab9e3", "#9fc5e8", "#0d0d0d", "#2bbcbb", "#f3f3f3", "#ea213a", "#becc41", "#189bcc", "#dbd7d2", "#738678", "#f5f5f5", "#8b8989", "#cdc9c9", "#9fb6cd", "#708090", "#6c7b8b", "#1560bd", "#4a646c", "#528b8b", "#556b2f", "#8cbed6", "#4a5d23", "#008b8b", "#9fa91f", "#318ce7", "#9f8170", "#d64545", "#b3dde8", "#b9d4fb", "#d7e8cb", "#0000ff", "#4b0aff", "#4200ff", "#9400D3", "#00FF00", "#FFFF00", "#FF7F00", "#4B0082", "#FF0000"];
    // get a reference to <div id="mybox"></div>
    var myBox = document.getElementById("randomJoke");
    // get a random color from list
    var rand = Math.floor(Math.random() * colors.length);
    // set random color as borderColor
    myBox.style.borderColor = colors[rand];
  
  }, 200);
  
  document.getElementbyId('btn').addEventListener('click', viewJoke())
  
  function viewJoke() {
    let jokesArray = [
      `What do kids play when their mom is using the phone? Bored games.`,
      `What do you call an ant who fights crime? A vigilANTe!`,
      `Why are snails slow? Because they’re carrying a house on their back.  `,
      `What’s the smartest insect? A spelling bee!`,
      `What does a storm cloud wear under his raincoat? Thunderwear.`,
      `What is fast, loud and crunchy? A rocket chip.`,
      `How does the ocean say hi? It waves!`,
      `Why did the teddy bear say no to dessert? Because she was stuffed.`,
      `Name the kind of tree you can hold in your hand? A palm tree!`,
      `What has ears but cannot hear? A cornfield`,
    ]
  
    let randomArrayNum = Math.floor(Math.random() * jokesArray.length);
  
  
    let showJoke = jokesArray[randomArrayNum];
    return document.getElementById('randomJoke').innerHTML = showJoke;
  }
  // console.log(viewJoke());
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  