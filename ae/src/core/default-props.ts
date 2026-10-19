import {
  ComponentConstructor,
  QAjaxBar,
  QAvatar,
  QBadge,
  QBanner,
  QBar,
  QBreadcrumbs,
  QBreadcrumbsEl,
  QBtn,
  QBtnDropdown,
  QBtnGroup,
  QBtnToggle,
  QCard,
  QCardActions,
  QCardSection,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  QChatMessage,
  QCheckbox,
  QChip,
  QCircularProgress,
  QColor,
  QDate,
  QDialog,
  QDrawer,
  QEditor,
  QExpansionItem,
  QFab,
  QFabAction,
  QField,
  QFile,
  QForm,
  QHeader,
  QIcon,
  QImg,
  QInfiniteScroll,
  QInnerLoading,
  QInput,
  QIntersection,
  QItem,
  QItemLabel,
  QItemSection,
  QKnob,
  QLayout,
  QLinearProgress,
  QList,
  QMarkupTable,
  QMenu,
  QNoSsr,
  QOptionGroup,
  QPagination,
  QParallax,
  QPopupEdit,
  QPopupProxy,
  QPullToRefresh,
  QRadio,
  QRange,
  QRating,
  QResizeObserver,
  QResponsive,
  QScrollArea,
  QScrollObserver,
  QSelect,
  QSeparator,
  QSkeleton,
  QSlideItem,
  QSlider,
  QSlideTransition,
  QSpace,
  QSpinner,
  QSplitter,
  QStepper,
  QTab,
  QTable,
  QTabPanel,
  QTabPanels,
  QTabs,
  QTime,
  QTimeline,
  QToggle,
  QToolbar,
  QTooltip,
  QTree,
  QUploader,
  QVideo,
  QVirtualScroll,
} from "quasar";

export type TQuasarComponent =
  | "ajax-bar"
  | "avatar"
  | "badge"
  | "banner"
  | "bar"
  | "breadcrumbs"
  | "breadcrumbs-el"
  | "btn"
  | "btn-group"
  | "btn-dropdown"
  | "btn-toggle"
  | "card"
  | "card-section"
  | "card-actions"
  | "carousel"
  | "carousel-control"
  | "carousel-slide"
  | "chat-message"
  | "chip"
  | "circular-progress"
  | "color"
  | "dialog"
  | "editor"
  | "expansion-item"
  | "fab"
  | "fab-action"
  | "input"
  | "select"
  | "file"
  | "form"
  | "field"
  | "radio"
  | "checkbox"
  | "toggle"
  | "option-group"
  | "slider"
  | "range"
  | "time"
  | "date"
  | "icon"
  | "img"
  | "infinite-scroll"
  | "inner-loading"
  | "intersection"
  | "knob"
  | "linear-progress"
  | "list"
  | "item"
  | "item-section"
  | "item-label"
  | "markup-table"
  | "menu"
  | "no-ssr"
  | "resize-observer"
  | "scroll-observer"
  | "pagination"
  | "parallax"
  | "popup-edit"
  | "popup-proxy"
  | "pull-to-refresh"
  | "rating"
  | "responsive"
  | "scroll-area"
  | "separator"
  | "skeleton"
  | "slide-item"
  | "slide-transition"
  | "space"
  | "spinner"
  | "splitter"
  | "stepper"
  | "table"
  | "tabs"
  | "tab"
  | "tab-panels"
  | "tab-panel"
  | "timeline"
  | "toolbar"
  | "tooltip"
  | "tree"
  | "uploader"
  | "video"
  | "virtual-scroll"
  | "layout"
  | "header"
  | "drawer";

const componentByName: Record<TQuasarComponent, ComponentConstructor> = {
  "ajax-bar": QAjaxBar,
  avatar: QAvatar,
  badge: QBadge,
  banner: QBanner,
  bar: QBar,
  breadcrumbs: QBreadcrumbs,
  "breadcrumbs-el": QBreadcrumbsEl,
  btn: QBtn,
  "btn-group": QBtnGroup,
  "btn-dropdown": QBtnDropdown,
  "btn-toggle": QBtnToggle,
  card: QCard,
  "card-section": QCardSection,
  "card-actions": QCardActions,
  carousel: QCarousel,
  "carousel-control": QCarouselControl,
  "carousel-slide": QCarouselSlide,
  "chat-message": QChatMessage,
  chip: QChip,
  "circular-progress": QCircularProgress,
  color: QColor,
  dialog: QDialog,
  editor: QEditor,
  "expansion-item": QExpansionItem,
  fab: QFab,
  "fab-action": QFabAction,
  input: QInput,
  select: QSelect,
  file: QFile,
  form: QForm,
  field: QField,
  radio: QRadio,
  checkbox: QCheckbox,
  toggle: QToggle,
  "option-group": QOptionGroup,
  slider: QSlider,
  range: QRange,
  time: QTime,
  date: QDate,
  icon: QIcon,
  img: QImg,
  "infinite-scroll": QInfiniteScroll,
  "inner-loading": QInnerLoading,
  intersection: QIntersection,
  knob: QKnob,
  "linear-progress": QLinearProgress,
  list: QList,
  item: QItem,
  "item-section": QItemSection,
  "item-label": QItemLabel,
  "markup-table": QMarkupTable,
  menu: QMenu,
  "no-ssr": QNoSsr,
  "resize-observer": QResizeObserver,
  "scroll-observer": QScrollObserver,
  pagination: QPagination,
  parallax: QParallax,
  "popup-edit": QPopupEdit,
  "popup-proxy": QPopupProxy,
  "pull-to-refresh": QPullToRefresh,
  rating: QRating,
  responsive: QResponsive,
  "scroll-area": QScrollArea,
  separator: QSeparator,
  skeleton: QSkeleton,
  "slide-item": QSlideItem,
  "slide-transition": QSlideTransition,
  space: QSpace,
  spinner: QSpinner,
  splitter: QSplitter,
  stepper: QStepper,
  table: QTable,
  tabs: QTabs,
  tab: QTab,
  "tab-panels": QTabPanels,
  "tab-panel": QTabPanel,
  timeline: QTimeline,
  toolbar: QToolbar,
  tooltip: QTooltip,
  tree: QTree,
  uploader: QUploader,
  video: QVideo,
  "virtual-scroll": QVirtualScroll,
  layout: QLayout,
  header: QHeader,
  drawer: QDrawer,
};

