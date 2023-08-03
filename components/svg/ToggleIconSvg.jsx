export const ToggleIconSvg = ({ isToggled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={81}
      height={22}
      fill="none"
      className={`toggle ${isToggled ? "active" : ""}`}>
      <rect
        width={40}
        height={20}
        y={1}
        fill={isToggled ? "#a445ed" : "#757575"}
        rx={10}
      />
      <circle cx={isToggled ? 30 : 10} cy={11} r={7} fill="#fff" />
      <path
        stroke={isToggled ? "#a445ed" : "#757575"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M60 10.449a10.545 10.545 0 0 0 19.993 4.686c-9.449 0-14.135-4.687-14.135-14.135A10.545 10.545 0 0 0 60 10.449Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
