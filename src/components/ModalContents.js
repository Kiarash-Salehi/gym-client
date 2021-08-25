const ModalContents = ({ content }) => {
	switch (content) {
		case '1':
			return (
				<div>
					1
				</div>
			);
		case '2':
			return (
				<div>
					2
				</div>
			);
		default:
			return (
				<div>
					def
				</div>
			);
	}
};

export default ModalContents;