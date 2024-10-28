type RequiremtListItemProps = {
  title: string;
};

export function RequiremtListItem({ title }: RequiremtListItemProps) {
  return (
    <div className="text-white flex items-center gap-3 py-2">
      <img src="/icons/checked-icon.svg" alt="" />
      <h1>{title}</h1>
    </div>
  );
}
