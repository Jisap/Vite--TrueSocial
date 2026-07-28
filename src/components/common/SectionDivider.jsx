const SectionDivider = ({
    children,
    leftClassName = "flex-1",
    rightClassName = "flex-1",
    className = "",
}) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <span
                className={`block h-px bg-[#3A3A3A] ${leftClassName}`}
                aria-hidden="true"
            />

            <span className="shrink-0">
                {children}
            </span>

            <span
                className={`block h-px bg-[#3A3A3A] ${rightClassName}`}
                aria-hidden="true"
            />
        </div>
    );
};

export default SectionDivider;