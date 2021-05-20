/*
 * Copyright (c) 2019-2020. Author Hubert Formin <hformin@gmail.com>
 */
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
    width?: string;  // for type image
    height?: string; // for type image
}

type Base = string | number | boolean | null;

/*export enum PosPrintType {
    text= 'text',
    qrCode = 'qrCode',
    image = 'image',
    table = 'table',
    barCode = 'barCode'
}*/

export declare interface PosPrintDataBase {
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

export declare interface PosPrintDataText extends PosPrintDataBase {
    type: 'text';
}

export declare interface PosPrintDataBarCode extends PosPrintDataBase {
    type: 'barCode';
    width: number;
    height: number;
    fontsize?: number;
    displayValue?: boolean;
    position?: 'left' | 'center' | 'right';
}

export declare interface PosPrintDataTable extends PosPrintDataBase {
    type: 'table';
    borderWidth?: number;
    borderStyle?: 'dashed' | 'dotted' | 'double' | 'groove' | 'solid';
    tableHeader?: Array<PosPrintTableField | Base>,        // specify the columns in table header, to be used with type table
    tableBody?: Array<Array<PosPrintTableField | Base>>,         //  specify the columns in table body, to be used with type table
    tableFooter?: Array<PosPrintTableField | Base>,      //  specify the columns in table footer, to be used with type table
    tableHeaderStyle?: string;                // (type table), set custom style for table header
    tableBodyStyle?: string;                // (type table), set custom style for table body
    tableFooterStyle?: string;             // (type table), set custom style for table footer
}

export declare interface PosPrintDataImage extends PosPrintDataBase {
    type: 'image';
    path: string;
    position?: 'left' | 'center' | 'right';
    width?: string;
    height?: string;
}

export declare interface PosPrintDataQrCode extends PosPrintDataBase {
    type: 'qrCode';
    position?: 'left' | 'center' | 'right';
    width?: number;
    height?: number;
}


export declare interface PosPrintDataRow extends PosPrintDataBase {
    type: 'cell';
    width?: number;
    height?: number;
    cells: Array<{
        value: Base;
        css?: object;
        style?: string;
    }>;
}

export type PosPrintData =
    PosPrintDataText
    | PosPrintDataBarCode
    | PosPrintDataTable
    | PosPrintDataImage
    | PosPrintDataQrCode
    | PosPrintDataRow;

/**
 * @type PosPrintType
 * @name PosPrintType
 * **/
export type PosPrintType = 'text' | 'barCode' | 'qrCode' | 'image' | 'table' | 'cell';

/*
export enum PosPrintType {
    text = 'text',
    barCode = 'barCode',
    qrCode = 'qrCode',
    image = 'table'
};*/
