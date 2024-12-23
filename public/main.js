const card = document.querySelector(".card__inner");
counter=0

player_count=0
player_number=0
usernames=[]
roles=[]
card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
  tekst_karta=document.getElementById('tekst_karta')
  role=document.getElementById('tekst_role')
  roles.push("otkrivanje")
  if(counter%2==0)
  {
    my_name=usernames[player_count]
    my_role=roles[player_count]
    is_mordred_here=0
    console.log(my_name)
    console.log(my_role)
   
    if(my_role==="seljak")
    {
      tekst_karta.innerHTML="ti si ljakse, ti si beskoristan"
      role.innerHTML="LJakse"
    }
    if(my_role==="oberon")
    {
      role.innerHTML="Oberon"
      tekst_karta.innerHTML="ti si oberon, srecno"
    }
    if(my_role==="persival")
    {
      role.innerHTML="Persival"
      tekst="ti si persival, pomozi pravom merlinu, moguci merlini su : "
      for(var i=0;i<=10;i++)
      {
          if(roles[i]=='merlin' || roles[i]=='morgana')
          {
            tekst+=usernames[i]+', '
          }
        }
        tekst=tekst.slice(0, -2);
        tekst_karta.innerHTML=tekst
    }
    if(my_role==="merlin")
    {
      role.innerHTML="Merlin"

      tekst="Ti si Merlin, losi su : "
      for(var i=0;i<=10;i++)
      {
          if(roles[i]=='assasin' || roles[i]=='morgana' || roles[i]=='oberon')
          {
            tekst+=usernames[i]+', '
          }
      }
      tekst=tekst.slice(0, -2);
      
      tekst_karta.innerHTML=tekst
    }
    if(my_role==="morgana")
    {
      role.innerHTML="Morgana"

      tekst="Ti si Morgana (pravi se da si merlin), losi su : "
      for(var i=0;i<=10;i++)
      {
          if(roles[i]=='assasin' || roles[i]=='los' || roles[i]=='mordred')
          {
              tekst+=usernames[i]+', '
          }
      }
      tekst=tekst.slice(0, -2);
      
      tekst_karta.innerHTML=tekst
    }
     
    
    

    if(my_role==="assasin")
    {
      role.innerHTML="Assasin"

      tekst="Ti si Assasin ( ubi merlina ), losi su : "
      for(var i=0;i<=10;i++)
      {
          if(roles[i]=='morgana' || roles[i]=='los' || roles[i]=='mordred')
          {
            tekst+=usernames[i]+', '
          }
        }
        tekst=tekst.slice(0, -2);
        tekst_karta.innerHTML=tekst
   
      
    }
   if(my_role==="mordred")
   {
    role.innerHTML="Mordred"

    tekst="Ti si MORDRED :D, losi su : "
    for(var i=0;i<=10;i++)
    {
      if(roles[i]=='morgana' || roles[i]=='los' || roles[i]=='assasin')
      {
        tekst+=usernames[i]+', '
      }
    }
    tekst=tekst.slice(0, -2);
    tekst_karta.innerHTML=tekst
   }
   if(my_role==="los")
   {
    role.innerHTML="Los Generik"

    tekst="Ti si los, losi su : "
    for(var i=0;i<=10;i++)
    {
      if(roles[i]=='morgana' || roles[i]=='mordred' || roles[i]=='assasin')
      {
        tekst+=usernames[i]+', '
      }
    }
    tekst=tekst.slice(0, -2);
    tekst_karta.innerHTML=tekst
   }

   if(roles[player_count]=="otkrivanje")
   {
    for(var i=0;i<=10;i++)
    {
      if(roles[i]=='merlin')
      {
        index=i
      }
    }
    tekst_karta.innerHTML="MERLIN JE "+usernames[index]
   }
    player_count+=1
  }
  else
  {
   
    document.getElementById("name").innerHTML=usernames[player_count]
    if(player_count==player_number)
    {
      document.getElementById("name").innerHTML="OTKIJ MERLINA"
      document.getElementsByClassName('card__face--front')[0].style.backgroundImage='linear-gradient(to bottom right, var(--red), var(--red2))'
    }
  }
  
  counter+=1
  
  
});

function start()
{
  usernames = [];
  player_number = 0;

  for(var i=1;i<=10;i++)
  {
      input=document.getElementById("player"+i.toString())
      usernames.push(input.value.trim())
      if(input.value.trim()!="") player_number++;
  }

  sessionStorage.setItem("usernames", JSON.stringify(usernames));
  sessionStorage.setItem("player_number", player_number);

  if (player_number < 5) {
      alert("Minimum 5 igraca");
      return;
  }


  if (player_number === 5) roles = ["seljak", "merlin", "persival", "morgana", "assasin"];
  else if (player_number === 6) roles = ["seljak", "seljak", "merlin", "persival", "morgana", "assasin"];
  else if (player_number === 7) roles = ["seljak", "seljak", "merlin", "persival", "morgana", "assasin", "oberon"];
  else if (player_number === 8) roles = ["seljak", "seljak", "seljak", "merlin", "persival", "morgana", "assasin", "mordred"];
  else if (player_number === 9) roles = ["seljak", "seljak", "seljak", "seljak", "merlin", "persival", "morgana", "assasin", "mordred"];
  else roles = ["seljak", "seljak", "seljak", "seljak", "merlin", "persival", "morgana", "assasin", "oberon", "mordred"];

  shuffle(roles);

  document.getElementById('inputi').style.display='none'
  document.getElementById("name").innerHTML=usernames[player_count]
  document.getElementById('karta').style.display='block'
  document.getElementById('restart-container').style.display = 'block';
  console.log(usernames)
  console.log(roles)
  

}

function restartGame() {
  // Fetch saved data
  const savedNames = JSON.parse(sessionStorage.getItem("usernames"));
  player_number = parseInt(sessionStorage.getItem("player_number"), 10);

  if (savedNames && savedNames.length > 0) {
    usernames = savedNames;
    roles = []; // Reset roles for a new game

    if (player_number === 5) roles = ["seljak", "merlin", "persival", "morgana", "assasin"];
    if (player_number === 6) roles = ["seljak", "seljak", "merlin", "persival", "morgana", "assasin"];
    if (player_number === 7) roles = ["seljak", "seljak", "merlin", "persival", "morgana", "assasin", "oberon"];
    if (player_number === 8) roles = ["seljak", "seljak", "seljak", "merlin", "persival", "morgana", "assasin", "mordred"];
    if (player_number === 9) roles = ["seljak", "seljak", "seljak", "seljak", "merlin", "persival", "morgana", "assasin", "mordred"];
    if (player_number === 10) roles = ["seljak", "seljak", "seljak", "seljak", "merlin", "persival", "morgana", "assasin", "oberon", "mordred"];

    shuffle(roles); // Shuffle roles for the new game

    player_count = 0; // Reset player counter
    document.getElementById("name").innerHTML = usernames[player_count];
    document.getElementById("karta").style.display = "block";
    document.getElementById("inputi").style.display = "none";
    console.log("Restarting game with: ", usernames, roles);
  }
}


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}