export default function Priority({ priority }) {
  const additionalStars = 5 - priority;
  return (
    <div>
      {[...Array(priority)].map((_, i) => (
        <i key={i} className={`fa-solid fa-fire text-red-400 pr-1`} />
      ))}
      {[...Array(additionalStars)].map((_, i) => (
        <i key={i} className={`fa-solid fa-fire pr-1`} />
      ))}
    </div>
  );
}
