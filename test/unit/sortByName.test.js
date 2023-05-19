const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Books sorted", () => {
    expect(
      sorting.sortByName([
        "Колобок",
        "Колобок",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Волшебник изумрудного города",
      "Колобок",
      "Колобок",
    ])
  })
});