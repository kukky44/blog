import React, { useEffect, useState } from "react";

// ref: https://nickymeuleman.netlify.app/blog/table-of-contents
function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      acc.push(item.url.slice(1));
    }
    // if (item.items) {
    //   acc.push(...getIds(item.items));
    // }
    return acc;
  }, []);
}
function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(``);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -60% 0%` }
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });
    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [itemIds]);
  return activeId;
}
function renderItems(items, activeId) {
  return (
    <ol>
      {items.map((item) => {
        return (
          <li key={item.url}>
            <a
              href={item.url}
              className={activeId === item.url.slice(1) ? "active" : ""}
            >
              {item.title}
            </a>
            {/* {item.items && renderItems(item.items, activeId)} */}
          </li>
        );
      })}
    </ol>
  );
}
function TableOfContents(props) {
  const idList = getIds(props.data.items);
  const activeId = useActiveId(idList);
  let tableHeight;
  if (typeof window !== `undefined`) {
    tableHeight = (window.innerHeight / 3) * 2;
  } else {
    tableHeight = "320";
  }
  return (
    <div style={{ maxHeight: tableHeight }} className="tableOfContentWrapper">
      {renderItems(props.data.items, activeId)}
    </div>
  );
}
export default TableOfContents;
