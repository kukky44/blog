const getSearchResult = ({ query, posts, search }) => {
  let resultTitle = [];
  let resultPosts = [];

  search.target.forEach((item) => {
    if (item.rawString.includes(query)) {
      resultTitle.push(item.title);
    }
  });

  posts.forEach((post) =>
    resultTitle.forEach((title) => {
      if (title === post.node.frontmatter.title) {
        resultPosts.push(post);
      }
    })
  );
  return resultPosts;
};

export default getSearchResult;
