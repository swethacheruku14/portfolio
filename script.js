(function () {
  const list = document.getElementById("project-list");
  if (!list || !Array.isArray(projects)) return;

  if (projects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Automation projects will be published here as they are finished.";
    list.appendChild(empty);
    return;
  }

  projects.forEach(function (project) {
    const card = document.createElement("article");
    card.className = "project";

    const title = document.createElement("h3");
    title.textContent = project.title || "Untitled project";
    card.appendChild(title);

    if (project.summary) {
      const summary = document.createElement("p");
      summary.textContent = project.summary;
      card.appendChild(summary);
    }

    if (Array.isArray(project.tags) && project.tags.length) {
      const tags = document.createElement("ul");
      tags.className = "tags";
      project.tags.forEach(function (tag) {
        const item = document.createElement("li");
        item.textContent = tag;
        tags.appendChild(item);
      });
      card.appendChild(tags);
    }

    if (project.link) {
      const link = document.createElement("a");
      link.href = project.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = project.linkLabel || "View project";
      card.appendChild(link);
    }

    list.appendChild(card);
  });
})();
