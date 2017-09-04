import { Children } from "react";
import { Modal } from "./Modal";

export class ModalOwner {
    componentDidMount() {
        this.updateModal();
    }

    componentDidUpdate() {
        this.updateModal();
    }

    componentWillUnmount() {
        this.hideModal();
    }

    hideModal(modalId) {
        Modal.remove(modalId);
    }

    shouldModalRender() {
        const { children } = this.props;

        return Children.count(children);
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
}
