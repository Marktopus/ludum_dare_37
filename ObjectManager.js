class ObjectManager() {
  constructor() {
    this.objects = [];
    this.free_ids = [];
  }

  create_object() {
    let id;
    if(this.free_ids.length > 0) {
      id = this.free_ids[this.free_ids.length - 1];
      this.free_ids.pop();
    } else {
      id = this.objects.length;
      this.objects.push(new GameObject(id));
    }
    this.objects[id].init(); 
    return this.objects[id];
  }

  destroy_object(object) {
    object.active = false;
    this.free_ids.push(object.id);
  }

  update(dt) {
    for(let i = 0; i < this.objects.length; ++i) {
      this.objects[i].update(dt);
    }
  }


}