export function setPropsByComponent(
  component: TQuasarComponent,
  propsName: string,
  value: unknown,
) {
  const quasarComponent = componentByName[component];
  const type = {
    number: Number,
    string: String,
    boolean: Boolean,
    bigint: undefined,
    function: undefined,
    symbol: undefined,
    object: undefined,
    undefined: undefined,
  }[typeof value];
  const props: { default: unknown; type?: unknown } = {
    default: value,
  };
  if (type) {
    props.type = type;
  }
  quasarComponent.props[propsName] = props;
}

export function setupBigBangProps() {
  const defaultTransitionDuration = 150;
  const transitionShow = "fade";
  const transitionHide = "fade";
  const expandIcon = "keyboard_arrow_down";
  const expandIcon2 = "chevron_right";

  setPropsByComponent("layout", "view", "lHh LpR fFf");

  setPropsByComponent("btn", "unelevated", true);
  setPropsByComponent("btn", "noCaps", true);
  setPropsByComponent("btn", "dense", true);
  setPropsByComponent("btn", "color", "secondary");

  setPropsByComponent("btn-group", "unelevated", true);
  setPropsByComponent("btn-group", "color", "secondary");

  setPropsByComponent("btn-dropdown", "unelevated", true);
  setPropsByComponent("btn-dropdown", "noCaps", true);
  setPropsByComponent("btn-dropdown", "dense", true);
  setPropsByComponent("btn-dropdown", "dropdownIcon", expandIcon);
  setPropsByComponent("btn-dropdown", "color", "secondary");

  setPropsByComponent("btn-toggle", "unelevated", true);
  setPropsByComponent("btn-toggle", "noCaps", true);
  setPropsByComponent("btn-toggle", "dense", true);
  setPropsByComponent("btn-toggle", "color", "secondary");

  setPropsByComponent("card", "bordered", true);

  setPropsByComponent("menu", "transitionDuration", defaultTransitionDuration);

  setPropsByComponent("header", "bordered", true);

  setPropsByComponent("drawer", "bordered", true);

  setPropsByComponent("item", "dense", true);

  setPropsByComponent("expansion-item", "dense", true);
  setPropsByComponent("expansion-item", "denseToggle", false);
  setPropsByComponent("expansion-item", "duration", defaultTransitionDuration);
  setPropsByComponent("expansion-item", "expandIcon", expandIcon);

  setPropsByComponent("icon", "size", "20px");

  setPropsByComponent("tabs", "noCaps", true);

  setPropsByComponent("tab", "noCaps", true);

  setPropsByComponent("date", "minimal", true);

  setPropsByComponent("list", "dense", true);

  setPropsByComponent("field", "dense", true);
  setPropsByComponent("field", "outlined", true);
  setPropsByComponent("field", "hideBottomSpace", true);

  setPropsByComponent("input", "dense", true);
  setPropsByComponent("input", "outlined", true);
  setPropsByComponent("input", "hideBottomSpace", true);

  setPropsByComponent("select", "dense", true);
  setPropsByComponent("select", "outlined", true);
  setPropsByComponent("select", "optionsDense", true);
  setPropsByComponent("select", "hideBottomSpace", true);
  setPropsByComponent("select", "dropdownIcon", expandIcon);

  setPropsByComponent("toggle", "dense", true);

  setPropsByComponent("radio", "dense", true);

  setPropsByComponent("uploader", "bordered", true);

  setPropsByComponent(
    "tooltip",
    "transitionDuration",
    defaultTransitionDuration,
  );
  setPropsByComponent("tooltip", "transitionShow", transitionShow);
  setPropsByComponent("tooltip", "transitionHide", transitionHide);

  setPropsByComponent("banner", "dense", true);

  setPropsByComponent(
    "dialog",
    "transitionDuration",
    defaultTransitionDuration,
  );
  setPropsByComponent("dialog", "transitionShow", transitionShow);
  setPropsByComponent("dialog", "transitionHide", transitionHide);

  setPropsByComponent("tree", "dense", true);
  setPropsByComponent("tree", "duration", defaultTransitionDuration);
  setPropsByComponent("tree", "noConnectors", true);
  setPropsByComponent("tree", "icon", expandIcon2);
}
