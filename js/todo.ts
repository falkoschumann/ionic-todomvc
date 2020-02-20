class Todo {
  public done: boolean;

  constructor(public text: string) { }

  toggle() {
    this.done = !this.done;
  }
}
