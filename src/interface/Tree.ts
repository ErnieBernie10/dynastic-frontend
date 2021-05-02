export interface Extra {
  nickname: string;
}

export interface Spouse {
  name: string;
  class: string;
  extra: Extra;
}

export interface Child {
  name: string;
  class: string;
  marriages: Marriage[];
}

export interface Marriage {
  spouse: Spouse;
  children: Child[];
  extra: Extra;
}

export interface TreeNode {
  name: string;
  class: string;
  textClass: string;
  marriages: Marriage[];
}
