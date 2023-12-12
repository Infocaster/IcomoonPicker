export const cloneSvgNode = (targetNode: ShadowRoot | null) => {
  if (!targetNode) throw new Error("No target node found");

  const iconElement = document.body.firstChild as HTMLElement;

  if (!iconElement)
    throw new Error(
      "No icon element found, either the icomoon config is wrong or there are no icons in the project"
    );
  const clone = iconElement.cloneNode(true);

  targetNode.appendChild(clone);
  return iconElement;
};
