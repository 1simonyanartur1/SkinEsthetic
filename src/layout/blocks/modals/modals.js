export function modals() {
	MicroModal.init({
		onShow: modal => console.info(`${modal.id} is shown`), // [1]
		onClose: modal => console.info(`${modal.id} is hidden`), // [2]
		openTrigger: 'data-custom-open', // [3]
		closeTrigger: 'data-micromodal-close', // [4]
		openClass: 'is-open',
		disableScroll: true,
		disableFocus: false,
		awaitOpenAnimation: false,
		awaitCloseAnimation: false,
		debugMode: false
	});
}