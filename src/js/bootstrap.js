function console(...params) {
  console.log(...params); // eslint-disable-line
}

class Test {
  constructor(initialText) {
    console(
      `initial component initial component initial component initial component ${initialText}`
    );
  }
}

Test("ishhhh");
