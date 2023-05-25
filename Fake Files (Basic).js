class File {
  constructor(fullName, content) {
    this.fullNameProtected = fullName;
    this.content = content;
    this.str = -1;
    this.char = -1;
  }
  get fullName() {
    return this.fullNameProtected;
  }
  getContents() {
    return this.content;
  }
  write(str) {
    if (this.content === "") {
      this.content += str;
    } else {
      this.content += `\n${str}`;
    }
  }
  gets() {
    this.str++;
    return this.content.split("\n")[this.str] || undefined;
  }
  getc() {
    this.char++;
    return this.content.split("")[this.char] || undefined;
  }

  get filename() {
    let arr = this.fullNameProtected.split(".");
    arr = arr.splice(0, arr.length - 1);
    return arr.join(".");
  }
  get extension() {
    let arr = this.fullNameProtected.split(".");
    arr = arr.splice(arr.length - 1, arr.length);
    return arr.join(".");
  }
}
