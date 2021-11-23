const arr = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination = {
  currPage: 0,
  init: function (arr, size) {
    this.thisPage = function () {
      return this.currPage;
    };
    this.nextPage = function () {
      this.currPage += 1;
      return this;
    };
    this.prevPage = function () {
      this.currPage -= 1;
      return this;
    };
    this.firstPage = function () {
      this.currPage = 0;
    };
    this.lastPage = function () {
      let lastPage = Math.ceil(arr.length / size);
      this.currPage = lastPage;
    };
    this.goToPage = function (num) {
      this.firstPage();
      for (let i = 0; i < num; i++) {
        this.nextPage();
      }
      this.getPageItems = function () {
        let start = this.currPage * size;
        const ret = [];
        for (let i = start; i < start + size; i++) {
          if (arr[i] != undefined) ret.push(arr[i]);
        }
        return ret;
      };
    };
  },
};

Pagination.init(arr, 4);
Pagination.goToPage(6);
console.log(Pagination.getPageItems());
console.log(Pagination.getPageItems(alphabetArray, 4));

const obj = {
  init(arr, len) {
    this.data = arr;
    this.pageSize = len;
    this.page = 0;
    this.lastPage = Math.ceil(arr.length / len);
  },
  nextPage() {
    if (this.page < this.lastPage) this.page++;
    return this;
  },
};

obj.init(arr, 4);
