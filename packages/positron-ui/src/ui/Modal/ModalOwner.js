import { Children } from "react";
import { Modal } from "./Modal";

export class ModalOwner {
    shouldModalRender() {
        const { children } = this.props;

        return Children.count(children);
    }

    hideModal(modalId) {
        Modal.remove(modalId);
    }

    showModal(props) {
        const { children } = this.props;

        Modal.render(this.modalId, children, props);
    }

    updateModal() {
        if (this.shouldModalRender()) {
            this.showModal();
        } else {
            this.hideModal();
        }
    }

    componentDidMount() {
        this.updateModal();
    }

    componentDidUpdate() {
        this.updateModal();
    }

    componentWillUnmount() {
        this.hideModal();
    }
}
