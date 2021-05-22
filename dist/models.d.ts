export interface PosPrintOptions {
    /**
     * @field copies: number of copies to print
     * @field preview: bool，false=print，true=pop preview window
     * @field deviceName: string，default device name, check it at webContent.getPrinters()
     * @field timeoutPerLine: int，timeout，actual time is ：data.length * timeoutPerLine ms
     * @field silent: To print silently
     */
    copies?: number;
    preview?: boolean;
    printerName: string;
    margin?: string;
    timeOutPerLine?: number;
    width?: string;
    silent?: boolean;
    pageSize?: SizeOptions;
    debugger?: boolean;
}
export interface SizeOptions {
    height: number;
    width: number;
}
/**
 * @interface
 * @name PosPrintTableField
 * */
export interface PosPrintTableField {
    type: 'text' | 'image';
    value?: string;
    path?: string;
    css?: object;
    style?: string;
    width?: string;
    height?: string;
}
declare type Base = string | number | boolean | null;
export interface PosPrintDataBase {
    /**
     * @property type
     * @description type data to print: 'text' | 'barCode' | 'qrcode' | 'image' | 'table'
     */
    type: PosPrintType;
    value?: string;
    css?: object;
    style?: string;
}
/**
 * @interface
 * @name PosPrintData
 * **/
export interface PosPrintDataText extends PosPrintDataBase {
    type: 'text';
}
export interface PosPrintDataBarCode extends PosPrintDataBase {
    type: 'barCode';
    width: number;
    height: number;
    fontsize?: number;
    displayValue?: boolean;
    position?: 'left' | 'center' | 'right';
}
export interface PosPrintDataTable extends PosPrintDataBase {
    type: 'table';
    borderWidth?: number;
    borderStyle?: 'dashed' | 'dotted' | 'double' | 'groove' | 'solid';
    tableHeader?: Array<PosPrintTableField | Base>;
    tableBody?: Array<Array<PosPrintTableField | Base>>;
    tableFooter?: Array<PosPrintTableField | Base>;
    tableHeaderStyle?: string;
    tableBodyStyle?: string;
    tableFooterStyle?: string;
}
export interface PosPrintDataImage extends PosPrintDataBase {
    type: 'image';
    path: string;
    position?: 'left' | 'center' | 'right';
    width?: string;
    height?: string;
}
export interface PosPrintDataQrCode extends PosPrintDataBase {
    type: 'qrCode';
    position?: 'left' | 'center' | 'right';
    width?: number;
    height?: number;
}
export interface PosPrintDataRowField {
    value: Base;
    css?: object;
    style?: string;
}
export interface PosPrintDataRow extends PosPrintDataBase {
    type: 'cell';
    width?: number;
    height?: number;
    cells: PosPrintDataRowField[];
}
export declare type PosPrintData = PosPrintDataText | PosPrintDataBarCode | PosPrintDataTable | PosPrintDataImage | PosPrintDataQrCode | PosPrintDataRow;
/**
 * @type PosPrintType
 * @name PosPrintType
 * **/
export declare type PosPrintType = 'text' | 'barCode' | 'qrCode' | 'image' | 'table' | 'cell';
export {};
