/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkNestedTreeNode, CdkTree, CdkTreeNode, CdkTreeNodeDef } from '@angular/cdk/tree';
import { AfterContentInit, DoCheck, ElementRef, IterableDiffers, OnDestroy, OnInit } from '@angular/core';
import { CanDisable, CanDisableCtor, HasTabIndex, HasTabIndexCtor } from '@angular/material/core';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
declare const _MatTreeNodeMixinBase: HasTabIndexCtor & CanDisableCtor & typeof CdkTreeNode;
/**
 * Wrapper for the CdkTree node with Material design styles.
 */
export declare class MatTreeNode<T, K = T> extends _MatTreeNodeMixinBase<T, K> implements CanDisable, DoCheck, HasTabIndex, OnInit, OnDestroy {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T, K>;
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T, K>, tabIndex: string);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_tabIndex: NumberInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatTreeNode<any, any>, [null, null, { attribute: "tabindex"; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatTreeNode<any, any>, "mat-tree-node", ["matTreeNode"], { "role": "role"; "disabled": "disabled"; "tabIndex": "tabIndex"; }, {}, never>;
}
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */
export declare class MatTreeNodeDef<T> extends CdkTreeNodeDef<T> {
    data: T;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatTreeNodeDef<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatTreeNodeDef<any>, "[matTreeNodeDef]", never, { "when": "matTreeNodeDefWhen"; "data": "matTreeNode"; }, {}, never>;
}
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 */
export declare class MatNestedTreeNode<T, K = T> extends CdkNestedTreeNode<T, K> implements AfterContentInit, DoCheck, OnDestroy, OnInit {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T, K>;
    protected _differs: IterableDiffers;
    node: T;
    /** Whether the node is disabled. */
    get disabled(): any;
    set disabled(value: any);
    private _disabled;
    /** Tabindex for the node. */
    get tabIndex(): number;
    set tabIndex(value: number);
    private _tabIndex;
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T, K>, _differs: IterableDiffers, tabIndex: string);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatNestedTreeNode<any, any>, [null, null, null, { attribute: "tabindex"; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatNestedTreeNode<any, any>, "mat-nested-tree-node", ["matNestedTreeNode"], { "role": "role"; "disabled": "disabled"; "tabIndex": "tabIndex"; "node": "matNestedTreeNode"; }, {}, never>;
}
export {};

//# sourceMappingURL=node.d.ts.map