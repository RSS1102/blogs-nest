interface Blogs {
  id: number;
  title: string;
  isShow: boolean;
}

interface BlogsTree {
  id: number;
  title: string;
  isShow: boolean;
  children: Array<Blogs> | [];
}
