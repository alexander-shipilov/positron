import { connect } from "positron-core/src/dataflow";
import { Installation } from "../pages/Installation";
import { intl } from "./intl";

export default [
    {
        title: "Getting started",
        icon: "information",
        entries: [
            {
                title: "Installation",
                icon: "android-download",
                component: connect(Installation, { intl: intl.store })
            }
        ]
    },
    {
        title: "Guides",
        icon: "document",
        entries: [
            {
                title: "Color",
                icon: "grid"
            },
            {
                title: "Sizing",
                icon: "arrow-expand"
            },
            {
                title: "Styling",
                icon: "paintbucket"
            }
        ]
    },
    {
        title: "Core",
        icon: "ionic",
        entries: [
            {
                title: "invariable",
                icon: "network"
            },
            {
                title: "dataflow",
                icon: "arrow-right-c"
            }
        ]
    },
    {
        title: "UI",
        icon: "cube",
        entries: [
            {
                title: "Accent"
            },
            {
                title: "Button"
            },
            {
                title: "CheckBox"
            },
            {
                title: "CheckBoxGroup"
            },
            {
                title: "Drop"
            },
            {
                title: "Error"
            },
            {
                title: "Field"
            },
            {
                title: "FieldSet"
            },
            {
                title: "FocusRoot"
            },
            {
                title: "Form"
            },
            {
                title: "Icon"
            },
            {
                title: "Input"
            },
            {
                title: "List"
            },
            {
                title: "Modal"
            },
            {
                title: "NumberField"
            },
            {
                title: "Password"
            },
            {
                title: "RadioButton"
            },
            {
                title: "RadioGroup"
            },
            {
                title: "RangePicker"
            },
            {
                title: "ScrollArea"
            },
            {
                title: "Select"
            },
            {
                title: "Slider"
            },
            {
                title: "Spinner"
            },
            {
                title: "Sprite"
            },
            {
                title: "TextArea"
            },
            {
                title: "TextField"
            },
            {
                title: "TooltipManager"
            }
        ]
    }
];
