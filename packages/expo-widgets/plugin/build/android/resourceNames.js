"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviderClassName = getProviderClassName;
exports.getWidgetInfoResourceName = getWidgetInfoResourceName;
exports.getWidgetDisplayNameResourceName = getWidgetDisplayNameResourceName;
exports.getWidgetDescriptionResourceName = getWidgetDescriptionResourceName;
function toAndroidResourceName(name) {
    const resourceName = name
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .replace(/[^A-Za-z0-9_]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '')
        .toLowerCase();
    return /^[a-z]/.test(resourceName) ? resourceName : `widget_${resourceName}`;
}
function getProviderClassName(widget) {
    return `${widget.name}Provider`;
}
function getWidgetInfoResourceName(widget) {
    return `${toAndroidResourceName(widget.name)}_info`;
}
function getWidgetDisplayNameResourceName(widget) {
    return `${toAndroidResourceName(widget.name)}_display_name`;
}
function getWidgetDescriptionResourceName(widget) {
    return `${toAndroidResourceName(widget.name)}_description`;
}
