import "./SectionDivider.scss";

interface ISectionDividerProps {
  left?: boolean;
  right?: boolean;
}

const SectionDivider = ({ left, right }: ISectionDividerProps) => {
  const renderedDivider = () => {
    if (left) {
      return <div className="section-divider section-divider--left"></div>;
    } else if (right) {
      return <div className="section-divider section-divider--right"></div>;
    } else {
      return <div className="section-divider"></div>;
    }
  };

  return <>{renderedDivider()}</>;
};

export default SectionDivider;
