function hello(name) {
    return name == '' || name == undefined ? "Hello, World!" : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}` + "!"
  }