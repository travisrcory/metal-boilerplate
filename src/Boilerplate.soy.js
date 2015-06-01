/* jshint ignore:start */
import ComponentRegistry from 'bower:metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from Boilerplate.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Boilerplate.
 * @hassoydeltemplate {Boilerplate}
 * @hassoydeltemplate {Boilerplate.body}
 * @hassoydeltemplate {Boilerplate.footer}
 * @hassoydeltemplate {Boilerplate.header}
 * @hassoydelcall {Boilerplate}
 * @hassoydelcall {Boilerplate.body}
 * @hassoydelcall {Boilerplate.footer}
 * @hassoydelcall {Boilerplate.header}
 */

if (typeof Templates.Boilerplate == 'undefined') { Templates.Boilerplate = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Boilerplate.header'), '', true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId('Boilerplate.body'), '', true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId('Boilerplate.footer'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Boilerplate.content.soyTemplateName = 'Templates.Boilerplate.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<a class="close" data-onclick="close">Close</a>' + soy.$$escapeHtml(opt_data.headerContent));
};
if (goog.DEBUG) {
  Templates.Boilerplate.header.soyTemplateName = 'Templates.Boilerplate.header';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.body = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.bodyContent));
};
if (goog.DEBUG) {
  Templates.Boilerplate.body.soyTemplateName = 'Templates.Boilerplate.body';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.footer = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.footerContent));
};
if (goog.DEBUG) {
  Templates.Boilerplate.footer.soyTemplateName = 'Templates.Boilerplate.footer';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s13_a0027742 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Boilerplate'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Boilerplate.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s13_a0027742.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s13_a0027742';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate'), '', 0, Templates.Boilerplate.__deltemplate_s13_a0027742);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s19_de4501e9 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="boilerplate component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s19_de4501e9.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s19_de4501e9';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate'), 'element', 0, Templates.Boilerplate.__deltemplate_s19_de4501e9);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s27_a2522d20 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy28 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'header');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy28) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s27_a2522d20.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s27_a2522d20';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate.header'), 'element', 0, Templates.Boilerplate.__deltemplate_s27_a2522d20);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s34_90bffbc9 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Boilerplate.header'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Boilerplate.header(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s34_90bffbc9.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s34_90bffbc9';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate.header'), '', 0, Templates.Boilerplate.__deltemplate_s34_90bffbc9);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s39_ad141ca5 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy40 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'body');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy40) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s39_ad141ca5.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s39_ad141ca5';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate.body'), 'element', 0, Templates.Boilerplate.__deltemplate_s39_ad141ca5);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s46_6643f8c6 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Boilerplate.body'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Boilerplate.body(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s46_6643f8c6.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s46_6643f8c6';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate.body'), '', 0, Templates.Boilerplate.__deltemplate_s46_6643f8c6);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s51_99da60a0 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy52 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'footer');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy52) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s51_99da60a0.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s51_99da60a0';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate.footer'), 'element', 0, Templates.Boilerplate.__deltemplate_s51_99da60a0);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Boilerplate.__deltemplate_s58_391970bc = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Boilerplate.footer'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Boilerplate.footer(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Boilerplate.__deltemplate_s58_391970bc.soyTemplateName = 'Templates.Boilerplate.__deltemplate_s58_391970bc';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Boilerplate.footer'), '', 0, Templates.Boilerplate.__deltemplate_s58_391970bc);

Templates.Boilerplate.header.params = ["headerContent"];
Templates.Boilerplate.body.params = ["bodyContent"];
Templates.Boilerplate.footer.params = ["footerContent"];
/* jshint ignore:end */
