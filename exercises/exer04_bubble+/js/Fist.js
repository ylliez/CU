class Fist extends Hand {

  constructor() {
    super();
  }

  checkFist(){
    super.coordinate();
    // console.log(`${floor(this.dist.T2B.t2i)}, ${floor(this.dist.spec.i32t1)}, ${floor(this.dist.p2T.p2m)}, ${floor(this.dist.p2T.p2r)}, ${floor(this.dist.p2T.p2p)}`);
    if (this.dist.T2B.t2i < 50 && this.dist.spec.i32t1 < 100 && this.dist.p2T.p2m < 100 && this.dist.p2T.p2r < 100 && this.dist.p2T.p2p < 100) {
      return true;
    }
  }

}
