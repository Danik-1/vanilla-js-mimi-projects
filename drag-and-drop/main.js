const dragAndDrop = () => {
  const cards = document.querySelectorAll(".js-card");
  const columns = document.querySelectorAll(".js-column");

  function dragStart() {
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
  }
  function dragEnd() {
    this.classList.remove("hide");
  }
  cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
  });

  function dragOver(event) {
    event.preventDefault();
  }
  function dragEnter(event) {
    event.preventDefault();
    this.classList.add("hover");
  }
  function dragLeave() {
    this.classList.remove("hover");
  }
  function dragDrop() {
    this.append(document.querySelector(".hide"));
    this.classList.remove("hover");
  }

  columns.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", dragDrop);
  });
};

dragAndDrop();
