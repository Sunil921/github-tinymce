
import { UploadHandler } from '../file/Uploader';
import { DynamicPatternsLookup, Pattern, RawDynamicPatternsLookup, RawPattern } from '../textpatterns/core/PatternTypes';
import Editor from './Editor';
import { PastePostProcessEvent, PastePreProcessEvent } from './EventTypes';
import { Formats } from './fmt/Format';
import { AllowedFormat } from './fmt/StyleFormat';
import { SchemaType } from './html/Schema';
import { EditorUiApi, Toolbar } from './ui/Ui';

export type EntityEncoding = 'named' | 'numeric' | 'raw' | 'named,numeric' | 'named+numeric' | 'numeric,named' | 'numeric+named';

export interface ContentLanguage {
  readonly title: string;
  readonly code: string;
  readonly customCode?: string;
}

export type ThemeInitFunc = (editor: Editor, elm: HTMLElement) => {
  editorContainer: HTMLElement;
  iframeContainer: HTMLElement;
  height?: number;
  iframeHeight?: number;
  api?: EditorUiApi;
};

export type SetupCallback = (editor: Editor) => void;

export type FilePickerCallback = (callback: (value: string, meta?: Record<string, any>) => void, value: string, meta: Record<string, any>) => void;
export type FilePickerValidationStatus = 'valid' | 'unknown' | 'invalid' | 'none';
export type FilePickerValidationCallback = (info: { type: string; url: string }, callback: (validation: { status: FilePickerValidationStatus; message: string }) => void) => void;

export type PastePreProcessFn = (editor: Editor, args: PastePreProcessEvent) => void;
export type PastePostProcessFn = (editor: Editor, args: PastePostProcessEvent) => void;

export type URLConverter = (url: string, name: string, elm?: string | Element) => string;
export type URLConverterCallback = (url: string, node: Node | string | undefined, on_save: boolean, name: string) => string;

export interface ToolbarGroup {
  name?: string;
  items: string[];
}

export type ToolbarMode = 'floating' | 'sliding' | 'scrolling' | 'wrap';
export type ToolbarLocation = 'top' | 'bottom' | 'auto';

export type ForceHexColor = 'always' | 'rgb_only' | 'off';

