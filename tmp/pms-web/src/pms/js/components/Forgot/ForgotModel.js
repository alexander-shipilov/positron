import { Model } from "model";
import { FormModel } from "ui/FormView";

export class Credentials extends Model {
}

export class ForgotModel extends FormModel.connect(Credentials) {
    static get name() {
        return "ForgotModel";
    }
}
