class GameObject {
  constructor(id) {
    this.id = id;
    this.init();
  }

  init() {
    this.position = vec2.create();
    this.scale = vec2.create();
    this.rotation = 0.0;
    this.tex = "mygreattex";
    this.active = true;
  }

  draw() {
    if(this.active) {
      //logic also go here
    }
  }

  update(dt) {
    if(this.active) {
      //logic go here
    }
  }

  destroy() {
    //lazy meh
    g_Manager.destroy_object(this);
  }


}
