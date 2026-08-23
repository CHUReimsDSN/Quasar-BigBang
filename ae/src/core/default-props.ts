import {
  QBtn,
  QBtnDropdown,
  QCard,
  QDate,
  QDrawer,
  QExpansionItem,
  QField,
  QHeader,
  QIcon,
  QInput,
  QItem,
  QList,
  QMenu,
  QSelect,
  QTab,
} from "quasar";

export function setupDefaultProps() {
  const defaultTransitionDuration = 200;
  const transitionShow = "fade";
  const transitionHide = "fade";

  QBtn.props.unelevated = {
    type: Boolean,
    default: true,
  };
  QBtn.props.noCaps = {
    type: Boolean,
    default: true,
  };
  QBtn.props.dense = {
    type: Boolean,
    default: true,
  };

  QBtnDropdown.props.unelevated = {
    type: Boolean,
    default: true,
  };
  QBtnDropdown.props.noCaps = {
    type: Boolean,
    default: true,
  };
  QBtnDropdown.props.dense = {
    type: Boolean,
    default: true,
  };

  QCard.props.bordered = {
    type: Boolean,
    default: true,
  };

  QMenu.props.transitionDuration.default = defaultTransitionDuration;

  QHeader.props.bordered = {
    type: Boolean,
    default: true,
  };

  QDrawer.props.bordered = {
    type: Boolean,
    default: true,
  };

  QItem.props.dense = {
    type: Boolean,
    default: true,
  };

  QExpansionItem.props.dense = {
    type: Boolean,
    default: true,
  };

  QIcon.props.size = {
    type: String,
    default: "20px",
  };

  QTab.props.noCaps = {
    type: Boolean,
    default: true,
  };

  QDate.props.minimal = {
    type: Boolean,
    default: true,
  };

  QList.props.dense = {
    type: Boolean,
    default: true,
  };

  QField.props.dense = {
    type: Boolean,
    default: true,
  };
  QField.props.outlined = {
    type: Boolean,
    default: true,
  };
  QField.props.hideBottomSpace = {
    type: Boolean,
    default: true,
  };

  QInput.props.dense = {
    type: Boolean,
    default: true,
  };
  QInput.props.outlined = {
    type: Boolean,
    default: true,
  };
  QInput.props.hideBottomSpace = {
    type: Boolean,
    default: true,
  };

  QSelect.props.dense = {
    type: Boolean,
    default: true,
  };
  QSelect.props.outlined = {
    type: Boolean,
    default: true,
  };
  QSelect.props.optionsDense = {
    type: Boolean,
    default: true,
  };
  QSelect.props.hideBottomSpace = {
    type: Boolean,
    default: true,
  };
}
