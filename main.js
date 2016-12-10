function main() {
  console.log('hey')
  g_Engine = new Engine();
  g_Engine.init();
  var updater = function() {
    g_Engine.update(1.0/60.0);
    if(g_Engine.active){
      requestAnimationFrame(updater);
    }
  } 
  updater();
}

(function(){
  main();
})();
