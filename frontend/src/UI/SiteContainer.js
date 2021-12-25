import clsx from "clsx";

const SiteContainer = ({ className, children }) => (
  <div className={clsx("max-w-3xl mx-auto", className)}>{children}</div>
);
export default SiteContainer;
