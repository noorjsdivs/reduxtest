interface Props {
  children: React.ReactElement | React.ReactElement[];
  className: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-screen-2xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