interface BaseEditorOptions {
  a11y_advanced_options?: boolean;
  add_form_submit_trigger?: boolean;
  add_unload_trigger?: boolean;
  allow_conditional_comments?: boolean;
  allow_html_data_urls?: boolean;
  allow_html_in_named_anchor?: boolean;
  allow_script_urls?: boolean;
  allow_svg_data_urls?: boolean;
  allow_unsafe_link_target?: boolean;
  anchor_bottom?: false | string;
  anchor_top?: false | string;
  auto_focus?: string | true;
  automatic_uploads?: boolean;
  base_url?: string;
  block_formats?: string;
  block_unsupported_drop?: boolean;
  body_id?: string;
  body_class?: string;
  br_in_pre?: boolean;
  br_newline_selector?: string;
  browser_spellcheck?: boolean;
  branding?: boolean;
  cache_suffix?: string;
  color_cols?: number;
  color_cols_foreground?: number;
  color_cols_background?: number;
  color_map?: string[];
  color_map_foreground?: string[];
  color_map_background?: string[];
  color_default_foreground?: string;
  color_default_background?: string;
  content_css?: boolean | string | string[];
  content_css_cors?: boolean;
  content_security_policy?: string;
  content_style?: string;
  content_langs?: ContentLanguage[];
  contextmenu?: string | string[] | false;
  contextmenu_never_use_native?: boolean;
  convert_fonts_to_spans?: boolean;
  convert_unsafe_embeds?: boolean;
  convert_urls?: boolean;
  custom_colors?: boolean;
  custom_elements?: string;
  custom_ui_selector?: string;
  custom_undo_redo_levels?: number;
  default_font_stack?: string[];
  deprecation_warnings?: boolean;
  directionality?: 'ltr' | 'rtl';
  doctype?: string;
  document_base_url?: string;
  draggable_modal?: boolean;
  editable_class?: string;
  editable_root?: boolean;
  element_format?: 'xhtml' | 'html';
  elementpath?: boolean;
  encoding?: string;
  end_container_on_empty_block?: boolean | string;
  entities?: string;
  entity_encoding?: EntityEncoding;
  extended_valid_elements?: string;
  event_root?: string;
  file_picker_callback?: FilePickerCallback;
  file_picker_types?: string;
  file_picker_validator_handler?: FilePickerValidationCallback;
  fix_list_elements?: boolean;
  fixed_toolbar_container?: string;
  fixed_toolbar_container_target?: HTMLElement;
  font_css?: string | string[];
  font_family_formats?: string;
  font_size_classes?: string;
  font_size_legacy_values?: string;
  font_size_style_values?: string;
  font_size_formats?: string;
  font_size_input_default_unit?: string;
  force_hex_color?: ForceHexColor;
  forced_root_block?: string;
  forced_root_block_attrs?: Record<string, string>;
  formats?: Formats;
  format_noneditable_selector?: string;
  height?: number | string;
  help_accessibility?: boolean;
  hidden_input?: boolean;
  highlight_on_focus?: boolean;
  icons?: string;
  icons_url?: string;
  id?: string;
  iframe_aria_text?: string;
  iframe_attrs?: Record<string, string>;
  images_file_types?: string;
  images_replace_blob_uris?: boolean;
  images_reuse_filename?: boolean;
  images_upload_base_path?: string;
  images_upload_credentials?: boolean;
  images_upload_handler?: UploadHandler;
  images_upload_url?: string;
  indent?: boolean;
  indent_after?: string;
  indent_before?: string;
  indent_use_margin?: boolean;
  indentation?: string;
  init_instance_callback?: SetupCallback;
  inline?: boolean;
  inline_boundaries?: boolean;
  inline_boundaries_selector?: string;
  inline_styles?: boolean;
  invalid_elements?: string;
  invalid_styles?: string | Record<string, string>;
  keep_styles?: boolean;
  language?: string;
  language_load?: boolean;
  language_url?: string;
  line_height_formats?: string;
  max_height?: number;
  max_width?: number;
  menu?: Record<string, { title: string; items: string }>;
  menubar?: boolean | string;
  min_height?: number;
  min_width?: number;
  model?: string;
  model_url?: string;
  newdocument_content?: string;
  newline_behavior?: 'block' | 'linebreak' | 'invert' | 'default';
  no_newline_selector?: string;
  noneditable_class?: string;
  noneditable_regexp?: RegExp | RegExp[];
  nowrap?: boolean;
  object_resizing?: boolean | string;
  pad_empty_with_br?: boolean;
  paste_as_text?: boolean;
  paste_block_drop?: boolean;
  paste_data_images?: boolean;
  paste_merge_formats?: boolean;
  paste_postprocess?: PastePostProcessFn;
  paste_preprocess?: PastePreProcessFn;
  paste_remove_styles_if_webkit?: boolean;
  paste_tab_spaces?: number;
  paste_webkit_styles?: string;
  placeholder?: string;
  preserve_cdata?: boolean;
  preview_styles?: false | string;
  promotion?: boolean;
  protect?: RegExp[];
  readonly?: boolean;
  referrer_policy?: ReferrerPolicy;
  relative_urls?: boolean;
  remove_script_host?: boolean;
  remove_trailing_brs?: boolean;
  removed_menuitems?: string;
  resize?: boolean | 'both';
  resize_img_proportional?: boolean;
  root_name?: string;
  sandbox_iframes?: boolean;
  sandbox_iframes_whitelist?: string[];
  schema?: SchemaType;
  selector?: string;
  setup?: SetupCallback;
  sidebar_show?: string;
  skin?: boolean | string;
  skin_url?: string;
  smart_paste?: boolean;
  statusbar?: boolean;
  style_formats?: AllowedFormat[];
  style_formats_autohide?: boolean;
  style_formats_merge?: boolean;
  submit_patch?: boolean;
  suffix?: string;
  table_tab_navigation?: boolean;
  target?: HTMLElement;
  text_patterns?: RawPattern[] | false;
  text_patterns_lookup?: RawDynamicPatternsLookup;
  theme?: string | ThemeInitFunc | false;
  theme_url?: string;
  toolbar?: boolean | string | string[] | Array<ToolbarGroup>;
  toolbar1?: string;
  toolbar2?: string;
  toolbar3?: string;
  toolbar4?: string;
  toolbar5?: string;
  toolbar6?: string;
  toolbar7?: string;
  toolbar8?: string;
  toolbar9?: string;
  toolbar_groups?: Record<string, Toolbar.GroupToolbarButtonSpec>;
  toolbar_location?: ToolbarLocation;
  toolbar_mode?: ToolbarMode;
  toolbar_sticky?: boolean;
  toolbar_sticky_offset?: number;
  typeahead_urls?: boolean;
  ui_mode?: 'combined' | 'split';
  url_converter?: URLConverter;
  url_converter_scope?: any;
  urlconverter_callback?: URLConverterCallback;
  valid_children?: string;
  valid_classes?: string | Record<string, string>;
  valid_elements?: string;
  valid_styles?: string | Record<string, string>;
  verify_html?: boolean;
  visual?: boolean;
  visual_anchor_class?: string;
  visual_table_class?: string;
  width?: number | string;
  xss_sanitization?: boolean;

