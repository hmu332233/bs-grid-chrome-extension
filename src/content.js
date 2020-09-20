function showGrid() {
  const columnCount = 12;
  const createColumnHtml = ({ size, index }) =>
    `<div class="col-sm-${size}"><div>${index + 1}</div></div>`;

  const columnHtmls = new Array(columnCount)
    .fill("")
    .map((value, index) => createColumnHtml({ size: 12 / columnCount, index }))
    .join("");

  $("body").append(`
		<div data-element-id="grid-root">	
			<div data-element-id="grid">
				<div class="container">
					<div class="row">
						${columnHtmls}
					</div>
				</div>
			</div>
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
	`);
}

function removeGrid() {
  $("[data-element-id='grid-root']").remove();
}

if ($("body").find("[data-element-id='grid-root']").length === 0) {
  showGrid();
} else {
  removeGrid();
}
