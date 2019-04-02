var shape = {
  name: 'hhh',
  popup: function () {
    console.log(this, name)

    setTimeout(() => {
      console.log(this.name + "!");
    }, 3000)
  }
};

shape.popup();