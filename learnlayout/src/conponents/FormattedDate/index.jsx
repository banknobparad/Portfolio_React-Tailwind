const FormattedDate = ({ isHighLight, children }) => {
  return (
    <div>
      <span
        className={`text-sm ${isHighLight ? "text-primaryContent" : "text-primaryBase"
          }`}
      >
        {children}
      </span>
    </div>
  );
};

export default FormattedDate;
