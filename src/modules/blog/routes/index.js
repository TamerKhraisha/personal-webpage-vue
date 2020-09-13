const blog = () => import("@/modules/blog/views/blog.vue");
export default [
  {
    path: "/blog",
    children: [{ path: "", name: "blog", component: blog }]
  }
];
