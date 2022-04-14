/*
  백엔드 개발할 때 아래의 Response 형식을 지켜주세요.

  < REST API >
  - 모든 이미지 불러오기 : [GET] /images
  - 특정 이미지 하나를 이미지 아이디로 불러오기 : [GET] /images/:id
  - 댓글 리스트를 이미지 아이디로 불러오기 : [GET] /images/:id/comments
*/

export const images = [
  {
    id: "1",
    title: "이미지 제목1",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1649892231169-8c54be4b9a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
  },
  {
    id: "2",
    title: "이미지 제목2",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1642557581363-0ab2f77764f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "3",
    title: "이미지 제목3",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "4",
    title: "이미지 제목4",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1649798511342-b468e770c222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "5",
    title: "이미지 제목5",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1649797463632-4c617f06f581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "6",
    title: "이미지 제목6",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1649735427532-a3db0f17da62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "7",
    title: "이미지 제목7",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "8",
    title: "이미지 제목8",
    description: "이미지 설명",
    image:
      "https://images.unsplash.com/photo-1649859341441-e5bf368db1f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export const comments = [
  {
    id: "1",
    author: "익명",
    content: "댓글 내용1",
  },
  {
    id: "2",
    author: "익명",
    content: "댓글 내용2",
  },
  {
    id: "3",
    author: "익명",
    content: "댓글 내용3",
  },
  {
    id: "4",
    author: "익명",
    content: "댓글 내용4",
  },
  {
    id: "5",
    author: "익명",
    content: "댓글 내용5",
  },
  {
    id: "6",
    author: "익명",
    content: "댓글 내용6",
  },
  {
    id: "7",
    author: "익명",
    content: "댓글 내용7",
  },
];
