export default (
	{ response: { status, data } },
	updateValidErrs,
	updateRedirect
) => {
	switch (status) {
		case 422: {
			updateValidErrs(data);
			break;
		}
		case 404: {
			updateRedirect('/404');
			break;
		}
		case 500:
		default: {
			updateRedirect('/500');
		}
	}
};
