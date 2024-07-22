import React from "react";

interface MembershipCardProps {
  number: string;
  title: string;
  text: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  number,
  title,
  text,
}) => {
  return (
    <section className="flex flex-row items-start gap-[14px] py-2">
      <p className="font-bold text-base">{number}</p>
      <div className="flex flex-col gap-2">
        <p className="font-bold lg:text-[16px]">{title}</p>
        <p className="text-[18px] ">{text}</p>
      </div>
    </section>
  );
};

export default MembershipCard;
