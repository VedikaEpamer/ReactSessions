export const initialItems = new Array(3_00_00_000).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 2_99_99_999,
  };
});
