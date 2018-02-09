import { listen } from "positron-flow";
import { ViewStore } from "ui/View";

export class FormStore extends ViewStore {
    static get name() {
        return "FormStore";
    }

    constructor(...args) {
        super({}, ...args);
    }

    setFieldErrors(nextErrors) {
        const { errors } = this.state;

        return this.setState({ errors: errors && nextErrors ? errors.assign(nextErrors) : nextErrors });
    }

    setFieldValue(field, value) {
        return this.setItem({ [field]: value }).then(() => this.setFieldError(field, void 0));
    }

    setFieldError(field, error) {
        return this.setFieldErrors({ [field]: error });
    }

    setItem(nextItem) {
        return super.setItem(nextItem)
            .then(() => this.setFieldErrors(null))
            .then(() => this.setState({ busy: false }));
    }

    submit() {
        return this.setState({ busy: true });
    }

    submitError() {
        return this.setState({ busy: false });
    }

    submitSuccess() {
        return this.setState({ busy: false });
    }

    validate() {
        return this.setState(this.state.validate())
            .then((state) => state.isValid ? state : Promise.reject("validation"));
    }
}