  // Internal settings (used by cloud or tests)
  disable_nodechange?: boolean;
  forced_plugins?: string | string[];
  plugin_base_urls?: Record<string, string>;
  service_message?: string;

  // Allow additional dynamic settings
  [key: string]: any;
}

export interface RawEditorOptions extends BaseEditorOptions {
  external_plugins?: Record<string, string>;
  mobile?: RawEditorOptions;
  plugins?: string | string[];
}

// NormalizeOptions.ts processes the plugins setting to turn it into a string
// and merges in the mobile settings
export interface NormalizedEditorOptions extends BaseEditorOptions {
  external_plugins: Record<string, string>;
  forced_plugins: string[];
  plugins: string[];
}

export interface EditorOptions extends NormalizedEditorOptions {
  a11y_advanced_options: boolean;
  allow_unsafe_link_target: boolean;
  anchor_bottom: string;
  anchor_top: string;
  automatic_uploads: boolean;
  block_formats: string;
  body_class: string;
  body_id: string;
  br_newline_selector: string;
  color_map: string[];
  color_cols: number;
  color_cols_foreground: number;
  color_cols_background: number;
  color_default_background: string;
  color_default_foreground: string;
  content_css: string[];
  contextmenu: string[];
  convert_unsafe_embeds: boolean;
  custom_colors: boolean;
  default_font_stack: string[];
  document_base_url: string;
  init_content_sync: boolean;
  draggable_modal: boolean;
  editable_class: string;
  editable_root: boolean;
  font_css: string[];
  font_family_formats: string;
  font_size_classes: string;
  font_size_formats: string;
  font_size_input_default_unit: string;
  font_size_legacy_values: string;
  font_size_style_values: string;
  forced_root_block: string;
  forced_root_block_attrs: Record<string, string>;
  force_hex_color: ForceHexColor;
  format_noneditable_selector: string;
  height: number | string;
  highlight_on_focus: boolean;
  iframe_attrs: Record<string, string>;
  images_file_types: string;
  images_upload_base_path: string;
  images_upload_credentials: boolean;
  images_upload_url: string;
  indent_use_margin: boolean;
  indentation: string;
  inline: boolean;
  inline_boundaries_selector: string;
  language: string;
  language_load: boolean;
  language_url: string;
  line_height_formats: string;
  menu: Record<string, { title: string; items: string }>;
  menubar: boolean | string;
  model: string;
  newdocument_content: string;
  no_newline_selector: string;
  noneditable_class: string;
  noneditable_regexp: RegExp[];
  object_resizing: string;
  pad_empty_with_br: boolean;
  paste_as_text: boolean;
  preview_styles: string;
  promotion: boolean;
  readonly: boolean;
  removed_menuitems: string;
  sandbox_iframes: boolean;
  sandbox_iframes_whitelist: string[];
  toolbar: boolean | string | string[] | Array<ToolbarGroup>;
  toolbar_groups: Record<string, Toolbar.GroupToolbarButtonSpec>;
  toolbar_location: ToolbarLocation;
  toolbar_mode: ToolbarMode;
  toolbar_persist: boolean;
  toolbar_sticky: boolean;
  toolbar_sticky_offset: number;
  text_patterns: Pattern[];
  text_patterns_lookup: DynamicPatternsLookup;
  visual: boolean;
  visual_anchor_class: string;
  visual_table_class: string;
  width: number | string;
  xss_sanitization: boolean;
}
