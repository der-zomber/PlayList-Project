  // task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.


let actualImage = ['<img src="data:image/jpeg;base64,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">','<img src="data:image/jpeg;base64,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">','<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HmmNj1p3rjgzAop03C5kb-XM5U20KHY6bytfoV6r7Q&s">','<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QAQBAAAQQAAwQGBAwFBQEAAAAAAQACAxEEEiETMUFRBRQiYXGhMoGRwSMkQlJicrGy0dLw8TNTY7PCQ0SCouE0/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACMRAAICAQMEAwEAAAAAAAAAAAABAhEDEjFRBBQhQTJhcTP/2gAMAwEAAhEDEQA/AOMd6EJ2hcp79kZUwCatEVSIovFJlVpCA1YKK8qA1W5UFqAyQlJaoqwjRIVgiFIQnKAERdxA1O0J8qNxpAKVAAma3RA3p2rDkZUJ6QsazNeqdp0VVprpEkXNGeRrM1F2g146JnROb/qMu+KXDNdJLG5tUyRt2a/dXTTzsDBG9zWBpvLWhzO5p4Rc3SPNzTcZMqLBmNTRht6WeHsTNhO8YiLv1/8AEzMTizqJiRyFX7N6vjx80ZAlkIPeKKrLDKJKOVv2ViIZRc0V2bObh7FU6EV/9cY9a6DOvShmykcS70b0tVSSY5kDZnSuaHPLADvsKWljqbfsxbNodZxMbhyzUl2bD/uYh4OtdSKLG4rDMkw0zzIH5JGuIFcj4Uq4nYqXFHDwzOlNkbTLoK47tAm0gcpcnNEMdV1uK/FPsmFtCeIHmH3fktT4+lnGMMloyOLRTmmiNa0vhqqnSdIwxRyGWaRsjQ5ryKbR8/sTrDJiPK17EEIN1iI+5RLG6IsBLXE8QowuLx56QwzZMS9zXysDm6VRcEEOdDhTvGzBJ9ZSZMbg1ZTHlcnuK1O0qoFM0qJ7VF2iEmZCwKM9JgNE2VMGokmxsMLxETav4QHzCtkZb4+HZdu+u5Rgh8Ziq/4gFD9dy0uYLjFjc7h9Ny6em/ojyOpflm3oKJjZpnvZtMsfo5dd4W8YePCQEZ2GKN8lsoHODubqOFhYcGdm2XKXDPE4HKe7RY8TPKxoslxcQDfcK/BdeReWzlXB3wHlmENDslgPMgtr7Vx+nMSzGYCKXDGwJnNNb7H7X60dY6wcsZLX9Xaxubi9vaB9oXHY92ydH8lzg6uR7lx3ZSjfhcXJHhcfbiM8LSKOuYnLp7fJHQj/AI7AXloaHEdr6pWRlO0cLJ07lOXIchGnfwQCeji2IbimYTIJNoAxzAAA5wDSQPUVT0qyN2GhETjkjc6IaUAAKry81hia5rWEFxc0aOYa8NVYXOOCMZA7MgIs3vBv3LtjBqpEWzDhmjruHA/mtOniFQG/F8I7+iPetcTT12Am62re7is7gBh8Hz2I96h1W6L4NykBS0aqQmauA+hDKOSlShEWykb024KOKDxRJ0X9HPO1awEjNI2/VqtrMvYs69v+45c/o0kYhh/qV9n4K+Vx+DNfP++5XxS0ys8fMrbN5AoUarkudjhknjs2AOJukpkAIbz3of29BV7grzya1RBRpiPc8MBY6i1wdoVU0knx3lO1jjQA36jXh+gm2GgceLgAAftXPVFBoshrM4hugPdqmOYT5QfRdS0dH4d4ZO97uy1l5BqT4hVwNMhM2W23v5E8EfYDoNhpozG9EGIcvJKwzvJDBI6t9AmvFTI90LQZmuAcLGi7Y5U/BJxKmsrFRO+luXOkvq+EPDYN4dy2txMbsRGG5rLtLCyTX1bCaitg2hX0Rah1W6L9Puv0oG9MDolG480C1wnvj2hLqoWMNSgjRPxUIkrDAkMmAI7RkbR5aq12r2DX5f8AccqcM343GfprWWjI01Z7Y/7uVVueRl3Zbg4G4mcQg1bSaAqyOC6sHRsMc21jtzu2CPGwPsXJwT3RTMmYA1zTRJF9y6UOLe2KFhAArtADjaqkn7IC43o6N8LWwx5XxuZG6uRG/wBWvmmxMeHw+Iie2LI0UHR0KoOIBN917lQ5z5BJHFiG5Xm3NdfPid6pxGGmM7p5pHPB0G92VvD90JQYUzpYbCswnX46bTiS3UXkymvPRXOlw8WzAIjIkGd27UxnVcHMyN5ftpCGmi069yqxGN2spc62mxQI1FetDyE9Fto3skt2XM4hjyddGgX6/eud07iI9lGGnNJHQIHyQRYv2ea5kGMlknYyQ2DYbpRHHTxpZ8VIQ87XUuGV3E/rcmW4rLcP2sRC8N0cb8k2IaQMPyGHb90Kno/tPa57Rd6ady04gfwrHowNF8+yP160uWbk/JbCqkv0zAKa0UhSFzHuWLQ5oT0ELGsQlRahQ7VMQZdhQM4ddU8etXPniByW3QuonMDq4nlzKw/CNBDXFoOuiCZnm3SFx32ddUTinik5NnQZI1rSQY6viX/lVvWaLbdCNLGr9dfqrl/DDdJ5BSJcSG5du/LyG5a3yL28uDqgk0LhJO7V/wCCGuLbp8PD5/5Vy80x3yE+ICkS4kX8O/Xf3plOS2Zu2kdB8IlO0c6NzQbq35fuqOrtY5xa6Nhdvov/ACrnmScWds6zvOiTPPmvam7u6G9Zzb3Zu1mdExMe9rjJCXjQHM/h/wAe9VOwMD7dnioGjlLx/isTnTO9KUu8Qlc+Ym9pZ5kBLq+w9rM6UUEcZaWuhBbpeZ/h83vS4xtSNIshsQAduB0AWATYkabY1ypOJXltOdfqCDY8OmmpJjhyA5V6obaU9EuzISUULGJIRSEWmIk0ilBdooL6YSGMJAuyStQkpqCsekVqpjnD3lrYYwRpYzfmUyTbL042jws+9NpI90uArRRlVhJY1rnBlG+J01rmq+uRj5APt/FCjdyuCCElK7r8P8sH2/inhxMczgGxMFmtSdPNbSFdUuDIQgBb2SROl2eybfdZ96umZHh4882HjLe6z/ktQe6XByyNEuVdGdkLYHSCFg7QaKe4bxe61hG9LVHRCetWiGttO1qAnGiw5FITIWMUXqoJUXqoKYi2GZSD2XDLdj51JaQbaDXgityOTzFlkT8kodITV61w8E+IlY+QbLNlAqzvKpeOyUVqsKscdQ5kcWtaSabuUZzzSkKMpQsosceBi8jil2rg4EOII1CMhKAyihZRYVwPHiJGPabJAO7zWzEdIGVjGxFwANkkBYgByUDchYH08dSNchecGHPNh7815uPhSoBTveTho2HcDoq2rMfDGojhODokGoUtasVGtCMqFgGcekgoQmOcOCh3ooQitxJ/Fku3KRvQhYK3GQhCVnRAOCU7yhCUsiAo5IQsK/kix/8ACb4qGoQsxMfxGarGbkIRHY6EIWFP/9k=">','<img src="data:image/jpeg;base64,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">','<img src="data:image/jpeg;base64,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">']


