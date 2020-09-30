const getSearchData = ({ postData }) => {
  let targetData = [];
  let tagsGroup = [];

  postData.forEach(({ node }) => {
    let targetTag = null;
    const tags = node.frontmatter.tags;

    if (tags) {
      targetTag = tags.join("");
      tagsGroup.push(tags);
    }

    let targetString = `
    ${node.frontmatter.title}
    ${targetTag}
    ${node.rawBody}
    `;

    targetData.push({
      title: node.frontmatter.title,
      rawString: targetString.replace(/\W/g, ""),
    });
  });

  let tagListData = [];
  tagsGroup.forEach((tags) => tags.forEach((tag) => tagListData.push(tag)));
  tagListData = [...new Set(tagListData)];

  return {
    target: targetData,
    tagList: tagListData,
  };
};

export default getSearchData;
