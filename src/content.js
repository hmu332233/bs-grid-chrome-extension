function createGridHtml(columnCount) {
  const createColumnHtml = ({ size, index }) =>
    `<div class="col-sm-${size}"><div>${index + 1}</div></div>`;

  const columnHtmls = new Array(columnCount)
    .fill("")
    .map((value, index) => createColumnHtml({ size: 12 / columnCount, index }))
    .join("");

  return `
		<div data-element-id="grid">
			<div class="container">
				<div class="row">
					${columnHtmls}
				</div>
			</div>
		</div>
	`;
}

function showGrid() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
		<div data-element-id="grid-root">	
			${createGridHtml(12)}
			<div data-element-id="breakpoint-helpers" class="d-block">
				<div data-element-id="breakpoint-helper" class="d-block d-sm-none">XS</div>
				<div data-element-id="breakpoint-helper" class="d-none d-sm-block d-md-none">SM</div>
				<div data-element-id="breakpoint-helper" class="d-none d-md-block d-lg-none">MD</div>
				<div data-element-id="breakpoint-helper" class="d-none d-lg-block d-xl-none">LG</div>
				<div data-element-id="breakpoint-helper" class="d-none d-xl-block">XL</div>
			</div>
			<div data-element-id="grid-form" class="d-block">
				<input value="12">
			</div>
		</div>
		`
  );

  document
    .querySelector("[data-element-id='grid-form'] input")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("[data-element-id='grid']").remove();
        document
          .querySelector("[data-element-id='grid-root']")
          .insertAdjacentHTML(
            "afterbegin",
            createGridHtml(parseInt(event.target.value))
          );
      }
    });
}

function removeGrid() {
  document.querySelector("[data-element-id='grid-root']").remove();
}

if (document.querySelector("[data-element-id='grid-root']")) {
  removeGrid();
} else {
  showGrid();
}
