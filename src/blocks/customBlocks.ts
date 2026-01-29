export const registerCustomBlocks = (editor: any) => {
  const blockManager = editor.BlockManager;
  blockManager.add("simple-text", {
    label: "Text Block",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
      <path d="M4 4h16v2H4zM4 9h16v2H4zM4 14h10v2H4z"/>
    </svg>`,
    content: `<p class="text-base bg-blue-500">This is a custom text block okay</p>`,
  });
  blockManager.add("card", {
    label: "Card",
    category: "Extra",
    content: { type: "card" },
  });
};