for (let i=0; i < actualImage.length; i++){
  let ptag = document.createElement('p')
  let photo = actualImage[i]
  ptag.innerHTML = photo
  displayImage.append(ptag);
  console.log(actualImage[i])
}

let songNombre = ['Porfa No Te Vayas', 'Cristina','Fantasia','Adan y Eva','Bella','Tutu']

for (let i=0; i < songNombre.length; i++){
  let ptag = document.createElement('p')
  let photo = songNombre[i]
  ptag.innerHTML = photo
  displaySong.append(ptag);
  console.log(songNombre[i])
}

let artistNombre = ['Beret, Morat', 'Sebastian Yatra','Sebastian Yatra','Paulo Londra','Wolfine','Camilo']

for (let i=0; i < artistNombre.length; i++){
  let ptag = document.createElement('p')
  let photo = artistNombre[i]
  ptag.innerHTML = photo
  displayArtist.append(ptag);
  console.log(artistNombre[i])
}

let cancionLink = ['<a href = https://youtu.be/zMvWTnVlYww target=_blank>Link</a>','<a href = https://youtu.be/ZiQyP0JWuEg target=_blank>Link</a>','<a href = https://youtu.be/zwecWzFPXDE target=_blank>Link</a>','<a href = https://youtu.be/W72zW82_wOM target=_blank>Link</a>','<a href = https://youtu.be/jjuSfhYiup8 target=_blank>Link</a>','<a href = https://youtu.be/A4KKQ8fPzg0 target=_blank>Link</a>']

for (let i=0; i < cancionLink.length; i++){
  let ptag = document.createElement('p')
  let photo = cancionLink[i]
  ptag.innerHTML = photo
  displayLink.append(ptag);
  console.log(cancionLink[i])
}
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
 
// task 10: use `.push()` to add each input value to the correct array.

  let userInputUrl = image.value;
  let userInputSong = songName.value;
  let userInputArtist = artist.value;
  let userInputLink = songLink.value;

  let ptag1 = document.createElement('p')
  let ptag2 = document.createElement('p')
  let ptag3 = document.createElement('p')
  let ptag4 = document.createElement('p')
  
  ptag1.innerHTML = `<img src="${userInputUrl}">`;
  ptag2.innerHTML = userInputSong;
  ptag3.innerHTML = userInputArtist;
  ptag4.innerHTML = `<a href=${userInputLink} target=_blank> Link </a>`;

  displayImage.append(ptag1);
  displaySong.append(ptag2);
  displayArtist.append(ptag3);
  displayLink.append(ptag4);
  
  
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.


}





// click event to add and display songs
add.onclick = function() {

  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();

