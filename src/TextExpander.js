import PropTypes from "prop-types";
import { useState } from "react";

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  const textStyle = {
    color: `${buttonColor}`,
    background: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: "6px",
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={toggleExpanded} style={textStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
