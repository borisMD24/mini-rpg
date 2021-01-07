class Prompt {
  constructor() {}
  warn(msg) {
    console.log(
      `%c${msg}`,
      "color:red;font-family:system-ui;font-size:3rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }
  ask(msg) {
    console.log(
      `%c${msg}`,
      "color:blue;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }
}

const p = new Prompt();
