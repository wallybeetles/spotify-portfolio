const Badge = (props: BadgeProps) => (
  <span className="font-semibold text-xs text-white bg-gray-300 rounded-full hover:underline px-3 py-1 md:py-2">
    {props.text}
  </span>
);

type BadgeProps = {
  text: string;
};

export default Badge;
