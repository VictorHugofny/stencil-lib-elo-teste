/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FormFieldDidChangeValueDetail } from "@sydle/sydle-one-components/dist/types/components/forms/one-form/one-field/one-field.interface";
import { FormFieldDidChangeValueDetail as FormFieldDidChangeValueDetail1 } from "@sydle/sydle-one-components";
export namespace Components {
    interface EloFormCadastro {
        /**
          * Field configuration. This attribute must be decorated as a @Prop()
         */
        "field": any;
        /**
          * Field value. This attribute must be decorated as a @Prop()
         */
        "value": any;
        /**
          * Path of field value in the reference eObject.
         */
        "valuePath"?: string;
    }
    interface EloMapViewerComponent {
        /**
          * Field configuration. This attribute must be decorated as a @Prop()
         */
        "field": any;
        /**
          * Field value. This attribute must be decorated as a @Prop()
         */
        "value": any;
        /**
          * Path of field value in the reference eObject.
         */
        "valuePath"?: string;
    }
}
export interface EloFormCadastroCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEloFormCadastroElement;
}
export interface EloMapViewerComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEloMapViewerComponentElement;
}
declare global {
    interface HTMLEloFormCadastroElement extends Components.EloFormCadastro, HTMLStencilElement {
    }
    var HTMLEloFormCadastroElement: {
        prototype: HTMLEloFormCadastroElement;
        new (): HTMLEloFormCadastroElement;
    };
    interface HTMLEloMapViewerComponentElement extends Components.EloMapViewerComponent, HTMLStencilElement {
    }
    var HTMLEloMapViewerComponentElement: {
        prototype: HTMLEloMapViewerComponentElement;
        new (): HTMLEloMapViewerComponentElement;
    };
    interface HTMLElementTagNameMap {
        "elo-form-cadastro": HTMLEloFormCadastroElement;
        "elo-map-viewer-component": HTMLEloMapViewerComponentElement;
    }
}
declare namespace LocalJSX {
    interface EloFormCadastro {
        /**
          * Field configuration. This attribute must be decorated as a @Prop()
         */
        "field"?: any;
        /**
          * Event emited when the field changes its value.
         */
        "onSyOneFormFieldDidChangeValue"?: (event: EloFormCadastroCustomEvent<FormFieldDidChangeValueDetail>) => void;
        /**
          * Field value. This attribute must be decorated as a @Prop()
         */
        "value"?: any;
        /**
          * Path of field value in the reference eObject.
         */
        "valuePath"?: string;
    }
    interface EloMapViewerComponent {
        /**
          * Field configuration. This attribute must be decorated as a @Prop()
         */
        "field"?: any;
        /**
          * Event emited when the field changes its value.
         */
        "onSyOneFormFieldDidChangeValue"?: (event: EloMapViewerComponentCustomEvent<FormFieldDidChangeValueDetail1>) => void;
        /**
          * Field value. This attribute must be decorated as a @Prop()
         */
        "value"?: any;
        /**
          * Path of field value in the reference eObject.
         */
        "valuePath"?: string;
    }
    interface IntrinsicElements {
        "elo-form-cadastro": EloFormCadastro;
        "elo-map-viewer-component": EloMapViewerComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "elo-form-cadastro": LocalJSX.EloFormCadastro & JSXBase.HTMLAttributes<HTMLEloFormCadastroElement>;
            "elo-map-viewer-component": LocalJSX.EloMapViewerComponent & JSXBase.HTMLAttributes<HTMLEloMapViewerComponentElement>;
        }
    }
}
