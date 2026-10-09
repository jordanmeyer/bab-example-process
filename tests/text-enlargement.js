// Authored test-only text enlargement: doubles each computed font size, not the shared viewport.
export async function enlargeText(frame) {
  const doc=frame.contentDocument,win=frame.contentWindow;
  await doc.fonts.ready;
  const sizes=Array.from(doc.querySelectorAll('*'),element=>[element,parseFloat(win.getComputedStyle(element).fontSize)]);
  for(const [element,size] of sizes)if(Number.isFinite(size))element.style.fontSize=`${size*2}px`;
}
