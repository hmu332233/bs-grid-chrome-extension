function showGrid() {
	const columnCount = 12;
	const createColumnHtml = ({ size, index }) => `<div class="col-sm-${size}"><div>${index + 1}</div></div>`;
	const columnHtmls = new Array(columnCount).fill('').map((value, index) => createColumnHtml({ size: 12 / columnCount, index })).join('');
	$('body').append(`
		<div id="forh-bs-grid">
			<div class="container">
				<div class="row">
				  ${columnHtmls}
				</div>
			</div>
		</div>
	`);
}

function removeGrid() {
	$('#forh-bs-grid').remove();
}

if ($('body').find('#forh-bs-grid').length === 0) {
	showGrid();
} else {
	removeGrid();
}
