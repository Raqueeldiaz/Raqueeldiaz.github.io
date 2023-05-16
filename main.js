let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f870ba;">Soy programadora web en Tecnolochicas PRO y me encanta seguir aprendiendo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
