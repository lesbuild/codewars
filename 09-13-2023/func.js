class Block{
    constructor(data){
      this.Width = data[0]
      this.Length = data[1]
      this.Height = data[2]
    }
    getWidth(){
      return this.Width
    }
    getLength(){
      return this.Length
    }
    getHeight(){
      return this.Height
    }
    getVolume(){
      return this.Width * this.Length * this.Height
    }
    getSurfaceArea(){
      return 2 * ((this.Width * this.Length) + (this.Length * this.Height) + (this.Height * this.Width))
    }
  }