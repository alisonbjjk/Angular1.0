/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export var R3ResolvedDependencyType;
(function (R3ResolvedDependencyType) {
    R3ResolvedDependencyType[R3ResolvedDependencyType["Token"] = 0] = "Token";
    R3ResolvedDependencyType[R3ResolvedDependencyType["Attribute"] = 1] = "Attribute";
    R3ResolvedDependencyType[R3ResolvedDependencyType["ChangeDetectorRef"] = 2] = "ChangeDetectorRef";
    R3ResolvedDependencyType[R3ResolvedDependencyType["Invalid"] = 3] = "Invalid";
})(R3ResolvedDependencyType || (R3ResolvedDependencyType = {}));
export var R3FactoryTarget;
(function (R3FactoryTarget) {
    R3FactoryTarget[R3FactoryTarget["Directive"] = 0] = "Directive";
    R3FactoryTarget[R3FactoryTarget["Component"] = 1] = "Component";
    R3FactoryTarget[R3FactoryTarget["Injectable"] = 2] = "Injectable";
    R3FactoryTarget[R3FactoryTarget["Pipe"] = 3] = "Pipe";
    R3FactoryTarget[R3FactoryTarget["NgModule"] = 4] = "NgModule";
})(R3FactoryTarget || (R3FactoryTarget = {}));
export var ViewEncapsulation;
(function (ViewEncapsulation) {
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    // Historically the 1 value was for `Native` encapsulation which has been removed as of v11.
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
    ViewEncapsulation[ViewEncapsulation["ShadowDom"] = 3] = "ShadowDom";
})(ViewEncapsulation || (ViewEncapsulation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBpbGVyL2NvbXBpbGVyX2ZhY2FkZV9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBdUVILE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDbEMseUVBQVMsQ0FBQTtJQUNULGlGQUFhLENBQUE7SUFDYixpR0FBcUIsQ0FBQTtJQUNyQiw2RUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFFRCxNQUFNLENBQU4sSUFBWSxlQU1YO0FBTkQsV0FBWSxlQUFlO0lBQ3pCLCtEQUFhLENBQUE7SUFDYiwrREFBYSxDQUFBO0lBQ2IsaUVBQWMsQ0FBQTtJQUNkLHFEQUFRLENBQUE7SUFDUiw2REFBWSxDQUFBO0FBQ2QsQ0FBQyxFQU5XLGVBQWUsS0FBZixlQUFlLFFBTTFCO0FBMklELE1BQU0sQ0FBTixJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDM0IsaUVBQVksQ0FBQTtJQUNaLDRGQUE0RjtJQUM1Rix5REFBUSxDQUFBO0lBQ1IsbUVBQWEsQ0FBQTtBQUNmLENBQUMsRUFMVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSzVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuLyoqXG4gKiBBIHNldCBvZiBpbnRlcmZhY2VzIHdoaWNoIGFyZSBzaGFyZWQgYmV0d2VlbiBgQGFuZ3VsYXIvY29yZWAgYW5kIGBAYW5ndWxhci9jb21waWxlcmAgdG8gYWxsb3dcbiAqIGZvciBsYXRlIGJpbmRpbmcgb2YgYEBhbmd1bGFyL2NvbXBpbGVyYCBmb3IgSklUIHB1cnBvc2VzLlxuICpcbiAqIFRoaXMgZmlsZSBoYXMgdHdvIGNvcGllcy4gUGxlYXNlIGVuc3VyZSB0aGF0IHRoZXkgYXJlIGluIHN5bmM6XG4gKiAgLSBwYWNrYWdlcy9jb21waWxlci9zcmMvY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZS50cyAgICAgICAgICAobWFpbilcbiAqICAtIHBhY2thZ2VzL2NvcmUvc3JjL2NvbXBpbGVyL2NvbXBpbGVyX2ZhY2FkZV9pbnRlcmZhY2UudHMgICAgIChyZXBsaWNhKVxuICpcbiAqIFBsZWFzZSBlbnN1cmUgdGhhdCB0aGUgdHdvIGZpbGVzIGFyZSBpbiBzeW5jIHVzaW5nIHRoaXMgY29tbWFuZDpcbiAqIGBgYFxuICogY3AgcGFja2FnZXMvY29tcGlsZXIvc3JjL2NvbXBpbGVyX2ZhY2FkZV9pbnRlcmZhY2UudHMgXFxcbiAqICAgIHBhY2thZ2VzL2NvcmUvc3JjL2NvbXBpbGVyL2NvbXBpbGVyX2ZhY2FkZV9pbnRlcmZhY2UudHNcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0ZWRDb21waWxlckZhY2FkZSB7XG4gIMm1Y29tcGlsZXJGYWNhZGU6IENvbXBpbGVyRmFjYWRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVyRmFjYWRlIHtcbiAgY29tcGlsZVBpcGUoYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIG1ldGE6IFIzUGlwZU1ldGFkYXRhRmFjYWRlKTpcbiAgICAgIGFueTtcbiAgY29tcGlsZVBpcGVEZWNsYXJhdGlvbihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLCBkZWNsYXJhdGlvbjogUjNEZWNsYXJlUGlwZUZhY2FkZSk6IGFueTtcbiAgY29tcGlsZUluamVjdGFibGUoXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZywgbWV0YTogUjNJbmplY3RhYmxlTWV0YWRhdGFGYWNhZGUpOiBhbnk7XG4gIGNvbXBpbGVJbmplY3RvcihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLCBtZXRhOiBSM0luamVjdG9yTWV0YWRhdGFGYWNhZGUpOiBhbnk7XG4gIGNvbXBpbGVOZ01vZHVsZShcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLCBtZXRhOiBSM05nTW9kdWxlTWV0YWRhdGFGYWNhZGUpOiBhbnk7XG4gIGNvbXBpbGVEaXJlY3RpdmUoXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZywgbWV0YTogUjNEaXJlY3RpdmVNZXRhZGF0YUZhY2FkZSk6IGFueTtcbiAgY29tcGlsZURpcmVjdGl2ZURlY2xhcmF0aW9uKFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsXG4gICAgICBkZWNsYXJhdGlvbjogUjNEZWNsYXJlRGlyZWN0aXZlRmFjYWRlKTogYW55O1xuICBjb21waWxlQ29tcG9uZW50KFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIG1ldGE6IFIzQ29tcG9uZW50TWV0YWRhdGFGYWNhZGUpOiBhbnk7XG4gIGNvbXBpbGVDb21wb25lbnREZWNsYXJhdGlvbihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLFxuICAgICAgZGVjbGFyYXRpb246IFIzRGVjbGFyZUNvbXBvbmVudEZhY2FkZSk6IGFueTtcbiAgY29tcGlsZUZhY3RvcnkoXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZywgbWV0YTogUjNGYWN0b3J5RGVmTWV0YWRhdGFGYWNhZGUpOiBhbnk7XG5cbiAgY3JlYXRlUGFyc2VTb3VyY2VTcGFuKGtpbmQ6IHN0cmluZywgdHlwZU5hbWU6IHN0cmluZywgc291cmNlVXJsOiBzdHJpbmcpOiBQYXJzZVNvdXJjZVNwYW47XG5cbiAgUjNSZXNvbHZlZERlcGVuZGVuY3lUeXBlOiB0eXBlb2YgUjNSZXNvbHZlZERlcGVuZGVuY3lUeXBlO1xuICBSM0ZhY3RvcnlUYXJnZXQ6IHR5cGVvZiBSM0ZhY3RvcnlUYXJnZXQ7XG4gIFJlc291cmNlTG9hZGVyOiB7bmV3KCk6IFJlc291cmNlTG9hZGVyfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3JlRW52aXJvbm1lbnQge1xuICBbbmFtZTogc3RyaW5nXTogRnVuY3Rpb247XG59XG5cbmV4cG9ydCB0eXBlIFJlc291cmNlTG9hZGVyID0ge1xuICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz58c3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgU3RyaW5nTWFwID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTdHJpbmdNYXBXaXRoUmVuYW1lID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmd8W3N0cmluZywgc3RyaW5nXTtcbn07XG5cbmV4cG9ydCB0eXBlIFByb3ZpZGVyID0gYW55O1xuXG5leHBvcnQgZW51bSBSM1Jlc29sdmVkRGVwZW5kZW5jeVR5cGUge1xuICBUb2tlbiA9IDAsXG4gIEF0dHJpYnV0ZSA9IDEsXG4gIENoYW5nZURldGVjdG9yUmVmID0gMixcbiAgSW52YWxpZCA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIFIzRmFjdG9yeVRhcmdldCB7XG4gIERpcmVjdGl2ZSA9IDAsXG4gIENvbXBvbmVudCA9IDEsXG4gIEluamVjdGFibGUgPSAyLFxuICBQaXBlID0gMyxcbiAgTmdNb2R1bGUgPSA0LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVwZW5kZW5jeU1ldGFkYXRhRmFjYWRlIHtcbiAgdG9rZW46IGFueTtcbiAgcmVzb2x2ZWQ6IFIzUmVzb2x2ZWREZXBlbmRlbmN5VHlwZTtcbiAgaG9zdDogYm9vbGVhbjtcbiAgb3B0aW9uYWw6IGJvb2xlYW47XG4gIHNlbGY6IGJvb2xlYW47XG4gIHNraXBTZWxmOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzUGlwZU1ldGFkYXRhRmFjYWRlIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBhbnk7XG4gIHR5cGVBcmd1bWVudENvdW50OiBudW1iZXI7XG4gIHBpcGVOYW1lOiBzdHJpbmc7XG4gIGRlcHM6IFIzRGVwZW5kZW5jeU1ldGFkYXRhRmFjYWRlW118bnVsbDtcbiAgcHVyZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0luamVjdGFibGVNZXRhZGF0YUZhY2FkZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogYW55O1xuICB0eXBlQXJndW1lbnRDb3VudDogbnVtYmVyO1xuICBwcm92aWRlZEluOiBhbnk7XG4gIHVzZUNsYXNzPzogYW55O1xuICB1c2VGYWN0b3J5PzogYW55O1xuICB1c2VFeGlzdGluZz86IGFueTtcbiAgdXNlVmFsdWU/OiBhbnk7XG4gIHVzZXJEZXBzPzogUjNEZXBlbmRlbmN5TWV0YWRhdGFGYWNhZGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM05nTW9kdWxlTWV0YWRhdGFGYWNhZGUge1xuICB0eXBlOiBhbnk7XG4gIGJvb3RzdHJhcDogRnVuY3Rpb25bXTtcbiAgZGVjbGFyYXRpb25zOiBGdW5jdGlvbltdO1xuICBpbXBvcnRzOiBGdW5jdGlvbltdO1xuICBleHBvcnRzOiBGdW5jdGlvbltdO1xuICBzY2hlbWFzOiB7bmFtZTogc3RyaW5nfVtdfG51bGw7XG4gIGlkOiBzdHJpbmd8bnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0luamVjdG9yTWV0YWRhdGFGYWNhZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IGFueTtcbiAgcHJvdmlkZXJzOiBhbnlbXTtcbiAgaW1wb3J0czogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEaXJlY3RpdmVNZXRhZGF0YUZhY2FkZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogYW55O1xuICB0eXBlQXJndW1lbnRDb3VudDogbnVtYmVyO1xuICB0eXBlU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICBkZXBzOiBSM0RlcGVuZGVuY3lNZXRhZGF0YUZhY2FkZVtdfG51bGw7XG4gIHNlbGVjdG9yOiBzdHJpbmd8bnVsbDtcbiAgcXVlcmllczogUjNRdWVyeU1ldGFkYXRhRmFjYWRlW107XG4gIGhvc3Q6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBwcm9wTWV0YWRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnlbXX07XG4gIGxpZmVjeWNsZToge3VzZXNPbkNoYW5nZXM6IGJvb2xlYW47fTtcbiAgaW5wdXRzOiBzdHJpbmdbXTtcbiAgb3V0cHV0czogc3RyaW5nW107XG4gIHVzZXNJbmhlcml0YW5jZTogYm9vbGVhbjtcbiAgZXhwb3J0QXM6IHN0cmluZ1tdfG51bGw7XG4gIHByb3ZpZGVyczogUHJvdmlkZXJbXXxudWxsO1xuICB2aWV3UXVlcmllczogUjNRdWVyeU1ldGFkYXRhRmFjYWRlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNDb21wb25lbnRNZXRhZGF0YUZhY2FkZSBleHRlbmRzIFIzRGlyZWN0aXZlTWV0YWRhdGFGYWNhZGUge1xuICB0ZW1wbGF0ZTogc3RyaW5nO1xuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBib29sZWFuO1xuICBhbmltYXRpb25zOiBhbnlbXXx1bmRlZmluZWQ7XG4gIHBpcGVzOiBNYXA8c3RyaW5nLCBhbnk+O1xuICBkaXJlY3RpdmVzOiBSM1VzZWREaXJlY3RpdmVNZXRhZGF0YVtdO1xuICBzdHlsZXM6IHN0cmluZ1tdO1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbjtcbiAgdmlld1Byb3ZpZGVyczogUHJvdmlkZXJbXXxudWxsO1xuICBpbnRlcnBvbGF0aW9uPzogW3N0cmluZywgc3RyaW5nXTtcbiAgY2hhbmdlRGV0ZWN0aW9uPzogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k7XG59XG5cbmV4cG9ydCB0eXBlIE9wYXF1ZVZhbHVlID0gdW5rbm93bjtcblxuZXhwb3J0IGludGVyZmFjZSBSM0RlY2xhcmVEaXJlY3RpdmVGYWNhZGUge1xuICBzZWxlY3Rvcj86IHN0cmluZztcbiAgdHlwZTogRnVuY3Rpb247XG4gIGlucHV0cz86IHtbY2xhc3NQcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZ3xbc3RyaW5nLCBzdHJpbmddfTtcbiAgb3V0cHV0cz86IHtbY2xhc3NQcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZ307XG4gIGhvc3Q/OiB7XG4gICAgYXR0cmlidXRlcz86IHtba2V5OiBzdHJpbmddOiBPcGFxdWVWYWx1ZX07XG4gICAgbGlzdGVuZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gICAgcHJvcGVydGllcz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICAgIGNsYXNzQXR0cmlidXRlPzogc3RyaW5nO1xuICAgIHN0eWxlQXR0cmlidXRlPzogc3RyaW5nO1xuICB9O1xuICBxdWVyaWVzPzogUjNEZWNsYXJlUXVlcnlNZXRhZGF0YUZhY2FkZVtdO1xuICB2aWV3UXVlcmllcz86IFIzRGVjbGFyZVF1ZXJ5TWV0YWRhdGFGYWNhZGVbXTtcbiAgcHJvdmlkZXJzPzogT3BhcXVlVmFsdWU7XG4gIGV4cG9ydEFzPzogc3RyaW5nW107XG4gIHVzZXNJbmhlcml0YW5jZT86IGJvb2xlYW47XG4gIHVzZXNPbkNoYW5nZXM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzRGVjbGFyZUNvbXBvbmVudEZhY2FkZSBleHRlbmRzIFIzRGVjbGFyZURpcmVjdGl2ZUZhY2FkZSB7XG4gIHRlbXBsYXRlOiBzdHJpbmc7XG4gIGlzSW5saW5lPzogYm9vbGVhbjtcbiAgc3R5bGVzPzogc3RyaW5nW107XG4gIGRpcmVjdGl2ZXM/OiB7XG4gICAgc2VsZWN0b3I6IHN0cmluZzsgdHlwZTogT3BhcXVlVmFsdWUgfCAoKCkgPT4gT3BhcXVlVmFsdWUpO1xuICAgIGlucHV0cz86IHN0cmluZ1tdO1xuICAgIG91dHB1dHM/OiBzdHJpbmdbXTtcbiAgICBleHBvcnRBcz86IHN0cmluZ1tdO1xuICB9W107XG4gIHBpcGVzPzoge1twaXBlTmFtZTogc3RyaW5nXTogT3BhcXVlVmFsdWV8KCgpID0+IE9wYXF1ZVZhbHVlKX07XG4gIHZpZXdQcm92aWRlcnM/OiBPcGFxdWVWYWx1ZTtcbiAgYW5pbWF0aW9ucz86IE9wYXF1ZVZhbHVlO1xuICBjaGFuZ2VEZXRlY3Rpb24/OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcbiAgZW5jYXBzdWxhdGlvbj86IFZpZXdFbmNhcHN1bGF0aW9uO1xuICBpbnRlcnBvbGF0aW9uPzogW3N0cmluZywgc3RyaW5nXTtcbiAgcHJlc2VydmVXaGl0ZXNwYWNlcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNVc2VkRGlyZWN0aXZlTWV0YWRhdGEge1xuICBzZWxlY3Rvcjogc3RyaW5nO1xuICBpbnB1dHM6IHN0cmluZ1tdO1xuICBvdXRwdXRzOiBzdHJpbmdbXTtcbiAgZXhwb3J0QXM6IHN0cmluZ1tdfG51bGw7XG4gIHR5cGU6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0ZhY3RvcnlEZWZNZXRhZGF0YUZhY2FkZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogYW55O1xuICB0eXBlQXJndW1lbnRDb3VudDogbnVtYmVyO1xuICBkZXBzOiBSM0RlcGVuZGVuY3lNZXRhZGF0YUZhY2FkZVtdfG51bGw7XG4gIGluamVjdEZuOiAnZGlyZWN0aXZlSW5qZWN0J3wnaW5qZWN0JztcbiAgdGFyZ2V0OiBSM0ZhY3RvcnlUYXJnZXQ7XG59XG5cbmV4cG9ydCBlbnVtIFZpZXdFbmNhcHN1bGF0aW9uIHtcbiAgRW11bGF0ZWQgPSAwLFxuICAvLyBIaXN0b3JpY2FsbHkgdGhlIDEgdmFsdWUgd2FzIGZvciBgTmF0aXZlYCBlbmNhcHN1bGF0aW9uIHdoaWNoIGhhcyBiZWVuIHJlbW92ZWQgYXMgb2YgdjExLlxuICBOb25lID0gMixcbiAgU2hhZG93RG9tID0gM1xufVxuXG5leHBvcnQgdHlwZSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSA9IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBSM1F1ZXJ5TWV0YWRhdGFGYWNhZGUge1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcbiAgZmlyc3Q6IGJvb2xlYW47XG4gIHByZWRpY2F0ZTogYW55fHN0cmluZ1tdO1xuICBkZXNjZW5kYW50czogYm9vbGVhbjtcbiAgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk6IGJvb2xlYW47XG4gIHJlYWQ6IGFueXxudWxsO1xuICBzdGF0aWM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlUXVlcnlNZXRhZGF0YUZhY2FkZSB7XG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuICBmaXJzdD86IGJvb2xlYW47XG4gIHByZWRpY2F0ZTogT3BhcXVlVmFsdWV8c3RyaW5nW107XG4gIGRlc2NlbmRhbnRzPzogYm9vbGVhbjtcbiAgcmVhZD86IE9wYXF1ZVZhbHVlO1xuICBzdGF0aWM/OiBib29sZWFuO1xuICBlbWl0RGlzdGluY3RDaGFuZ2VzT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNEZWNsYXJlUGlwZUZhY2FkZSB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBuYW1lOiBzdHJpbmc7XG4gIHB1cmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlU291cmNlU3BhbiB7XG4gIHN0YXJ0OiBhbnk7XG4gIGVuZDogYW55O1xuICBkZXRhaWxzOiBhbnk7XG4gIGZ1bGxTdGFydDogYW55O1xufVxuIl19