
class Engine {
  constructor() {
    this.active = false;   
  }

  init() {
    g_Manager = new ObjectManager();
    this.active = true;   
  }

  update(dt) {

  }
}

