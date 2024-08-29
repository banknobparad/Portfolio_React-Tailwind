const Tech = ({ isHighLight, data = [] }) => {
  return (
    <div>
      <div className="flex gap-2">
        {data.map((e, i) => (
          <div
            key={`${e}-tech-${i}`}
            className={`bg-primaryBgbtn px-2 py-1 rounded-md ${isHighLight ? "text-primaryAccent" : "text-primaryBase"
              }`}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
