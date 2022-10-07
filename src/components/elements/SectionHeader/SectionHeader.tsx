import "./SectionHeader.scss";

interface ISectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: ISectionHeaderProps) => {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      <h3 className="section-header__subtitle">{subtitle}</h3>
    </div>
  );
};

export default SectionHeader;
